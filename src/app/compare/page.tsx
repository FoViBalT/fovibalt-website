import Link from 'next/link';
import styles from '../shared.module.css';
import RevealOnScroll from '@/components/effects/RevealOnScroll';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import TiltCard from '@/components/effects/TiltCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare – Fovilight vs Twinkly vs Xiaomi vs Philips Hue',
  description:
    'See how Fovilight compares to Twinkly, Xiaomi, and Philips Hue. Universal LED support, AI effects, custom scripting, over-current protection, local-first operation – features competitors don\'t offer.',
  alternates: { canonical: 'https://fovibalt.com/compare' },
  openGraph: {
    title: 'Fovilight vs Twinkly vs Xiaomi vs Philips – LED Controller Comparison',
    description: 'Universal LED support, AI effects, scripting, protection – see why Fovilight leads in 16 feature categories.',
    url: 'https://fovibalt.com/compare',
  },
};

export default function ComparePage() {
    const features = [
        { name: 'Mobile app', icon: 'smartphone', fovibalt: true, twinkly: true, xiaomi: true, philips: true },
        { name: 'Eco mode', icon: 'eco', fovibalt: true, twinkly: false, xiaomi: false, philips: false },
        { name: 'Overcurrent protection', icon: 'security', fovibalt: true, twinkly: false, xiaomi: false, philips: false },
        { name: 'Multiple access', icon: 'group', fovibalt: true, twinkly: false, xiaomi: true, philips: true },
        { name: 'Grouping', icon: 'workspaces', fovibalt: true, twinkly: true, xiaomi: false, philips: false },
        { name: 'Local-first', icon: 'hub', fovibalt: true, twinkly: false, xiaomi: false, philips: false },
        { name: 'Standby mode', icon: 'dark_mode', fovibalt: true, twinkly: false, xiaomi: false, philips: false },
        { name: 'Access control', icon: 'lock', fovibalt: true, twinkly: false, xiaomi: false, philips: false },
        { name: 'Virtual controllers', icon: 'developer_board', fovibalt: true, twinkly: false, xiaomi: false, philips: false },
        { name: 'AI effects', icon: 'auto_awesome', fovibalt: true, twinkly: false, xiaomi: false, philips: false },
        { name: 'Effect store', icon: 'store', fovibalt: true, twinkly: false, xiaomi: false, philips: false },
        { name: 'Custom scripting', icon: 'code', fovibalt: true, twinkly: false, xiaomi: false, philips: false },
        { name: 'Universal LED support', icon: 'cable', fovibalt: true, twinkly: false, xiaomi: false, philips: false },
        { name: 'Auto LED detection', icon: 'memory', fovibalt: true, twinkly: false, xiaomi: false, philips: false },
        { name: 'Remote control', icon: 'language', fovibalt: true, twinkly: true, xiaomi: true, philips: true },
        { name: 'On-the-go (BLE)', icon: 'bluetooth', fovibalt: true, twinkly: false, xiaomi: true, philips: false },
    ];

    const Check = () => <i className={`material-icons ${styles.checkIcon}`}>check_circle</i>;
    const Cross = () => <i className={`material-icons ${styles.crossIcon}`}>cancel</i>;

    return (
        <>
            <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Compare', url: '/compare' }]} />
            {/* Hero */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.pageHero}>
                <h1 className={styles.pageTitle}>Compare for yourself</h1>
                <p className={styles.pageSubtitle}>
                    Integrate all types of LED strips, regardless of brand, voltage, or technology.
                    Say goodbye to limitations and hello to complete lighting freedom.
                </p>
            </section>
            </RevealOnScroll>

            {/* Comparison Table */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <div style={{ overflowX: 'auto' }}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th className={styles.highlightCol}>Fovibalt</th>
                                    <th>Twinkly</th>
                                    <th>Xiaomi</th>
                                    <th>Philips</th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, i) => (
                                    <tr key={feature.name}>
                                        <td>
                                            <i className="material-icons" style={{ fontSize: '18px', color: 'var(--Accent_1)', marginRight: '4px' }}>{feature.icon}</i>
                                            {feature.name}
                                        </td>
                                        <td className={i === features.length - 1 ? styles.highlightCellBottom : styles.highlightCell}>
                                            {feature.fovibalt ? <Check /> : <Cross />}
                                        </td>
                                        <td>{feature.twinkly ? <Check /> : <Cross />}</td>
                                        <td>{feature.xiaomi ? <Check /> : <Cross />}</td>
                                        <td>{feature.philips ? <Check /> : <Cross />}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* Why fovilight */}
            <RevealOnScroll variant="fadeUp">
            <section className={`${styles.sectionPadding} ${styles.sectionAlt}`}>
                <div className={styles.container}>
                    <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingGradient}`} style={{ textAlign: 'center', marginBottom: '16px' }}>
                        Why choose Fovilight?
                    </h2>
                    <p className={`${styles.sectionSubtext} ${styles.sectionSubtextCenter}`}>
                        While other controllers lock you into their ecosystem with brand-specific strips and limited features,
                        fovilight gives you complete freedom and cutting-edge technology.
                    </p>
                    <div className={styles.threeColGrid}>
                        <TiltCard className={`${styles.card} ${styles.cardAlt}`} glowColor="rgba(89,126,255,0.2)">
                            <div className={styles.cardIcon}>
                                <i className="material-icons">cable</i>
                            </div>
                            <h4 className={styles.cardTitle}>Universal compatibility</h4>
                            <p className={styles.cardDesc}>
                                Works with LED strips from any manufacturer. No vendor lock-in, no brand-specific connectors.
                                Use the strips you already own.
                            </p>
                        </TiltCard>
                        <TiltCard className={`${styles.card} ${styles.cardAlt}`} glowColor="rgba(155,89,255,0.2)">
                            <div className={styles.cardIcon}>
                                <i className="material-icons">auto_awesome</i>
                            </div>
                            <h4 className={styles.cardTitle}>AI-powered effects</h4>
                            <p className={styles.cardDesc}>
                                No other controller offers AI-generated effects, custom scripting, and a community effect store
                                in one package.
                            </p>
                        </TiltCard>
                        <TiltCard className={`${styles.card} ${styles.cardAlt}`} glowColor="rgba(255,88,220,0.2)">
                            <div className={styles.cardIcon}>
                                <i className="material-icons">security</i>
                            </div>
                            <h4 className={styles.cardTitle}>Built-in protection</h4>
                            <p className={styles.cardDesc}>
                                Over-current, over-voltage, incorrect connection protection, and power shortage recovery –
                                features you won&apos;t find in competing products.
                            </p>
                        </TiltCard>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* Market context */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <div className={styles.twoColGrid}>
                        <div>
                            <h2 className={styles.sectionHeading}>The LED market is booming</h2>
                            <p className={styles.sectionSubtext}>
                                Based on industry data and forecasts, the LED lighting market is set to double by 2030.
                                Three main categories exist today: smart LED bulbs, branded LED strips, and cheap generic strips.
                            </p>
                            <br />
                            <p className={styles.sectionSubtext}>
                                Some can&apos;t control individual LED colors, some break quickly. But the biggest problem with all of them?
                                You can only use that manufacturer&apos;s LED strip. Fovilight combines all these categories – offering
                                smart features, automatic LED detection, and AI – in one universal device.
                            </p>
                        </div>
                        <div>
                            <h2 className={styles.sectionHeading}>What users want</h2>
                            <p className={styles.sectionSubtext}>
                                In a survey of 200 people, 40% expressed interest in purchasing LED lighting, and 30% wanted to
                                buy our specific device. Our target audience is people aged 20–40, gamers, and homeowners looking
                                to upgrade their lighting setup.
                            </p>
                            <br />
                            <p className={styles.sectionSubtext}>
                                No more compatibility problems – just smart lighting for everyone.
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
                    <h2 className={styles.ctaHeading}>See the difference for yourself</h2>
                    <Link href="/bundles" className={styles.ctaBtn}>Get your fovilight</Link>
                </div>
            </section>
            </RevealOnScroll>
        </>
    );
}
