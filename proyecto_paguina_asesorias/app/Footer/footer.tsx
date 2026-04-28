import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* About */}
        <div className={styles.about}>
          <div className={styles.headerBlock}>
            <div className={styles.logoContainer}>
                <Image
                src="/Lo.png" 
                alt="Logo MAC"
                width={40}
                height={40}
                className={styles.logoImage}
                />
                <h2 className={styles.logo}>MAC</h2>
            </div>
            <p className={styles.subtext}>Recursos Académicos</p>
          </div>

          <p className={styles.description}>
            Facultad de Estudios Superiores Acatlán
            <br />
            Matemáticas Aplicadas y Computación
          </p>

          <p className={styles.description}>
            Ayudando a la comunidad en sus estudios
          </p>
        </div>

        <div>
          <h3 className={styles.title}>Navegación</h3>
          <ul className={styles.list}>
            <li>
              <Link href="/" className={styles.link}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/courses" className={styles.link}>
                Recursos
              </Link>
            </li>
            <li>
              <Link href="/speakers" className={styles.link}>
                Compartir
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.title}>Contacto</h3>
          <ul className={styles.list}>
            <li className={styles.contactItem}>
              <span className={styles.label}>Correo:</span>
              <a
                href="mailto:angelesdemac@gmail.com"
                className={styles.link}
              >
                angelesdemac@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className={styles.bottomBar}>
        <p>
          © {new Date().getFullYear()} MAC — Hecho en México.
        </p>

        <div className={styles.bottomLinks}>
          <p>Hecho por Angeles de mac</p>
        </div>
      </div>
    </footer>
  );
}

