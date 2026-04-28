import React from 'react';
import styles from './TarjetaMateria.module.css';

interface TarjetaMateriaProps {
  titulo: string;
  profesor: string;
  recursos: number;
  semestre: number;
}

export const TarjetaMateria: React.FC<TarjetaMateriaProps> = ({ titulo, profesor, recursos, semestre }) => {
  return (
    <div className={styles.tarjeta}>
      <div className={styles.header}>
        <span className={styles.etiqueta}>Semestre {semestre}</span>
        <div className={styles.iconoLibro}>📖</div>
      </div>
      <div className={styles.cuerpo}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <hr className={styles.separador} />
        <div className={styles.info}>
          <span>👤</span> {profesor}
        </div>
        <div className={styles.info}>
          <span>📄</span> {recursos} recursos disponibles
        </div>
      </div>
    </div>
  );
};