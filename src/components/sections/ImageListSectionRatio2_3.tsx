'use client';

import styles from "./ImageListSectionRatio2_3.module.css";
import RadialGradientHighlight from "../parts/RadialGradientHighlight";
import Image from "next/image";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";
import {debounce} from "next/dist/server/utils";

interface TableContent {
    iconTitle: string;
    text: string;
    id: number;
}

const tableContent: TableContent[] = [
    {
        iconTitle: 'segment',
        text: 'Group fovilight’s together for easy use',
        id: 1
    },
    {
        iconTitle: 'smartphone',
        text: 'Control all your fovilight’s from a single app',
        id: 2
    },
    {
        iconTitle: 'public',
        text: 'Make your fovilight’s public if you want',
        id: 3
    },
    {
        iconTitle: 'developer_board_off',
        text: 'Give or deny access to your fovilight to other people',
        id: 4
    }
]
export default function ImageListSectionRatio2_3() {

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const [refH2, inViewH2, entry] = useInView({
        threshold: 0.9,
        triggerOnce: false,
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
        <div key={content.id} className={`${styles.iconTextHolder} ${inView ? styles.in_view : ''}`}
             style={{
                 animationDelay: inView ? `${index * 0.25}s` : ''
             }}>
            <i className={`${styles.icon} material-icons`}>{content.iconTitle}</i>
            <p className={styles.tableText}>{content.text}</p>
        </div>
    )

    return (
        <section className={styles.imageTextSection}>
            <div className={styles.tableCol2Ratio3_2}>
                <div className={styles.imageHolder}>
                    <Image
                        fill={true}
                        src="/images/phoneApp.png"
                        alt=""
                        priority={true}
                        style={{color: "none"}}
                    ></Image>
                </div>
                <div ref={ref} className={styles.textHolder}>
                    <h2 ref={refH2} className={`${styles.listHeading} ${!isAnimating && !inViewH2 ? styles.fading_out : styles.slide_in_from_button}`}>
                        Groups & multiple access
                    </h2>
                    <RadialGradientHighlight content={tableContentObjects}></RadialGradientHighlight>
                </div>
            </div>
        </section>
    )
}