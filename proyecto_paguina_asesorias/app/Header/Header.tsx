import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
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
            <p className={styles.subtitle}>
              Encuentra material de apoyo para tus estudios
            </p>
          </div>
        </div>

        <nav className={styles.nav}>
          <Link href="/#semestres">Semestres</Link>
          <Link href="/asesorias">Asesorías</Link>
          <Link href="/#subir-recurso" className={styles.cta}>
            Subir recurso
          </Link>
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
