'use client';
import styles from "./SquareButton.module.css"
import { trackClick } from "@/lib/analytics";

interface ButtonProps {
    iconTitle: string,
    color?: string,
    section?: string,
    onClick?: () => void,
}

export default function SquareButton({ iconTitle, color = 'black', section, onClick }: ButtonProps) {
    function handleClick() {
        trackClick({ label: `icon:${iconTitle}`, section: section ?? 'general' });
        onClick?.();
    }

    if (color == "black") {
        return (
            <button className={styles.squareButton} onClick={handleClick}>
                <i className={` ${styles.iconBlue} material-icons`}>{iconTitle}</i>
            </button>
        )
    }
    else {
        return (
            <button className={styles.squareButton} style={{ background: color }} onClick={handleClick}>
                <i className={`material-icons ${styles.iconBlack}`}>{iconTitle}</i>
            </button>
        )
    }
}