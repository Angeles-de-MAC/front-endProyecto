
import styles from './Header.module.css';
import Image from 'next/image';
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image
              src="/Log.png"
              alt="Logo"
              fill
              className={styles.logoImage}
            />
          </div>
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}