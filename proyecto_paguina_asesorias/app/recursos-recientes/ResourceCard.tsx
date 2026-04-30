import React, { ReactNode } from 'react';
import { RiDownloadLine, RiDownload2Line } from "@remixicon/react";
import styles from './ResourceCard.module.css';

interface ResourceCardProps {
    title: string;
    type: string;
    bg: string;
    icon: ReactNode;
    semester: string;
    course: string;
    author: string;
    downloads: number;
}

export function ResourceCard({ title, type, bg, icon, semester, course, author, downloads }: ResourceCardProps) {
    
    // map the tailwind bg class to actual color style since we're using css modules
    // but the data has 'bg-red-500', 'bg-orange-500', 'bg-blue-500'
    const getBgColor = (bgClass: string) => {
        if (bgClass.includes('red')) return '#ef4444';
        if (bgClass.includes('orange')) return '#f97316';
        if (bgClass.includes('blue')) return '#3b82f6';
        return '#6b7280';
    };

    return (
        <div className={styles.card}>
            <div className={styles.headerImage} style={{ backgroundColor: getBgColor(bg) }}>
                <div className={styles.iconBackground}>
                    {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { className: styles.largeIcon }) : icon}
                </div>
                <div className={styles.typeBadgeContainer}>
                    <span className={styles.typeBadge}>{type}</span>
                </div>
                <div className={styles.hoverOverlay}>
                    <div className={styles.downloadCircle}>
                        <RiDownloadLine className={styles.downloadIcon} />
                    </div>
                </div>
            </div>
            
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                
                <div className={styles.badges}>
                    <span className={styles.badge}>{semester}</span>
                    <span className={`${styles.badge} ${styles.truncate}`}>{course}</span>
                </div>
                
                <div className={styles.footer}>
                    <span className={styles.author}>{author}</span>
                    <div className={styles.downloads}>
                        <RiDownload2Line />
                        <span>{downloads}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
