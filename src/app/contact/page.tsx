import styles from '../shared.module.css';
import RevealOnScroll from '@/components/effects/RevealOnScroll';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import TiltCard from '@/components/effects/TiltCard';
import ContactForm from '@/components/parts/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us – Get in Touch with the Fovibalt Team',
  description:
    'Contact Fovibalt for questions about Fovilight, beta testing opportunities, collaboration, or joining the team. Reach us at info@fovibalt.com.',
  alternates: { canonical: 'https://fovibalt.com/contact' },
  openGraph: {
    title: 'Contact Fovibalt',
    description: 'Questions, beta testing, collaboration — reach out to the Fovibalt team.',
    url: 'https://fovibalt.com/contact',
  },
};

export default function ContactPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]} />
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
                            <ContactForm />
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
