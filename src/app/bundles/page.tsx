import Link from 'next/link';
import styles from '../shared.module.css';
import RevealOnScroll from '@/components/effects/RevealOnScroll';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import TiltCard from '@/components/effects/TiltCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bundles – Replacement Kit, Starter Kit & Pro Kit',
  description:
    'Choose your Fovilight bundle: Replacement kit for upgrading existing setups, Starter kit with WS2815 5m LED strip, or Pro kit with 10m APA102 strip. All include the universal Fovilight controller.',
  alternates: { canonical: 'https://fovibalt.com/bundles' },
  openGraph: {
    title: 'Fovilight Bundles – Find Your Perfect LED Setup',
    description: 'Replacement, Starter & Pro kits. From simple controller upgrades to complete 10m professional LED installations.',
    url: 'https://fovibalt.com/bundles',
  },
};

export default function BundlesPage() {
    const bundles = [
        {
            name: 'Replacement kit',
            desc: 'Perfect if you already have LED strips and a power supply. Just swap your old controller for fovilight.',
            features: [
                'Fovilight controller',
                'Industry standard 5.08 modular terminal block connector cable',
                '6-pin industry standard 5.08 modular terminal block connector cable',
                'Different clamps to connect LED strip',
                'Quick start guide',
            ],
            idealFor: 'Upgrading existing LED setups to smart control',
            icon: 'swap_horiz',
            imagePlaceholder: 'Fovilight controller unit in retail packaging – clean shot on dark surface, connector cables visible beside it',
        },
        {
            name: 'Starter kit',
            desc: 'Everything you need to get started with quality addressable LED lighting right out of the box.',
            features: [
                'Fovilight controller',
                '12v ws2815 5m LED strip',
                '12v power supply',
                'Different clamps to connect LED strip',
            ],
            idealFor: 'First-time LED users who want a complete solution',
            icon: 'inventory_2',
            imagePlaceholder: 'Starter kit box contents laid out – controller, 12v ws2815 5m LED strip, 12v adapter, and clamps arranged on dark surface',
        },
        {
            name: 'Pro kit',
            desc: 'The premium package for demanding installations with 10 meters of high-quality 12V LED strip.',
            features: [
                'Fovilight controller',
                '10m Apa102 12v LED strip',
                '12v power supply',
                'Different clamps to connect LED strip',
            ],
            idealFor: 'Whole-room installations, professional setups, enthusiasts',
            icon: 'star',
            imagePlaceholder: 'Pro kit premium box contents – controller, 10m Apa102 12v LED strip reel, 12v power supply, and premium clamps on dark surface',
        },
    ];

    return (
        <>
            <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Bundles', url: '/bundles' }]} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ItemList',
                    name: 'Fovilight LED Controller Bundles',
                    description: 'Universal LED strip controller bundles for every need',
                    url: 'https://fovibalt.com/bundles',
                    numberOfItems: 3,
                    itemListElement: bundles.map((b, i) => ({
                        '@type': 'ListItem',
                        position: i + 1,
                        item: {
                            '@type': 'Product',
                            name: `Fovilight ${b.name}`,
                            description: b.desc,
                            brand: { '@type': 'Brand', name: 'Fovibalt' },
                            category: 'LED Controllers',
                            url: 'https://fovibalt.com/bundles',
                            offers: {
                                '@type': 'Offer',
                                availability: 'https://schema.org/PreOrder',
                                priceCurrency: 'EUR',
                            },
                        },
                    })),
                }) }}
            />
            {/* Hero */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.pageHero}>
                <h1 className={styles.pageTitle}>Bundles</h1>
                <p className={styles.pageSubtitle}>
                    Find the perfect setup for your needs. From simple controller replacements to complete
                    professional kits – we have you covered.
                </p>
            </section>
            </RevealOnScroll>

            {/* Bundles */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <div className={styles.stepsGrid}>
                        {bundles.map((bundle, i) => (
                            <TiltCard key={bundle.name} className={styles.bundleCard} glowColor="rgba(89,126,255,0.25)">
                                <div className={i % 2 === 1 ? `${styles.bundleCardGrid} ${styles.bundleCardGridReverse}` : styles.bundleCardGrid}>
                                    <div>
                                        <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingGradient}`}>{bundle.name}</h2>
                                        <p className={styles.sectionSubtext} style={{ marginBottom: '20px' }}>{bundle.desc}</p>
                                        <h4 style={{ fontSize: 'var(--body-text)', fontWeight: 600, marginBottom: '12px' }}>What&apos;s included:</h4>
                                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {bundle.features.map((f) => (
                                                <li key={f} style={{
                                                    fontFamily: "'Open Sans', sans-serif",
                                                    fontSize: 'var(--small-text)',
                                                    color: 'var(--Text_2)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                }}>
                                                    <i className="material-icons" style={{ fontSize: '16px', color: 'var(--Accent_1)' }}>check</i>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <p style={{
                                            marginTop: '20px',
                                            fontFamily: "'Open Sans', sans-serif",
                                            fontSize: 'var(--small-text)',
                                            color: 'var(--Accent_1)',
                                            fontStyle: 'italic',
                                        }}>
                                            Ideal for: {bundle.idealFor}
                                        </p>
                                        <button type="button" className={styles.bundleBuyBtn}>Buy</button>
                                    </div>
                                    <div className={styles.imagePlaceholder}>
                                        <i className="material-icons">{bundle.icon}</i>
                                        {bundle.imagePlaceholder}
                                    </div>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* Comparison mini */}
            <RevealOnScroll variant="fadeUp">
            <section className={`${styles.sectionPadding} ${styles.sectionAlt}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading} style={{ textAlign: 'center', marginBottom: '40px' }}>
                        Bundle comparison
                    </h2>
                    <div style={{ overflowX: 'auto' }}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Replacement</th>
                                    <th>Starter</th>
                                    <th className={styles.highlightCol}>Pro</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i className="material-icons" style={{ fontSize: '18px', color: 'var(--Accent_1)' }}>developer_board</i> Controller</td>
                                    <td><i className={`material-icons ${styles.checkIcon}`}>check_circle</i></td>
                                    <td><i className={`material-icons ${styles.checkIcon}`}>check_circle</i></td>
                                    <td className={styles.highlightCell}><i className={`material-icons ${styles.checkIcon}`}>check_circle</i></td>
                                </tr>
                                <tr>
                                    <td><i className="material-icons" style={{ fontSize: '18px', color: 'var(--Accent_1)' }}>light</i> LED strip</td>
                                    <td><i className={`material-icons ${styles.crossIcon}`}>cancel</i></td>
                                    <td>12v WS2815 5m</td>
                                    <td className={styles.highlightCell}>10m APA102 12v</td>
                                </tr>
                                <tr>
                                    <td><i className="material-icons" style={{ fontSize: '18px', color: 'var(--Accent_1)' }}>power</i> Power supply</td>
                                    <td><i className={`material-icons ${styles.crossIcon}`}>cancel</i></td>
                                    <td>12v adapter</td>
                                    <td className={styles.highlightCell}>12v adapter</td>
                                </tr>
                                <tr>
                                    <td><i className="material-icons" style={{ fontSize: '18px', color: 'var(--Accent_1)' }}>cable</i> Connectors</td>
                                    <td>Basic</td>
                                    <td>Standard</td>
                                    <td className={styles.highlightCellBottom}>Full set + extensions</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* On-the-go */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <div className={styles.twoColGrid}>
                        <div>
                            <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingGradient}`}>On-the-go use</h2>
                            <p className={styles.sectionSubtext}>
                                All bundles support portable use. Connect a power bank via USB-C, and control locally
                                over BLE – perfect for events, camping, concerts, or anywhere
                                without a power outlet.
                            </p>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <i className="material-icons">battery_charging_full</i>
                            Fovilight connected to a power bank outdoors – LED strip glowing in a tent or outdoor setting, phone controlling it over BLE
                        </div>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll variant="scaleUp">
            <section className={styles.ctaSection}>
                <div className={styles.ctaBox}>
                    <h2 className={styles.ctaHeading}>No more compatibility problems</h2>
                    <p style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: 'var(--body-text)',
                        color: 'var(--Text_2)',
                        marginBottom: '24px',
                    }}>
                        Just smart lighting for everyone.
                    </p>
                    <Link href="/contact" className={styles.ctaBtn}>Join wait list</Link>
                </div>
            </section>
            </RevealOnScroll>
        </>
    );
}
