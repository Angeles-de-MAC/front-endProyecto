
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>RA</span>
          <div>
            <p className={styles.title}>Recursos Académicos</p>
            <p className={styles.subtitle}>Encuentra material de apoyo para tus estudios</p>
          </div>
        </div>

        <nav className={styles.nav}>
          <a href="#semestres">Semestres</a>
          <a href="#asesorias">Asesorías</a>
          <a href="#subir-recurso" className={styles.cta}>Subir recurso</a>
        </nav>

        <div className={styles.searchBox}>
          <input
            type="search"
            placeholder="Buscar recursos"
            aria-label="Buscar recursos"
          />
          <button type="button">Buscar</button>
        </div>
      </div>
    </header>
  );
}