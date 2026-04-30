import React from 'react';
import styles from './TarjetaSemestre.module.css';

interface TarjetaSemestreProps {
  numero: number;
  onClick?: (numero: number) => void;
}

export const TarjetaSemestre: React.FC<TarjetaSemestreProps> = ({ numero, onClick }) => {
  return (
    <div className={styles.tarjeta} onClick={() => onClick?.(numero)}>
      <span className={styles.icono}>📋</span>
      <div className={styles.numero}>{numero}</div>
      <div className={styles.texto}>Semestre</div>
    </div>
  );
};