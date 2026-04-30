import styles from './RecursosRecientes.module.css';
import { FilterBar } from './FilterBar';
import { ResourceCard } from './ResourceCard';
import { RiFilePdfLine, RiSlideshowLine, RiLink } from "@remixicon/react";

const resources = [
    {
        id: 1,
        title: "Apuntes Completos de Cálculo Diferencial",
        type: "PDF",
        bg: "bg-red-500",
        icon: <RiFilePdfLine />,
        semester: "Semestre 1",
        course: "Cálculo Diferencial e Integral I",
        author: "Juan Pérez",
        downloads: 234
    },
    {
        id: 2,
        title: "Presentación: Límites y Continuidad",
        type: "PPT",
        bg: "bg-orange-500",
        icon: <RiSlideshowLine />,
        semester: "Semestre 1",
        course: "Cálculo Diferencial e Integral I",
        author: "María López",
        downloads: 189
    },
    {
        id: 3,
        title: "Ejercicios Resueltos de Álgebra Superior",
        type: "PDF",
        bg: "bg-red-500",
        icon: <RiFilePdfLine />,
        semester: "Semestre 1",
        course: "Álgebra Superior I",
        author: "Carlos Mendoza",
        downloads: 312
    },
    {
        id: 4,
        title: "Video Tutorial: Números Complejos",
        type: "LINK",
        bg: "bg-blue-500",
        icon: <RiLink />,
        semester: "Semestre 1",
        course: "Álgebra Superior I",
        author: "Ana García",
        downloads: 156
    },
    {
        id: 5,
        title: "Formulario de Geometría Analítica",
        type: "PDF",
        bg: "bg-red-500",
        icon: <RiFilePdfLine />,
        semester: "Semestre 1",
        course: "Geometría Analítica I",
        author: "Luis Torres",
        downloads: 278
    },
    {
        id: 6,
        title: "Apuntes de Cálculo Multivariable",
        type: "PDF",
        bg: "bg-red-500",
        icon: <RiFilePdfLine />,
        semester: "Semestre 2",
        course: "Cálculo Diferencial e Integral II",
        author: "Pedro Sánchez",
        downloads: 267
    },
    {
        id: 7,
        title: "Ejercicios de Álgebra Lineal",
        type: "PDF",
        bg: "bg-red-500",
        icon: <RiFilePdfLine />,
        semester: "Semestre 2",
        course: "Álgebra Lineal I",
        author: "Sofia Ramírez",
        downloads: 298
    },
    {
        id: 8,
        title: "Código Python: Algoritmos Básicos",
        type: "LINK",
        bg: "bg-blue-500",
        icon: <RiLink />,
        semester: "Semestre 2",
        course: "Programación I",
        author: "Diego Morales",
        downloads: 445
    },
    {
        id: 9,
        title: "Resumen de Ecuaciones Diferenciales",
        type: "PDF",
        bg: "bg-red-500",
        icon: <RiFilePdfLine />,
        semester: "Semestre 3",
        course: "Ecuaciones Diferenciales I",
        author: "Laura Jiménez",
        downloads: 223
    }
];

export default function RecursosRecientes() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    Recursos Recientes
                </h1>

                <FilterBar />
            </div>

            <div className={styles.grid}>
                {resources.map((resource) => (
                    <ResourceCard 
                        key={resource.id}
                        {...resource}
                    />
                ))}
            </div>
        </main>
    );
}
