'use client';

import Image from "next/image";

import styles from "./SectionStairs.module.css";
import {useInView} from "react-intersection-observer";

/*Screen width * 0.8 - width of first led strip   --1st. margin-left
divide equally
0px   --lst. margin-left*/

interface SectionStairsProps {
    LEDStripImg: string;
    LEDStripType: string;
}
export default function SectionStairs({ LEDStrips }: { LEDStrips: SectionStairsProps[] }) {


    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });


    return (
    <section className={styles.SectionStairs}>
        <div className={styles.wrapper}>
            <h2 className={styles.StairsH2}>Support all LED strip types</h2>
            <div ref={ref} className={styles.StairsHolder}>
                {
                    LEDStrips.map((LEDStrip, index) => {
                        return (
                            <div key={index} className={`${inView ? styles.in_view : ''} ${styles.ImgTextHolder}`}
                                 style={{
                                     paddingLeft: `calc(25% / ${LEDStrips.length} * ${LEDStrips.length - index} )`,
                                     animationDelay: inView ? `${index * 0.15}s` : '0s' }}>
                                <span className={styles.StairsImg}><Image
                                    fill={true}
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