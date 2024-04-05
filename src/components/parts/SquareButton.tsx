import styles from "./SquareButton.module.css"

interface ButtonProps {
    iconTitle: string,
    color?: string,
}

export default function SquareButton({ iconTitle, color = 'black' }: ButtonProps) {
    if (color == "black") {
        return (
            <button className={styles.squareButton}>
                <i className={` ${styles.iconBlue} material-icons`}>{iconTitle}</i>
            </button>
        )
    }
    else {
        return (
            <button className={styles.squareButton} style={{
                    background: color, }}>
                <i className={`material-icons ${styles.iconBlack}`}>{iconTitle}</i>
            </button>
        )
    }
}