'use client';

import styles from "./SlideShowSection.module.css";
import ImageComparisonSlider from "../parts/ImageComparisonSlider";
import Image from "next/image";
import {useEffect, useRef} from "react";
export default function SlideShowSection() {

    const container = useRef<HTMLDivElement | null>(null);

    const img1 = useRef<HTMLDivElement | null>(null);
    const img2 = useRef<HTMLDivElement | null>(null);
    const img3 = useRef<HTMLDivElement | null>(null);
    const img4 = useRef<HTMLDivElement | null>(null);

    const images = [img1, img2, img3, img4]
    useEffect(() => {

        if (container.current && img1.current) {
            const html = document.documentElement;

            const changeEffect = (index?: number) => {
                switch (index) {
                    case 0:
                        images.forEach((elem) => {
                            if (elem.current) {
                                elem.current.classList.remove(styles.fade_in)
                                elem.current.classList.add(styles.fade_out)
                            }
                        })
                        break;
                    case 1:
                        images.forEach((elem, i) => {
                            if (elem.current && i === 0) {
                                elem.current.classList.add(styles.fade_in)
                                elem.current.classList.remove(styles.fade_out)
                            } else if (elem.current) {
                                elem.current.classList.add(styles.fade_out)
                                elem.current.classList.remove(styles.fade_in)
                            }
                        })
                        break;
                    case 2:
                        images.forEach((elem, i) => {
                                if (elem.current && i === 1) {
                                    elem.current.classList.add(styles.fade_in)
                                    elem.current.classList.remove(styles.fade_out)
                                } else if (elem.current) {
                                    elem.current.classList.add(styles.fade_out)
                                    elem.current.classList.remove(styles.fade_in)
                                }
                        })
                        break;
                    case 3:
                        images.forEach((elem, i) => {
                            if (elem.current && i === 2) {
                                elem.current.classList.add(styles.fade_in)
                                elem.current.classList.remove(styles.fade_out)
                            } else if (elem.current) {
                                elem.current.classList.add(styles.fade_out)
                                elem.current.classList.remove(styles.fade_in)
                            }
                        })
                        break;
                    case 4:
                        images.forEach((elem, i) => {
                            if (elem.current && i === 3) {
                                elem.current.classList.add(styles.fade_in)
                                elem.current.classList.remove(styles.fade_out)
                            } else if (elem.current) {
                                elem.current.classList.add(styles.fade_out)
                                elem.current.classList.remove(styles.fade_in)
                            }
                        })
                        break;


                }
            }


            window.addEventListener('scroll', () => {
                if (container.current && img1.current) {
                    const containerHeight = container.current.scrollHeight - img1.current.clientHeight;
                    const containerTop = container.current.offsetTop;
                    const scrollTop = html.scrollTop;
                    const containerScrollPercent = (scrollTop - containerTop) / containerHeight;

                    if (containerScrollPercent <= -1) {
                        changeEffect(0)
                    }
                    else if (containerScrollPercent <= 0.25) {
                        changeEffect(1)
                    } else if (containerScrollPercent <= 0.5) {
                        changeEffect(2)
                    } else if (containerScrollPercent <= 0.75) {
                        changeEffect(3)
                    } else if (containerScrollPercent <= 1.25) {
                        changeEffect(4)
                    } else {
                        changeEffect(0)
                    }
                }
            });
        }
    })

    return (
        <section ref={container} className={styles.sectionWrapper}>
            <div className={styles.sticky}>
                <div ref={img1} className={`${styles.fade_in} ${styles.container}`}>
                    <h3 className={`${styles.heading} ${styles.colorful}`}>
                        Control all the lights at home with fovilight
                    </h3>
                    <div>
                        <Image className={styles.coverImage} src={'/images/teamImage.png'} alt={"Team's image"} fill={true}/>
                    </div>
                </div>
                <div ref={img2} className={`${styles.fade_out} ${styles.container}`}>
                    <h3 className={`${styles.heading}`}>
                        Upgrade filming gear with fovilight
                    </h3>
                    <div>
                        <Image className={styles.coverImage} src={'/images/filmingGear.png'} alt={"Filming gear image"} fill={true}/>
                    </div>
                </div>
                <div ref={img3} className={`${styles.fade_out} ${styles.container}`}>
                    <h3 className={`${styles.heading} ${styles.colorBlue}`}>
                        fovilight for shows & concerts
                    </h3>
                    <div>
                        <Image className={styles.coverImage} src={'/images/fovilightForConcerts.png'} alt={"Filming gear image"} fill={true}/>
                    </div>
                </div>
                <div ref={img4} className={`${styles.fade_in} ${styles.container}`}>
                    <h3 className={`${styles.heading}`}>
                        Light that always fits your vibe
                    </h3>
                    <div className={styles.absolute}>
                        <ImageComparisonSlider imgLeft={'/images/imageCompLeft.png'} imgRight={'/images/imageCompRight.png'}></ImageComparisonSlider>

                    </div>
                </div>
            </div>

        </section>
    )
}