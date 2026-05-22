'use client';

import styles from "./Button.module.css"
import { trackClick } from "@/lib/analytics"

interface ButtonProps {
    text: string,
    type?: string,
    marginTop?: number
    onClickL?: () => void
    /** Optional GA4 label override (defaults to button text). */
    trackLabel?: string
}

export default function Button({ text, type, marginTop=0, onClickL, trackLabel }: ButtonProps) {
    function handleClick() {
        trackClick(trackLabel ?? text);
        onClickL?.();
    }

    if (type === undefined || type === "small") {
        return (
            <button className={styles.buttonSmall} onClick={handleClick}>
                {text}
            </button>
        )
    }
    else if (type == "big") {
        return (
            <button style={{marginTop: marginTop + 'px'}} className={styles.buttonBig} onClick={handleClick}>
                {text}
            </button>
        )
    }
}