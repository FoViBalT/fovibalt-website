import Button from "./Button"

import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Button text="About fovilight"></Button>
            <Button text="Shop"></Button>
            <Button text="Personal Area"></Button>
        </header>
    )
}