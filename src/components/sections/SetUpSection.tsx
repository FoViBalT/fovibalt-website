'use client';

import styles from "./SetUpSection.module.css";
import Image from "next/image";
import {useEffect, useRef} from "react";
export default function SetUpSection() {

    const enterSSID = useRef<HTMLImageElement | null>(null);
    const image = useRef<HTMLImageElement | null>(null);
    const container = useRef<HTMLDivElement | null>(null);
    const text1 = useRef<HTMLParagraphElement | null>(null);
    const text2 = useRef<HTMLParagraphElement | null>(null);
    const text3 = useRef<HTMLParagraphElement | null>(null);
    const text4 = useRef<HTMLParagraphElement | null>(null);

    const texts = [text1, text2, text3, text4]

    useEffect (() => {

        if (container.current && image.current) {
            const html = document.documentElement;

            const frameCount = 31;
            const additionalFrames = 11;
            const buffer = window.innerHeight * 0.8;
            const currentFrame = (index: number) => (
                `/images/setup/setup_${index.toString().padStart(4, '0')}.png`
            )

            const preloadImages = () => {
                if (image.current) {
                    for (let i = 1; i < frameCount; i++) {
                        image.current.src = currentFrame(i);
                    }
                }
            };

            const changeFadeInTo = (index?: number) => {
                texts.forEach((text, i) => {
                    if (text.current && image.current && enterSSID.current) {
                        if (index && i + 1 === index) {
                            text.current.classList.remove(styles.fade_out)
                            text.current.classList.add(styles.fade_in)
                            image.current.classList.add(styles.fade_in)
                            image.current.classList.remove(styles.fade_out)

                            if (index == 4) {
                                enterSSID.current.classList.remove(styles.fade_out)
                                enterSSID.current.classList.add(styles.fade_in)
                                image.current.classList.remove(styles.fade_in)
                                image.current.classList.add(styles.fade_out)
                            }
                            else {
                                enterSSID.current.classList.add(styles.fade_out)
                                enterSSID.current.classList.remove(styles.fade_in)
                            }
                        }
                        else {
                            text.current.classList.remove(styles.fade_in)
                            text.current.classList.add(styles.fade_out)
                            enterSSID.current.classList.add(styles.fade_out)
                            enterSSID.current.classList.remove(styles.fade_in)
                        }
                    }
                })
            }



            const updateImage = (index: number) => {
                if (image.current) {
                    image.current.src = currentFrame(index);
                }
            }

            window.addEventListener('scroll', () => {
                if (container.current && image.current) {
                    const containerHeight = container.current.scrollHeight - image.current.clientHeight - buffer;
                    const containerTop = container.current.offsetTop;
                    const scrollTop = html.scrollTop;
                    const containerScrollPercent = (scrollTop - containerTop) / containerHeight;
                    const frameIndex = Math.max(0, Math.min(
                        frameCount - 1,
                        Math.ceil(containerScrollPercent * (frameCount + additionalFrames)))
                    );
                    requestAnimationFrame(() => updateImage(frameIndex + 1))

                    if (containerScrollPercent <= 0.2) {
                        changeFadeInTo(1)
                    }
                    else if (containerScrollPercent <= 0.5) {
                        changeFadeInTo(2)
                    }
                    else if (containerScrollPercent <= 0.85) {
                        changeFadeInTo(3)
                    }
                    else if (containerScrollPercent <= 1.9) {
                        changeFadeInTo(4)
                    }
                    else {
                        changeFadeInTo()
                    }
                }
            });

            preloadImages()

            image.current.src = currentFrame(1);
        }
    })


    return (
        <section ref={container} className={styles.sectionWrapper}>
            <div className={styles.sticky}>
                <h3 className={styles.title}>4 step setup & configuration</h3>
                <div className={styles.twoColumnContainer}>
                        <div className={styles.imageHolder}>
                            <Image
                                className={`${styles.imageSetup} ${styles.fade_out}`}
                                ref={image}
                                src={''}
                                alt={'alt'}
                                fill={true}
                                priority={true}>
                            </Image>
                            <Image ref={enterSSID}
                                className={`${styles.enterSSID} ${styles.fade_out}`}
                                src={'/images/enterSSID.png'}
                                alt={'alt'}
                                fill={true}>
                            </Image>
                        </div>
                        <div className={styles.textHolder}>
                            <p ref={text1} className={`${styles.text} ${styles.fade_out}`}>Step 1: Connect LED strip lighting with fovicable to fovilight</p>
                            <p ref={text2} className={`${styles.text} ${styles.fade_out}`}>Step 2: Fovilight detects LED type and LED count of connected LED strip</p>
                            <p ref={text3} className={`${styles.text} ${styles.fade_out}`}>Step 3: Scan QR-code on all your fovilights</p>
                            <p ref={text4} className={`${styles.text} ${styles.fade_out}`}>Step 4: Enter SSID and password of your router and press connect all</p>
                        </div>
                </div>
            </div>

        </section>
    )
}