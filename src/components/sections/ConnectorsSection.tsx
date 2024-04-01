'use client';

import styles from "./ConnectorsSection.module.css";
import Image from "next/image";
import RadialGradientHighlight from "../parts/RadialGradientHighlight";
import {useEffect, useRef} from "react";
import {useInView} from "react-intersection-observer";
export default function ConnectorsSection() {

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const title1 = useRef<HTMLHeadingElement | null>(null);
    const title2 = useRef<HTMLHeadingElement | null>(null);

    const titles = [title1, title2]

    const image = useRef<HTMLImageElement | null>(null);
    const container = useRef<HTMLDivElement | null>(null);
    const text1 = useRef<HTMLParagraphElement | null>(null);
    const text2 = useRef<HTMLParagraphElement | null>(null);
    const line1 = useRef<HTMLParagraphElement | null>(null);
    const line2 = useRef<HTMLParagraphElement | null>(null);

    const view1 = [text1, line1, text2, line2]

    const text3 = useRef<HTMLParagraphElement | null>(null);
    const text4 = useRef<HTMLParagraphElement | null>(null);
    const text5 = useRef<HTMLParagraphElement | null>(null);
    const line3 = useRef<HTMLParagraphElement | null>(null);
    const line4 = useRef<HTMLParagraphElement | null>(null);
    const line5 = useRef<HTMLParagraphElement | null>(null);

    const view2 = [text3, line3, text4, line4, text5, line5]

    useEffect(() => {

        if (container.current && image.current) {
            const html = document.documentElement;

            const frameCount = 19;
            const additionalFrames = 11;
            const buffer = window.innerHeight * 0.3;
            const currentFrame = (index: number) => (
                `/images/connectors/connectors_${index.toString().padStart(4, '0')}.png`
            )

            const preloadImages = () => {
                if (image.current) {
                    for (let i = 1; i < frameCount; i++) {
                        image.current.src = currentFrame(i);
                    }
                }
            };

            const changeEffect = (index?: number) => {
                switch (index) {
                    case 0:
                        view1.forEach((elem, i) => {
                            if (elem.current && i === 0) {
                                elem.current.classList.remove(styles.fade_in)
                                elem.current.classList.add(styles.fade_out)
                            } else if (elem.current && i === 1) {
                                elem.current.classList.remove(styles.increase_line_down)
                                elem.current.classList.add(styles.fade_out)
                            } else if (elem.current && i === 2) {
                                elem.current.classList.remove(styles.fade_in_delay)
                                elem.current.classList.add(styles.fade_out)
                            } else if (elem.current && i === 3) {
                                elem.current.classList.remove(styles.increase_line_up)
                                elem.current.classList.add(styles.fade_out)
                            }
                        })
                        break;
                    case 1:
                        view1.forEach((elem, i) => {
                            if (elem.current && i === 0) {
                                elem.current.classList.add(styles.fade_in)
                                elem.current.classList.remove(styles.fade_out)
                            } else if (elem.current && i === 1) {
                                elem.current.classList.add(styles.increase_line_down)
                                elem.current.classList.remove(styles.fade_out)
                            } else if (elem.current && i === 2) {
                                elem.current.classList.add(styles.fade_in_delay)
                                elem.current.classList.remove(styles.fade_out)
                            } else if (elem.current && i === 3) {
                                elem.current.classList.add(styles.increase_line_up)
                                elem.current.classList.remove(styles.fade_out)
                            }
                        })
                        break;
                    case 2:
                        view2.forEach((elem, i) => {
                            if (elem.current && i === 0) {
                                elem.current.classList.remove(styles.fade_in)
                                elem.current.classList.add(styles.fade_out)
                            } else if (elem.current && i === 1) {
                                elem.current.classList.remove(styles.increase_line_down)
                                elem.current.classList.add(styles.fade_out)
                            } else if (elem.current && i === 2) {
                                elem.current.classList.remove(styles.fade_in_delay)
                                elem.current.classList.add(styles.fade_out)
                            } else if (elem.current && i === 3) {
                                elem.current.classList.remove(styles.increase_line_up)
                                elem.current.classList.add(styles.fade_out)
                            } else if (elem.current && i === 4) {
                                elem.current.classList.remove(styles.fade_in_delay)
                                elem.current.classList.add(styles.fade_out)
                            } else if (elem.current && i === 5) {
                                elem.current.classList.remove(styles.increase_line_up)
                                elem.current.classList.add(styles.fade_out)
                            }
                        })
                        break;
                    case 3:
                        view2.forEach((elem, i) => {
                            if (elem.current && i === 0) {
                                elem.current.classList.add(styles.fade_in)
                                elem.current.classList.remove(styles.fade_out)
                            } else if (elem.current && i === 1) {
                                elem.current.classList.add(styles.increase_line_down)
                                elem.current.classList.remove(styles.fade_out)
                            } else if (elem.current && i === 2) {
                                elem.current.classList.add(styles.fade_in_delay)
                                elem.current.classList.remove(styles.fade_out)
                            } else if (elem.current && i === 3) {
                                elem.current.classList.add(styles.increase_line_up)
                                elem.current.classList.remove(styles.fade_out)
                            } else if (elem.current && i === 4) {
                                elem.current.classList.add(styles.fade_in_delay)
                                elem.current.classList.remove(styles.fade_out)
                            } else if (elem.current && i === 5) {
                                elem.current.classList.add(styles.increase_line_up)
                                elem.current.classList.remove(styles.fade_out)
                            }
                        })
                        break;
                    case 4:
                        titles.forEach((elem, i) => {
                            if (elem.current && i === 0) {
                                elem.current.classList.add(styles.fade_in)
                                elem.current.classList.remove(styles.fade_out)
                            } else if (elem.current && i === 1) {
                                elem.current.classList.remove(styles.fade_in)
                                elem.current.classList.add(styles.fade_out)
                            }
                        })
                        break;
                    case 5:
                        titles.forEach((elem, i) => {
                            if (elem.current && i === 0) {
                                elem.current.classList.remove(styles.fade_in)
                                elem.current.classList.add(styles.fade_out)
                            } else if (elem.current && i === 1) {
                                elem.current.classList.add(styles.fade_in)
                                elem.current.classList.remove(styles.fade_out)
                            }
                        })
                        break;
                    case 6:
                        titles.forEach((elem, i) => {
                            if (elem.current && i === 0) {
                                elem.current.classList.remove(styles.fade_in)
                                elem.current.classList.add(styles.fade_out)
                            } else if (elem.current && i === 1) {
                                elem.current.classList.remove(styles.fade_in)
                                elem.current.classList.add(styles.fade_out)
                            }
                        })
                        break;

                }
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
                    const scrollTop = html.scrollTop - buffer;
                    const containerScrollPercent = (scrollTop - containerTop) / containerHeight;
                    const frameIndex = Math.max(0, Math.min(
                        frameCount - 1,
                        Math.ceil(containerScrollPercent * (frameCount + additionalFrames)))
                    );
                    requestAnimationFrame(() => updateImage(frameIndex + 1))

                    if (containerScrollPercent <= -0.2) {
                        changeEffect(2)
                        changeEffect(0)
                        changeEffect(4)
                    }
                    else if (containerScrollPercent <= -0.08) {
                        changeEffect(2)
                        changeEffect(1)
                        changeEffect(4)
                    } else if (containerScrollPercent <= 0.6) {
                        changeEffect(2)
                        changeEffect(0)
                        changeEffect(6)
                    } else if (containerScrollPercent <= 0.9) {
                        changeEffect(0)
                        changeEffect(3)
                        changeEffect(5)
                    } else {
                        changeEffect(2)
                        changeEffect(0)
                        changeEffect(5)
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
                <div className={styles.textHolder}>
                    <h3 ref={title1} className={styles.title}>Lighting connectors</h3>
                    <h3 ref={title2} className={`${styles.title} ${styles.fade_out}`}>Power connectors</h3>
                </div>
                <div ref={ref} className={`${styles.contentHolder} ${inView ? styles.fadeInCell : ''}`}>
                    <p ref={text1} className={styles.text1}>MR-30 connector for addressable LED strip</p>
                    <p ref={text2} className={styles.text2}>5 pin connector for RGB WW CW strips</p>
                    <div ref={line1} className={styles.line1}></div>
                    <div ref={line2} className={styles.line2}></div>

                    <p ref={text3} className={styles.text3}>Screw interface for custom powering</p>
                    <p ref={text4} className={styles.text4}>Barrel jack for affordable power supplies</p>
                    <p ref={text5} className={styles.text5}>USB type-c for portable power supplies</p>
                    <div ref={line3} className={styles.line3}></div>
                    <div ref={line4} className={styles.line4}></div>
                    <div ref={line5} className={styles.line5}></div>

                    <div className={styles.imageHolder}>
                        <RadialGradientHighlight content={
                            <Image
                                className={`${styles.fade_in}`}
                                ref={image}
                                src={''}
                                alt={'alt'}
                                fill={true}
                                loading="eager">
                            </Image>
                        }>
                        </RadialGradientHighlight>
                    </div>
                </div>
            </div>

        </section>
    )
}
