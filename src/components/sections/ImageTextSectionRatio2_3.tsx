'use client';

import styles from "./ImageTextSectionRatio2_3.module.css";
import RadialGradientHighlight from "../parts/RadialGradientHighlight";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

export default function ImageTextSectionRatio2_3() {

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });
    const MyImage = () => {
        return <Image
            fill={true}
            src="/images/universal.png"
            alt=""
            priority={true}
        ></Image>
    }

    return (
        <section ref={ref} className={styles.imageTextSection}>
            <div className={styles.tableCol2Ratio2_3}>
                <div className={`${styles.imageHolder} ${inView ? styles.in_view_image : styles.fading_out}`}>
                    <RadialGradientHighlight content={<MyImage/>}>
                    </RadialGradientHighlight>
                </div>
                <p className={`${styles.tableText} ${inView ? styles.in_view : styles.fading_out}`}>
                    The only one universal LED strip light controller
                </p>
            </div>
        </section>
    )
}