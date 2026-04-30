import styles from './FilterBar.module.css';

export function FilterBar() {
    return (
        <div className={styles.filterContainer}>
            <div className={styles.field}>
                <select className={styles.select} defaultValue="">
                    <option value="" disabled>Todos los tipos</option>
                    <option value="1">Paper</option>
                    <option value="2">Apuntes</option>
                    <option value="3">Presentación</option>
                </select>
            </div>
            <div className={styles.field}>
                <select className={styles.select} defaultValue="">
                    <option value="" disabled>Todos los semestres</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </div>
        </div>
    );
}
