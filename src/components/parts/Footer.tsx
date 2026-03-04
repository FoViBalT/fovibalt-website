import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerTop}>
                    <div className={styles.footerBrand}>
                        <div className={styles.footerLogo}>
                            <Image src="/images/logo.svg" alt="Fovibalt logo" width={30} height={30} className={styles.footerLogoIcon} />
                            fovibalt
                        </div>
                        <p className={styles.footerDesc}>
                            The only universal LED strip controller. Connect any LED strip, any time, any place.
                            Say goodbye to compatibility issues and hello to smart lighting freedom.
                        </p>
                    </div>
                    <div className={styles.footerCol}>
                        <h4>Product</h4>
                        <Link href="/technology">Technology</Link>
                        <Link href="/setup">Setup Guide</Link>
                        <Link href="/bundles">Bundles</Link>
                        <Link href="/compare">Compare</Link>
                    </div>
                    <div className={styles.footerCol}>
                        <h4>Company</h4>
                        <Link href="/about">About Us</Link>
                        <Link href="/roadmap">Roadmap</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className={styles.footerCol}>
                        <h4>Resources</h4>
                        <a href="https://dashboard.fovibalt.com" target="_blank" rel="noopener noreferrer">Dashboard</a>
                        <Link href="/setup">Quick Start</Link>
                        <Link href="/technology">LedID™ Docs</Link>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <span className={styles.copyright}>© 2026 Fovibalt. All rights reserved.</span>
                    <div className={styles.footerSocials}>
                        <a href="#" aria-label="Twitter">𝕏</a>
                        <a href="#" aria-label="Instagram">📷</a>
                        <a href="#" aria-label="LinkedIn">in</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
