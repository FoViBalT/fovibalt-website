'use client';
import styles from "./Button.module.css"
import { trackClick } from "@/lib/analytics";

interface ButtonProps {
    text: string,
    type?: string,
    marginTop?: number,
    section?: string,
    onClick?: () => void,
}

export default function Button({ text, type, marginTop=0, section, onClick }: ButtonProps) {
    function handleClick() {
        trackClick({ label: text, section: section ?? 'nav' });
        onClick?.();
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