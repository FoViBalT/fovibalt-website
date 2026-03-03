import Link from 'next/link';
import styles from '../shared.module.css';
import RevealOnScroll from '@/components/effects/RevealOnScroll';
import TiltCard from '@/components/effects/TiltCard';

export default function AboutPage() {
    const team = [
        { name: 'Nikita', role: 'Hardware & Firmware Engineer', initial: 'N' },
        { name: 'Vlad', role: 'Business & Strategy', initial: 'V' },
        { name: 'Developer', role: 'Software Engineer', initial: 'D' },
        { name: 'Designer', role: 'UI/UX & Web Design', initial: 'D' },
    ];

    return (
        <>
            {/* Hero */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.pageHero}>
                <h1 className={styles.pageTitle}>About Fovibalt</h1>
                <p className={styles.pageSubtitle}>
                    We&apos;re a team of students building the universal solution for LED lighting problems –
                    easy to use and easy to set up.
                </p>
            </section>
            </RevealOnScroll>

            {/* Mission */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <div className={styles.twoColGrid}>
                        <div>
                            <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingGradient}`}>Our Mission</h2>
                            <p className={styles.sectionSubtext}>
                                LED lighting is an easy way to make any space more beautiful. With LED strips you can illuminate
                                room ceilings, kitchen counters, gaming desks, and even bathrooms. But the reality is that each
                                use case requires a specific LED strip type and a specific controller.
                            </p>
                            <br />
                            <p className={styles.sectionSubtext}>
                                This creates connection problems – each controller has its own app, its own compatible strips,
                                and its own limitations. We set out to solve this with one universal device.
                            </p>
                        </div>
                        <div>
                            <h2 className={styles.sectionHeading}>The Problem We Solve</h2>
                            <p className={styles.sectionSubtext}>
                                To light up a desk you might use a simple controller. But for ceiling or room illumination you
                                need specialized devices. Each with different apps and different compatible strips.
                            </p>
                            <br />
                            <p className={styles.sectionSubtext}>
                                Fovilight works with any LED strip from any manufacturer, automatically detects strip parameters
                                with LedID™ technology, and gives you AI-powered effects, grouping, and web control – all from
                                one intuitive app.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* Values */}
            <RevealOnScroll variant="fadeUp">
            <section className={`${styles.sectionPadding} ${styles.sectionAlt}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading} style={{ textAlign: 'center', marginBottom: '40px' }}>
                        What drives us
                    </h2>
                    <div className={styles.threeColGrid}>
                        <TiltCard className={`${styles.card} ${styles.cardAlt}`}>
                            <div className={styles.cardIcon}>
                                <i className="material-icons">lightbulb</i>
                            </div>
                            <h4 className={styles.cardTitle}>Innovation</h4>
                            <p className={styles.cardDesc}>
                                We invented LedID™ technology to solve a problem nobody else was addressing –
                                automatic LED strip identification and configuration.
                            </p>
                        </TiltCard>
                        <TiltCard className={`${styles.card} ${styles.cardAlt}`}>
                            <div className={styles.cardIcon}>
                                <i className="material-icons">people</i>
                            </div>
                            <h4 className={styles.cardTitle}>Accessibility</h4>
                            <p className={styles.cardDesc}>
                                Smart lighting should be available to everyone, not just tech enthusiasts.
                                Our 3-step setup proves that powerful can also be simple.
                            </p>
                        </TiltCard>
                        <TiltCard className={`${styles.card} ${styles.cardAlt}`}>
                            <div className={styles.cardIcon}>
                                <i className="material-icons">public</i>
                            </div>
                            <h4 className={styles.cardTitle}>Community</h4>
                            <p className={styles.cardDesc}>
                                Our effect store and scripting support create an ecosystem where users
                                can share and discover creative lighting effects.
                            </p>
                        </TiltCard>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* Team */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingGradient}`} style={{ textAlign: 'center', marginBottom: '16px' }}>
                        The Fovibalt Team
                    </h2>
                    <p className={`${styles.sectionSubtext} ${styles.sectionSubtextCenter}`}>
                        A team of students with diverse specializations, united by the goal of revolutionizing LED lighting.
                        We&apos;re actively looking for a marketing specialist to join us.
                    </p>
                    <div className={styles.teamGrid}>
                        {team.map((member) => (
                            <TiltCard key={member.name} className={styles.teamMember} glowColor="rgba(89,126,255,0.18)">
                                <div className={styles.teamAvatar}>{member.initial}</div>
                                <h4 className={styles.teamName}>{member.name}</h4>
                                <p className={styles.teamRole}>{member.role}</p>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* Achievements */}
            <RevealOnScroll variant="fadeUp">
            <section className={`${styles.sectionPadding} ${styles.sectionAlt}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading} style={{ textAlign: 'center', marginBottom: '40px' }}>
                        What we&apos;ve accomplished
                    </h2>
                    <div className={styles.threeColGrid}>
                        <TiltCard className={`${styles.card} ${styles.cardAlt}`}>
                            <div className={styles.cardIcon}>
                                <i className="material-icons">developer_board</i>
                            </div>
                            <h4 className={styles.cardTitle}>Working prototype</h4>
                            <p className={styles.cardDesc}>
                                Developed a fully functional device prototype with LedID™ technology and all core features.
                            </p>
                        </TiltCard>
                        <TiltCard className={`${styles.card} ${styles.cardAlt}`}>
                            <div className={styles.cardIcon}>
                                <i className="material-icons">smartphone</i>
                            </div>
                            <h4 className={styles.cardTitle}>Mobile app</h4>
                            <p className={styles.cardDesc}>
                                Built a fully functional mobile app with intuitive design for controlling all lighting effects.
                            </p>
                        </TiltCard>
                        <TiltCard className={`${styles.card} ${styles.cardAlt}`}>
                            <div className={styles.cardIcon}>
                                <i className="material-icons">language</i>
                            </div>
                            <h4 className={styles.cardTitle}>Web platform</h4>
                            <p className={styles.cardDesc}>
                                Created the web platform and account management system at dashboard.fovibalt.com.
                            </p>
                        </TiltCard>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll variant="scaleUp">
            <section className={styles.ctaSection}>
                <div className={styles.ctaBox}>
                    <h2 className={styles.ctaHeading}>Want to join our journey?</h2>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/contact" className={styles.ctaBtn}>Get in touch</Link>
                        <Link href="/roadmap" className={styles.ctaBtnOutline}>See our roadmap</Link>
                    </div>
                </div>
            </section>
            </RevealOnScroll>
        </>
    );
}
