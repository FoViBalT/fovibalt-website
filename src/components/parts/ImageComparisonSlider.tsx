import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import styles from "./ImageComparisonSlider.module.css";

export default function ImageComparisonSlider({ imgLeft, imgRight }: any) {
    const overlayRef = useRef(null);
    let sliderExists = false;

    useEffect(() => {
        const initComparisons = () => {
            if (overlayRef.current) {
                compareImages(overlayRef.current);
            }
            function compareImages(img: any) {
                let slider: any, clicked = 0, w: number, h: number;

                w = img.offsetWidth;
                h = img.offsetHeight;

                if (sliderExists) {
                    return
                }

                img.style.width = `${w / 2}px`;

                slider = document.createElement("DIV");
                slider.setAttribute("class", styles.img_comp_slider);
                sliderExists = true
                console.log('slider: ', slider);

                img.parentElement.insertBefore(slider, img);

                slider.style.top = `${h / 2 - slider.offsetHeight / 2}px`;
                slider.style.left = `${w / 2 - slider.offsetWidth / 2}px`;

                slider.addEventListener("mousedown", slideReady);
                window.addEventListener("mouseup", slideFinish);
                slider.addEventListener("touchstart", slideReady);
                window.addEventListener("touchend", slideFinish);

                /*
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Animate to 3/4 of the screen width
                            setTimeout(() => {
                                img.style.transition = 'width 1s cubic-bezier(.17,.67,.83,.67)';
                                img.style.width = `${w * 3 / 4}px`;
                                slider.style.transition = 'width 1s cubic-bezier(.17,.67,.83,.67)';
                                slider.style.left = `${w * 3 / 4}px`;
                            }, 1000); // Delay of 1 second

                            // Animate to 2/3 of the screen width
                            setTimeout(() => {
                                img.style.transition = 'width 1s cubic-bezier(.17,.67,.83,.67)';
                                img.style.width = `${w * 2 / 3}px`;
                                slider.style.transition = 'width 1s cubic-bezier(.17,.67,.83,.67)';
                                slider.style.left = `${w * 2 / 3}px`;
                            }, 1000); // Delay of 2 seconds

                            // Stop observing after the first animation
                            img.style.transition = 'none'
                            slider.style.transition = 'none'
                            observer.unobserve(img);
                        }
                    });
                });

                // Start observing
                observer.observe(img);
                */

                function slideReady(e: any) {
                    e.preventDefault();
                    clicked = 1;
                    window.addEventListener("mousemove", slideMove);
                    window.addEventListener("touchmove", slideMove);
                }

                function slideFinish() {
                    clicked = 0;
                }

                function slideMove(e: any) {
                    let pos;
                    if (clicked === 0) return false;

                    pos = getCursorPos(e);

                    if (pos < 0) pos = 0;
                    if (pos > w - 10) pos = w - 10;

                    slide(pos);
                }

                function getCursorPos(e: any) {
                    let a, x = 0;
                    e = (e.changedTouches) ? e.changedTouches[0] : e;
                    a = img.getBoundingClientRect();
                    x = e.pageX - a.left;
                    x = x - window.pageXOffset;
                    return x;
                }

                function slide(x: number) {
                    img.style.width = `${x}px`;
                    slider.style.left = `${img.offsetWidth - slider.offsetWidth / 2}px`;
                }
            }
        }

        initComparisons();
    }, []);

    return (
            <div className={styles.img_comp_container}>
                <div className={styles.img_comp_img}>
                    <Image src={imgRight} alt={''} fill={true} unoptimized/>
                </div>
                <div className={`${styles.img_comp_img} img-comp-overlay`} ref={overlayRef}>
                    <Image src={imgLeft} alt={''} fill={true} unoptimized/>
                </div>
            </div>
    );
};