import styles from './ComparteTuConocimiento.module.css';
import { OptionCard } from './OptionCard';
import { UploadForm } from './UploadForm';
import { RiFile2Fill, RiFile2Line, RiSlideshowLine } from "@remixicon/react";

const shareYourKnowledgeOptions = [
    {
        icon: <RiFile2Line className={styles.icon} />,
        title: "Papers",
        description: "Artículos académicos",
    },
    {
        icon: <RiFile2Fill className={styles.icon} />,
        title: "Apuntes",
        description: "Notas de clase",
    },
    {
        icon: <RiSlideshowLine className={styles.icon} />,
        title: "Presentaciones",
        description: "Diapositivas",
    },
];

export default function ComparteTuConocimiento() {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <h1 className={styles.title}>Comparte tu conocimiento</h1>
                <p className={styles.subtitle}>Sube tus apuntes, presentaciones, papers o enlaces útiles para ayudar a otros estudiantes de la comunidad MAC</p>

                <div className={styles.grid}>
                    {shareYourKnowledgeOptions.map((option, index) => (
                        <OptionCard
                            key={index}
                            icon={option.icon}
                            title={option.title}
                            description={option.description}
                        />
                    ))}
                </div>
            </div>

            <aside className={styles.sidebar}>
                <UploadForm />
            </aside>
        </main>
    );
}
