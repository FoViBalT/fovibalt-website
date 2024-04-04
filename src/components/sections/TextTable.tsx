'use client';

import styles from "./TextTable.module.css";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";
import {debounce} from "next/dist/server/utils";

interface TableContent {
    heading: string;
    text: string;
    id: number;
}
interface TableText {
    title?: string;
    tableContent: TableContent[];
    numOfCols: number;
    colorful: boolean;
}

export default function QuoteSection({ title, tableContent, numOfCols, colorful }: TableText) {

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const [refH2, inViewH2, entry] = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });

    const [isAnimating, setIsAnimating] = useState(false);

    const isAnimatingDebounced = debounce(setIsAnimating, 300);
    useEffect(() => {
        if (entry?.isIntersecting) {
            isAnimatingDebounced(true);
            setTimeout(() => {
                isAnimatingDebounced(false);
            }, 350); // Delay of 1 second
        }
    }, [entry, isAnimatingDebounced]);

    const tableContentObjects = tableContent.map((content: TableContent, index) =>
        <div key={content.id} className={`${(tableContent.length <= 2) ? styles.centerAlign : styles.leftAlign} ${inView ? styles.fadeInCell : ''}`}
        style={{
            animationDelay: inView ? `${index * 0.25}s` : ''
        }}>
            <p className={`${styles.heading} ${colorful ? styles.colorful : ''}`}>{content.heading}</p>
            <p className={styles.text}>{content.text}</p>
        </div>
    )

    return (
    <section className={styles.tableSection}>
        <div ref={refH2}>
            <h3 className={`${styles.tableTitle} ${!isAnimating && !inViewH2 ? styles.fading_out : styles.slide_in_from_button}`}>
                {title}
            </h3>
        </div>
        <div ref={ref} className={styles[`tableCol${numOfCols}`]}>
            {
                tableContentObjects
            }
        </div>
    </section>
    )
}