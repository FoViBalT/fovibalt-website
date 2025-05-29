'use client';
import Button from "./Button"

import styles from "./Header.module.css";

export default function Header() {
     const handlePersonalAreaClick = () => {
        window.location.href = 'https://dashboard.fovibalt.com'; // Redirect to the personal area
    };

    return (
        <header className={styles.header}>
            <Button text="About fovilight"></Button>
            <Button text="Shop"></Button>
            <Button text="Personal Area" onClickL={handlePersonalAreaClick}></Button>
        </header>
    );
}