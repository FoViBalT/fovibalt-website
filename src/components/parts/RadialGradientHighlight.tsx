import styles from "./RadialGradientHighlight.module.css";

export default function RadialGradientHighlight({content}: any) {
    return (
        <div className={styles.highlight}>
            <div className={styles.blurredBackground}></div>
            {content}
        </div>
    )
}