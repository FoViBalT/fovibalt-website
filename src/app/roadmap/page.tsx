import Link from 'next/link';
import styles from '../shared.module.css';
import RevealOnScroll from '@/components/effects/RevealOnScroll';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import TiltCard from '@/components/effects/TiltCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roadmap – Completed Milestones & Upcoming Features',
  description:
    'Track Fovilight\'s progress: completed prototype, mobile app, and web platform. Upcoming: scenes, LED strip splitting, sensor automation, Effect Store launch, and mass production.',
  alternates: { canonical: 'https://fovibalt.com/roadmap' },
  openGraph: {
    title: 'Fovilight Product Roadmap',
    description: 'From working prototype to mass production. See completed milestones and upcoming features.',
    url: 'https://fovibalt.com/roadmap',
  },
};

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
            date: 'Planned',
            title: 'Web development completion',
            desc: 'Final web platform features and tighter integration across app, dashboard, and device management.',
        },
        {
            date: 'Planned',
            title: 'Scene support',
            desc: 'Scenes can be assigned to grouped controllers to create atmosphere – every controller lights with different colors based on the scene.',
        },
        {
            date: 'Planned',
            title: 'LED strip splitting',
            desc: 'A single LED strip can be split into multiple sections for independent control of each segment.',
        },
        {
            date: 'Planned',
            title: 'Effect Store launch',
            desc: 'Public marketplace where users can share, download, and rate custom lighting effects and plugins.',
        },
        {
            date: 'Planned',
            title: 'Sensor expansion',
            desc: 'Support for connecting various sensors to automate lighting based on motion, ambient light, temperature, and more.',
        },
        {
            date: 'Planned',
            title: 'Mass production',
            desc: 'Transition from prototype to mass manufacturing and retail distribution.',
        },
    ];

    return (
        <>
            <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Roadmap', url: '/roadmap' }]} />
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
                                    <span><strong>Manufacturing</strong> – Hardware production readiness, QA flow, and supply chain execution.</span>
                                </div>
                                <div className={styles.specItem}>
                                    <i className="material-icons">campaign</i>
                                    <span><strong>Awareness spreding</strong> – Community growth, product visibility, and adoption.</span>
                                </div>
                                <div className={styles.specItem}>
                                    <i className="material-icons">web</i>
                                    <span><strong>Infrastructure development</strong> – Dashboard, cloud services, and operational tooling.</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className={styles.sectionHeading}>Market opportunity</h2>
                            <p className={styles.sectionSubtext}>
                                The LED lighting category keeps expanding as more users move to connected and customizable setups.
                                Demand for universal, reliable controllers continues to grow across consumer and enthusiast segments.
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
