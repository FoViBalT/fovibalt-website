'use client';

import Image from "next/image";

import styles from "./SectionStairs.module.css";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";
import {debounce} from "next/dist/server/utils";

/*Screen width * 0.8 - width of first led strip   --1st. margin-left
divide equally
0px   --lst. margin-left*/

interface SectionStairsProps {
    LEDStripImg: string;
    LEDStripType: string;
}
export default function SectionStairs({ LEDStrips }: { LEDStrips: SectionStairsProps[] }) {


    const [ref, inView] = useInView({
        threshold: 0.4,
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


    return (
    <section className={styles.SectionStairs}>
        <div className={styles.wrapper}>
            <div ref={refH2}>
                <h2
                    className={`${styles.StairsH2} ${!isAnimating && !inViewH2 ? styles.fading_out : styles.slide_in_from_button}`}>Support
                    all LED strip types</h2>
            </div>
            <div ref={ref} className={styles.StairsHolder}>
                {
                    LEDStrips.map((LEDStrip, index) => {
                            return (
                                <div key={index} className={`${inView ? styles.in_view : ''} ${styles.ImgTextHolder}`}
                                 style={{
                                     paddingLeft: `calc(25% / ${LEDStrips.length} * ${LEDStrips.length - index} )`,
                                     animationDelay: inView ? `${index * 0.15}s` : '' }}>
                                <span className={styles.StairsImg}><Image
                                    layout={'fill'}
                                    src={LEDStrip.LEDStripImg}
                                    alt={`Example of ${LEDStrip.LEDStripType}`}
                                    priority={false}
                                ></Image></span>
                                <span className={styles.StairsText}>{LEDStrip.LEDStripType}</span>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    </section>
    )
}