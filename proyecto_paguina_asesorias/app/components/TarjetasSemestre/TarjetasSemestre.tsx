import React from 'react';
import { TarjetaSemestre } from '../TarjetaSemestre/TarjetaSemestre.module';
import styles from './TarjetasSemestre.module.css';

export const TarjetasSemestre: React.FC = () => {
  const semestres = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleSemestreClick = (num: number) => {
    console.log(`Seleccionaste el semestre: ${num}`);
  };

  return (
    <section className={styles.contenedor}>
      <h2 className={styles.titulo}>Selecciona tu Semestre</h2>
      <div className={styles.grid}>
        {semestres.map((num) => (
          <TarjetaSemestre 
            key={num} 
            numero={num} 
            onClick={handleSemestreClick} 
          />
        ))}
      </div>
    </section>
  );
};