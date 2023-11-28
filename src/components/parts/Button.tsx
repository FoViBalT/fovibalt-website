import styles from "./Button.module.css"

interface ButtonProps {
    text: string,
    type?: string,
    marginTop?: number
}

export default function Button({ text, type, marginTop=0 }: ButtonProps) {
    if (type === undefined || type === "small") {
        return (
            <button className={styles.buttonSmall}>
                {text}
            </button>
        )
    }
    else if (type == "big") {
        return (
            <button style={{marginTop: marginTop + 'px'}} className={styles.buttonBig}>
                {text}
            </button>
        )
    }
}