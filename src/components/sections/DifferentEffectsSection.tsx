'use client';

import styles from "./DifferentEffectsSection.module.css";
import {useInView} from "react-intersection-observer";
import RadialGradientHighlight from "../parts/RadialGradientHighlight";
import Image from "next/image";
import SquareButton from "@/components/parts/squareButton";
import {useEffect, useState} from "react";
import {debounce} from "next/dist/server/utils";

export default function DifferentEffectsSection() {

    const [refH2, inViewH2, entry] = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });

    const MyImage = () => {
        return <Image
            className={styles.rotatedImage}
            fill={true}
            src="/images/differentEffects.png"
            alt=""
            priority={true}
        ></Image>
    }

    return (
        <section className={styles.imageTextSection}>
            <div className={styles.tableCol2Ratio3_2}>
                <div className={styles.imageHolder}>
                    <RadialGradientHighlight content={<MyImage/>}>
                    </RadialGradientHighlight>
                </div>
                <div className={styles.textHolder}>
                    <div ref={refH2}>
                        <p className={`${styles.tableText} ${ inViewH2 ? styles.slide_in_from_button : ''}`}>
                            Different effects
                        </p>
                    </div>
                    <p className={styles.smallText}>
                        Control your light using your phone.
                        Change colors, effects, temperature etc...
                    </p>
                    <div className={styles.topRow}>
                        <SquareButton iconTitle="radio_button_checked" color="rgba(173, 198, 255, 1)"></SquareButton>
                        <SquareButton iconTitle="device_thermostat" color="linear-gradient(135deg, #E19626 0%, #FFFFFF 47.92%, #049FF7 100%)"></SquareButton>
                        <SquareButton iconTitle="gradient" color="linear-gradient(135deg, #2B74E2 0%, #916A95 100%)"></SquareButton>
                        <SquareButton iconTitle="looks" color="linear-gradient(135deg, #FFB68D 0%, #FFB68D 0%, #FFB68D 0%, rgba(255, 141, 141, 0.953125) 0.01%, rgba(224, 224, 172, 0.965813) 17.71%, rgba(183, 239, 183, 0.982617) 33.85%, #8DFFFF 50%, #B3B3D9 66.67%, #D3B9D3 83.85%, #FF8D8D 100%)"></SquareButton>
                    </div>
                    <div className={styles.bottomRow}>
                        <SquareButton iconTitle={'animation'} color="black"></SquareButton>
                        <SquareButton iconTitle={'music_note'} color="black"></SquareButton>
                        <SquareButton iconTitle={'tv'} color="black"></SquareButton>
                        <SquareButton iconTitle={'local_fire_department'} color="black"></SquareButton>
                    </div>
                </div>
            </div>
        </section>
    )
}