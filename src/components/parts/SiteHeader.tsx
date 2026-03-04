'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './SiteHeader.module.css';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/technology', label: 'Technology' },
    { href: '/setup', label: 'Setup' },
    { href: '/bundles', label: 'Bundles' },
    { href: '/compare', label: 'Compare' },
    { href: '/about', label: 'About' },
    { href: '/roadmap', label: 'Roadmap' },
];

export default function SiteHeader() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
            return;
        }
        document.body.style.overflow = '';
    }, [mobileOpen]);

    return (
        <>
            <header className={styles.header}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>⬡⬡</span>
                    fovibalt
                </Link>
                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/bundles" className={styles.shopButton}>
                        Go to shop
                    </Link>
                    <a href="https://dashboard.fovibalt.com" className={styles.ctaButton}>
                        Go to dashboard
                    </a>
                </nav>
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                >
                    <i className="material-icons">{mobileOpen ? 'close' : 'menu'}</i>
                </button>
            </header>
            <nav className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ''}`} onClick={() => setMobileOpen(false)}>
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ''}`}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link href="/bundles" className={styles.shopButton}>
                    Go to shop
                </Link>
                <a href="https://dashboard.fovibalt.com" className={styles.ctaButton}>
                    Go to dashboard
                </a>
            </nav>
        </>
    );
}
