import styles from './OptionCard.module.css';
import { ReactNode } from 'react';

interface OptionCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export function OptionCard({ icon, title, description }: OptionCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <div className={styles.header}>
                <h4 className={styles.title}>{title}</h4>
            </div>
            <div className={styles.footer}>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}
