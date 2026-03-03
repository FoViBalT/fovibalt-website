import Link from 'next/link';
import styles from '../shared.module.css';
import RevealOnScroll from '@/components/effects/RevealOnScroll';
import TiltCard from '@/components/effects/TiltCard';

export default function RoadmapPage() {
    const completed = [
        {
            date: 'Completed',
            title: 'Device prototype',
            desc: 'Developed a fully functional hardware prototype with LedID™ technology, multi-protocol support, and all power connectors.',
        },
        {
            date: 'Completed',
            title: 'Mobile application',
            desc: 'Built the iOS and Android mobile app with effect control, grouping, and intuitive UI design.',
        },
        {
            date: 'Completed',
            title: 'Web platform & account management',
            desc: 'Created dashboard.fovibalt.com for web-based controller management and user accounts.',
        },
        {
            date: 'Completed',
            title: 'Alternative casing design',
            desc: 'Found and validated an alternative housing design for the production version.',
        },
        {
            date: 'Completed',
            title: 'Professional website design',
            desc: 'Designed and developed the professional product website you are viewing now.',
        },
        {
            date: 'Completed',
            title: 'Beta tester recruitment',
            desc: 'Found initial beta testers to validate the product in real-world conditions.',
        },
    ];

    const upcoming = [
        {
            date: 'In Progress',
            title: 'Prototype finalization',
            desc: 'Resolving remaining hardware issues and preparing the design for manufacturing. Estimated budget: €900.',
        },
        {
            date: 'Q2 2026',
            title: 'Marketing launch',
            desc: 'Starting outreach to spread awareness about fovilight and validate market demand. Estimated budget: €1000.',
        },
        {
            date: 'Q2 2026',
            title: 'Web development completion',
            desc: 'Final web platform features and integration with a dedicated designer. Estimated budget: €900.',
        },
        {
            date: 'Q3 2026',
            title: 'Scene support',
            desc: 'Scenes can be assigned to grouped controllers to create atmosphere – every controller lights with different colors based on the scene.',
        },
        {
            date: 'Q3 2026',
            title: 'LED strip splitting',
            desc: 'A single LED strip can be split into multiple sections for independent control of each segment.',
        },
        {
            date: 'Q4 2026',
            title: 'Effect Store launch',
            desc: 'Public marketplace where users can share, download, and rate custom lighting effects and plugins.',
        },
        {
            date: 'Q4 2026',
            title: 'Sensor expansion',
            desc: 'Support for connecting various sensors to automate lighting based on motion, ambient light, temperature, and more.',
        },
        {
            date: '2027',
            title: 'Mass production',
            desc: 'Transition from prototype to mass manufacturing and retail distribution.',
        },
    ];

    return (
        <>
            {/* Hero */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.pageHero}>
                <h1 className={styles.pageTitle}>Roadmap</h1>
                <p className={styles.pageSubtitle}>
                    See where we&apos;ve been and where we&apos;re heading. Fovilight is constantly evolving with
                    new features and capabilities.
                </p>
            </section>
            </RevealOnScroll>

            {/* Completed */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingGradient}`} style={{ marginBottom: '40px' }}>
                        What we&apos;ve accomplished
                    </h2>
                    <div className={styles.timeline}>
                        {completed.map((item) => (
                            <div key={item.title} className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <p className={styles.timelineDate}>{item.date}</p>
                                <h4 className={styles.timelineTitle}>{item.title}</h4>
                                <p className={styles.timelineDesc}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            <div className={styles.divider}></div>

            {/* Upcoming */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingGradient}`} style={{ marginBottom: '40px' }}>
                        What&apos;s coming next
                    </h2>
                    <div className={styles.timeline}>
                        {upcoming.map((item) => (
                            <div key={item.title} className={styles.timelineItem}>
                                <div className={`${styles.timelineDot} ${styles.timelineDotFuture}`}></div>
                                <p className={styles.timelineDate}>{item.date}</p>
                                <h4 className={styles.timelineTitle}>{item.title}</h4>
                                <p className={styles.timelineDesc}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* Future features detail */}
            <RevealOnScroll variant="fadeUp">
            <section className={`${styles.sectionPadding} ${styles.sectionAlt}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading} style={{ textAlign: 'center', marginBottom: '40px' }}>
                        Upcoming feature highlights
                    </h2>
                    <div className={styles.threeColGrid}>
                        <TiltCard className={`${styles.card} ${styles.cardAlt}`}>
                            <div className={styles.cardIcon}>
                                <i className="material-icons">palette</i>
                            </div>
                            <h4 className={styles.cardTitle}>Scenes</h4>
                            <p className={styles.cardDesc}>
                                Assign scenes to grouped controllers. Each controller displays different colors
                                and effects based on the selected scene to create the perfect atmosphere.
                            </p>
                        </TiltCard>
                        <TiltCard className={`${styles.card} ${styles.cardAlt}`}>
                            <div className={styles.cardIcon}>
                                <i className="material-icons">content_cut</i>
                            </div>
                            <h4 className={styles.cardTitle}>LED strip splitting</h4>
                            <p className={styles.cardDesc}>
                                Split a single LED strip into multiple independently controlled sections.
                                Run different effects on different parts of the same strip.
                            </p>
                        </TiltCard>
                        <TiltCard className={`${styles.card} ${styles.cardAlt}`}>
                            <div className={styles.cardIcon}>
                                <i className="material-icons">sensors</i>
                            </div>
                            <h4 className={styles.cardTitle}>Sensor automation</h4>
                            <p className={styles.cardDesc}>
                                Connect motion sensors, light sensors, and more to automate mundane lighting
                                tasks. Lights that react to your environment automatically.
                            </p>
                        </TiltCard>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* Business model context */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <div className={styles.twoColGrid}>
                        <div>
                            <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingGradient}`}>Investment needs</h2>
                            <p className={styles.sectionSubtext}>
                                To bring fovilight to market, we need resources for three key areas:
                            </p>
                            <br />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div className={styles.specItem}>
                                    <i className="material-icons">build</i>
                                    <span><strong>Prototype finalization</strong> – Resolving final issues and preparing for manufacturing (€900)</span>
                                </div>
                                <div className={styles.specItem}>
                                    <i className="material-icons">campaign</i>
                                    <span><strong>Marketing launch</strong> – Building awareness and validating demand (€1,000)</span>
                                </div>
                                <div className={styles.specItem}>
                                    <i className="material-icons">web</i>
                                    <span><strong>Web development</strong> – Final platform features with professional design (€900)</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className={styles.sectionHeading}>Market opportunity</h2>
                            <p className={styles.sectionSubtext}>
                                Based on market data and forecasts, the LED lighting market will double by 2030.
                                In a survey of 200 people, 40% wanted to purchase LED lighting and 30% expressed
                                interest in buying our device specifically.
                            </p>
                            <br />
                            <p className={styles.sectionSubtext}>
                                Our target audience: people aged 20–40, gamers, and homeowners looking to upgrade
                                their lighting. The market is ready for a universal solution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll variant="scaleUp">
            <section className={styles.ctaSection}>
                <div className={styles.ctaBox}>
                    <h2 className={styles.ctaHeading}>Want to support our mission?</h2>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/contact" className={styles.ctaBtn}>Contact us</Link>
                        <Link href="/bundles" className={styles.ctaBtnOutline}>See bundles</Link>
                    </div>
                </div>
            </section>
            </RevealOnScroll>
        </>
    );
}
