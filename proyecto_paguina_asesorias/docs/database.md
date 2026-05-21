# Script SQL de la Base de Datos

Este documento contiene el script SQL de creación de la base de datos para el portal de **Recursos Académicos y Asesorías**. Define las tablas, restricciones, claves foráneas, índices y triggers basados en el [Modelo de Entidades](entities.md).

---

> [!NOTE]
> Este archivo sirve como el repositorio oficial de la estructura de la base de datos (DDL).

## 1. Instrucciones de Uso

Para desplegar esta base de datos en su entorno local o de producción:

1. Asegúrese de tener instalado el motor de base de datos relacional compatible (ej. PostgreSQL / MySQL).
2. Cree una base de datos limpia:
   ```sql
   CREATE DATABASE asesorias_unam;
   ```
3. Ejecute el script contenido en la sección a continuación para generar todo el esquema de tablas e índices.

---

## 2. Script SQL de Creación (DDL)

Reemplace el siguiente bloque con el código SQL real utilizado para generar las tablas:

```sql
-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE academico.asesoria (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  asesor_id uuid NOT NULL,
  materia_id uuid NOT NULL,
  tema_especifico character varying NOT NULL,
  fecha_hora timestamp with time zone NOT NULL,
  duracion_minutos integer DEFAULT 60,
  estado character varying DEFAULT 'disponible'::character varying CHECK (estado::text = ANY (ARRAY['disponible'::character varying, 'reservada'::character varying, 'completada'::character varying, 'cancelada'::character varying]::text[])),
  modalidad character varying NOT NULL CHECK (modalidad::text = ANY (ARRAY['online'::character varying, 'presencial'::character varying]::text[])),
  enlace_reunion character varying,
  salon character varying,
  calificacion_estudiante integer CHECK (calificacion_estudiante >= 1 AND calificacion_estudiante <= 5),
  retroalimentacion_estudiante text,
  creado_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  actualizado_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT asesoria_pkey PRIMARY KEY (id),
  CONSTRAINT asesoria_asesor_id_fkey FOREIGN KEY (asesor_id) REFERENCES academico.usuario(id),
  CONSTRAINT asesoria_materia_id_fkey FOREIGN KEY (materia_id) REFERENCES academico.materia(id)
);
CREATE TABLE academico.asesoria_estudiante (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  asesoria_id uuid NOT NULL,
  estudiante_id uuid NOT NULL,
  inscrito_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT asesoria_estudiante_pkey PRIMARY KEY (id),
  CONSTRAINT asesoria_estudiante_asesoria_id_fkey FOREIGN KEY (asesoria_id) REFERENCES academico.asesoria(id),
  CONSTRAINT asesoria_estudiante_estudiante_id_fkey FOREIGN KEY (estudiante_id) REFERENCES academico.usuario(id)
);
CREATE TABLE academico.materia (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  nombre character varying NOT NULL,
  codigo_materia character varying NOT NULL UNIQUE,
  semestre integer NOT NULL CHECK (semestre >= 1 AND semestre <= 8),
  departamento character varying,
  creado_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT materia_pkey PRIMARY KEY (id)
);
CREATE TABLE academico.recurso (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  titulo character varying NOT NULL,
  descripcion text,
  archivo_url character varying NOT NULL,
  tipo_archivo character varying NOT NULL CHECK (tipo_archivo::text = ANY (ARRAY['PDF'::character varying, 'PPT'::character varying, 'LINK'::character varying, 'CODE'::character varying]::text[])),
  materia_id uuid NOT NULL,
  autor_id uuid,
  autor_nombre character varying NOT NULL,
  descargas_count integer DEFAULT 0,
  estado character varying DEFAULT 'aprobado'::character varying CHECK (estado::text = ANY (ARRAY['pendiente'::character varying, 'aprobado'::character varying, 'rechazado'::character varying]::text[])),
  creado_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  actualizado_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT recurso_pkey PRIMARY KEY (id),
  CONSTRAINT recurso_materia_id_fkey FOREIGN KEY (materia_id) REFERENCES academico.materia(id),
  CONSTRAINT recurso_autor_id_fkey FOREIGN KEY (autor_id) REFERENCES academico.usuario(id)
);
CREATE TABLE academico.registro_descarga (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  recurso_id uuid NOT NULL,
  usuario_id uuid,
  ip_address character varying NOT NULL,
  descargado_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT registro_descarga_pkey PRIMARY KEY (id),
  CONSTRAINT registro_descarga_recurso_id_fkey FOREIGN KEY (recurso_id) REFERENCES academico.recurso(id),
  CONSTRAINT registro_descarga_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES academico.usuario(id)
);
CREATE TABLE academico.usuario (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  nombre character varying NOT NULL,
  email character varying NOT NULL UNIQUE,
  contrasena_hash character varying NOT NULL,
  rol character varying NOT NULL CHECK (rol::text = ANY (ARRAY['estudiante'::character varying, 'asesor'::character varying, 'admin'::character varying]::text[])),
  avatar_url character varying,
  semestre integer,
  creado_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  actualizado_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT usuario_pkey PRIMARY KEY (id)
);
```

---

## 3. Relación con el Modelo de Dominio

Este script implementa directamente el diseño especificado en el archivo de [Modelo de Entidades de Dominio](entities.md). Cualquier cambio estructural en la base de datos debe verse reflejado e ir en sincronía en ambos documentos.
