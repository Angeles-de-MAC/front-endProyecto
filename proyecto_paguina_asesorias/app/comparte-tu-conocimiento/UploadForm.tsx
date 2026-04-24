import styles from './UploadForm.module.css';
import { RiCloudLine, RiArrowUpLine } from "@remixicon/react";

export function UploadForm() {
    return (
        <div className={styles.formContainer}>
            <div className={styles.uploadArea}>
                <RiCloudLine className={styles.uploadIcon} />
                <h4 className={styles.uploadTitle}>Arrastra y suelta tu recurso aquí</h4>
                <p className={styles.uploadSubtitle}>o haz click para seleccionar</p>
            </div>

            <div className={styles.fieldsContainer}>
                <div className={styles.fieldGroup}>
                    <div className={styles.field}>
                        <label className={styles.label}>Semestre</label>
                        <select className={styles.select} defaultValue="">
                            <option value="" disabled>Selecciona un semestre...</option>
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

                    <div className={styles.field}>
                        <label className={styles.label}>Materia</label>
                        <select className={styles.select} defaultValue="">
                            <option value="" disabled>Selecciona una materia...</option>
                            <option value="1">Álgebra Superior</option>
                            <option value="2">Cálculo 1</option>
                            <option value="3">Lógica Matemática</option>
                            <option value="4">Programación 1</option>
                            <option value="5">Solución Algoritmica de Problemas</option>
                            <option value="6">Organización de Computadoras</option>
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Tipo de recurso</label>
                        <select className={styles.select} defaultValue="">
                            <option value="" disabled>Selecciona un tipo de recurso...</option>
                            <option value="1">Paper</option>
                            <option value="2">Apuntes</option>
                            <option value="3">Presentación</option>
                        </select>
                    </div>
                </div>

                <div className={styles.fieldGroup}>
                    <div className={styles.field}>
                        <label className={styles.label}>Título</label>
                        <input type="text" placeholder="Ej. Introducción al Cálculo Diferencial e Integral..." className={styles.input} />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Descripción</label>
                        <textarea placeholder="Describe brevemente el contenido de tu material." className={styles.textarea}></textarea>
                    </div>
                </div>
            </div>

            <div className={styles.submitContainer}>
                <button className={styles.submitButton}>
                    <RiArrowUpLine className={styles.submitIcon} />
                    Subir Recurso
                </button>
            </div>
        </div>
    );
}
