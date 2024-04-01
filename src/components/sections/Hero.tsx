import Button from "../parts/Button"
import Image from "next/image"

import styles from "./Hero.module.css";

export default function Hero() {
    return (
    <section className={styles.hero}>
        <div className={styles.heroContentWrapper}>
        <h1 className={styles.heroH1}>fovilight 1</h1>
            <div className={styles.fade_in}>
                <Button text="Become a beta tester" type="big" marginTop={15}></Button>
            </div>
        <div className={`${styles.heroImgHolder} ${styles.slide_in_hero}`}>
            <Image
            fill={true}
            src="/images/fovilight.png"
            alt=""
            priority={true}
            ></Image>
        </div>
        </div>
    </section>
    )
}