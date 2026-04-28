import React from 'react';
import { TarjetaMateria } from '../TarjetaMateria/TarjetaMateria';
import styles from './TarjetasMaterias.module.css';

export const TarjetasMaterias: React.FC = () => {
  const materias = [
    { id: 1, titulo: "Cálculo Diferencial e Integral I", profesor: "Dr. Roberto Hernández", recursos: 45, semestre: 1 },
    { id: 2, titulo: "Álgebra Superior I", profesor: "Dra. Maria González", recursos: 38, semestre: 1 },
    { id: 3, titulo: "Geometría Analítica I", profesor: "Dr. Carlos Ramírez", recursos: 32, semestre: 1 },
  ];

  return (
    <section className={styles.seccion}>
      <h2 className={styles.tituloSeccion}>Materias Destacadas</h2>
      <div className={styles.grid}>
        {materias.map((m) => (
          <TarjetaMateria key={m.id} {...m} />
        ))}
      </div>
      <button className={styles.botonVer}>Ver Todas las Materias</button>
    </section>
  );
};