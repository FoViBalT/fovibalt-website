import styles from "./Button.module.css"

interface ButtonProps {
    text: string,
    type?: string,
    marginTop?: number
    onClickL?: () => void
}

export default function Button({ text, type, marginTop=0, onClickL}: ButtonProps) {
    if (type === undefined || type === "small") {
        return (
            <button className={styles.buttonSmall} onClick={onClickL}>
                {text}
            </button>
        )
    }
    else if (type == "big") {
        return (
            <button style={{marginTop: marginTop + 'px'}} className={styles.buttonBig} onClick={onClickL}>
                {text}
            </button>
        )
    }
}