import styles from "./ImageTextSectionRatio1_1.module.css";
import RadialGradientHighlight from "../parts/RadialGradientHighlight";
import Button from "../parts/Button";
import Image from "next/image";

export default function ImageTextSectionRatio1_1() {

    const MyImage = () => {
        return <Image
            fill={true}
            src="/images/dreams.png"
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
                    <p className={styles.tableText}>
                        Fulfil your dreams with fovilight
                    </p>
                    <Button text="Buy now" type="big" marginTop={15}></Button>
                </div>
            </div>
        </section>
    )
}