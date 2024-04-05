'use client';

import styles from "./QuoteSection.module.css";
import { useInView } from 'react-intersection-observer';

interface QuoteSectionProps {
    text: string
}

export default function QuoteSection({ text }: QuoteSectionProps) {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    return (
    <section ref={ref} className={`${styles.quoteSection} ${inView ? styles.in_view : styles.fading_out}`}>
        <div className={styles.quoteHolder}>
            <p>{text}</p>
        </div>
    </section>
    )
}