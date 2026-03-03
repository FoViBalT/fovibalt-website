import Link from 'next/link';
import styles from '../shared.module.css';
import RevealOnScroll from '@/components/effects/RevealOnScroll';
import TiltCard from '@/components/effects/TiltCard';

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.pageHero}>
                <h1 className={styles.pageTitle}>Contact Us</h1>
                <p className={styles.pageSubtitle}>
                    Have questions about fovilight? Want to become a beta tester or collaborate with us?
                    We&apos;d love to hear from you.
                </p>
            </section>
            </RevealOnScroll>

            {/* Contact content */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <div className={styles.twoColGrid}>
                        <div>
                            <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingGradient}`}>Get in touch</h2>
                            <form className={styles.contactForm}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" placeholder="Your name" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="your@email.com" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" placeholder="What is this about?" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" placeholder="Tell us more..."></textarea>
                                </div>
                                <button type="submit" className={styles.ctaBtn} style={{ border: 'none' }}>
                                    Send message
                                </button>
                            </form>
                        </div>
                        <div>
                            <h2 className={styles.sectionHeading}>Other ways to reach us</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '20px' }}>
                                <TiltCard className={styles.card}>
                                    <div className={styles.cardIcon}>
                                        <i className="material-icons">email</i>
                                    </div>
                                    <h4 className={styles.cardTitle}>Email</h4>
                                    <p className={styles.cardDesc}>
                                        For general inquiries and support:<br />
                                        <a href="mailto:info@fovibalt.com" style={{ color: 'var(--Accent_1)' }}>info@fovibalt.com</a>
                                    </p>
                                </TiltCard>
                                <TiltCard className={styles.card}>
                                    <div className={styles.cardIcon}>
                                        <i className="material-icons">language</i>
                                    </div>
                                    <h4 className={styles.cardTitle}>Dashboard</h4>
                                    <p className={styles.cardDesc}>
                                        Access your controllers and account at:<br />
                                        <a href="https://dashboard.fovibalt.com" target="_blank" rel="noopener noreferrer"
                                           style={{ color: 'var(--Accent_1)' }}>dashboard.fovibalt.com</a>
                                    </p>
                                </TiltCard>
                                <TiltCard className={styles.card}>
                                    <div className={styles.cardIcon}>
                                        <i className="material-icons">group_add</i>
                                    </div>
                                    <h4 className={styles.cardTitle}>Beta Testing</h4>
                                    <p className={styles.cardDesc}>
                                        Interested in becoming a beta tester? Send us a message with &ldquo;Beta Tester&rdquo; in the subject
                                        and we&apos;ll get back to you with details.
                                    </p>
                                </TiltCard>
                                <TiltCard className={styles.card}>
                                    <div className={styles.cardIcon}>
                                        <i className="material-icons">work</i>
                                    </div>
                                    <h4 className={styles.cardTitle}>Join the Team</h4>
                                    <p className={styles.cardDesc}>
                                        We&apos;re looking for a marketing specialist! If you&apos;re interested in joining the Fovibalt team,
                                        reach out with your background and ideas.
                                    </p>
                                </TiltCard>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </RevealOnScroll>
        </>
    );
}
