import styles from "./ImageListSectionRatio2_3.module.css";
import RadialGradientHighlight from "../parts/RadialGradientHighlight";
import Image from "next/image";

interface TableContent {
    iconTitle: string;
    text: string;
    id: number;
}

const tableContent: TableContent[] = [
    {
        iconTitle: 'segment',
        text: 'Group fovilight’s together for easy use',
        id: 1
    },
    {
        iconTitle: 'smartphone',
        text: 'Control all your fovilight’s from a single app',
        id: 2
    },
    {
        iconTitle: 'public',
        text: 'Make your fovilight’s public if you want',
        id: 3
    },
    {
        iconTitle: 'developer_board_off',
        text: 'Give or deny access to your fovilight to other people',
        id: 4
    }
]
export default function ImageListSectionRatio2_3() {

    const MyImage = () => {
        return <Image
            fill={true}
            src="/images/hero.png"
            alt=""
            priority={true}
        ></Image>
    }

    const tableContentObjects = tableContent.map((content: TableContent) =>
        <div key={content.id} className={styles.iconTextHolder}>
            <i className={`${styles.icon} material-icons`}>{content.iconTitle}</i>
            <p className={styles.tableText}>{content.text}</p>
        </div>
    )

    return (
        <section className={styles.imageTextSection}>
            <div className={styles.tableCol2Ratio3_2}>
                <div className={styles.imageHolder}>
                    <Image
                        fill={true}
                        src="/images/hero.png"
                        alt=""
                        priority={true}
                        style={{color: "none"}}
                    ></Image>
                </div>
                <div className={styles.textHolder}>
                    <h2 className={styles.listHeading}>
                        Groups & multiple access
                    </h2>
                    <RadialGradientHighlight content={tableContentObjects}></RadialGradientHighlight>
                </div>
            </div>
        </section>
    )
}