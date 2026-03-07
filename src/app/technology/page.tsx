import Link from 'next/link';
import Image from 'next/image';
import styles from '../shared.module.css';
import RevealOnScroll from '@/components/effects/RevealOnScroll';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology - LedID™ Auto-Detection, AI Effects & Lua Scripting',
  description:
    'Learn about Fovilight\'s technology: LedID™ auto-detection for 20+ LED types, AI effect generation, Lua scripting engine, versatile 5-24V power input, BLE connectivity, and local-first operation.',
  alternates: { canonical: 'https://fovibalt.com/technology' },
  openGraph: {
    title: 'Fovilight Technology - LedID™, AI Effects & Scripting',
    description: 'LedID™ auto-detects 20+ LED strip types. AI generates custom effects. Lua scripting for full control. 5-24V, up to 20A.',
    url: 'https://fovibalt.com/technology',
  },
};

export default function TechnologyPage() {
    const ledStripTypes = [
        'WS2811', 'WS2812', 'WS2812B', 'WS2813', 'WS2814', 'WS2815', 'WS2818', 'WS2801',
        'SK6812', 'SK6812 RGB', 'SK6812 RGBW', 'SK6812 MINI', 'SK6812 MINI-E', 'SK9822',
        'APA102', 'APA102C', 'HD107S', 'RGB', 'RGBW', 'RGB WW CW', 'WW CW', 'WW', 'CW',
    ];

    return (
        <>
            <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Technology', url: '/technology' }]} />
            {/* Hero */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.pageHero}>
                <h1 className={styles.pageTitle}>Technology</h1>
                <p className={styles.pageSubtitle}>
                    Discover the innovations behind fovilight - from LedID™ auto-detection to AI-powered lighting effects.
                </p>
            </section>
            </RevealOnScroll>

            {/* LedID™ */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <div className={styles.twoColGrid}>
                        <div>
                            <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingGradient}`}>
                                LedID™ Technology
                            </h2>
                            <p className={styles.sectionSubtext}>
                                LedID is the technology that enables the fovilight controller to automatically identify
                                connected LED strips. It detects the communication protocol, strip length, number of LEDs, and
                                fault conditions — all within seconds.
                            </p>
                            <br />
                            <p className={styles.sectionSubtext}>
                                This eliminates the need to manually look up strip specifications, configure protocols, or worry
                                about compatibility. Simply connect your LED strip and fovilight handles everything automatically.
                            </p>
                        </div>
                        <div className={styles.imagePlaceholder} style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
                            <Image
                                src="/images/img/led_id.png"
                                alt="Diagram showing LedID detection flow - LED strip plugged in, controller analyzing signal, screen showing detected parameters (type: WS2812, length: 5m, LEDs: 150)"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: 'cover' }}
                            />
                            {/**
                             * Placeholder (kept for reference)
                             *
                             * <div className={styles.imagePlaceholder}>
                             *     <i className="material-icons">memory</i>
                             *     Diagram showing LedID detection flow - LED strip plugged in, controller analyzing signal, screen showing detected parameters (type: WS2812, length: 5m, LEDs: 150)
                             * </div>
                             */}
                        </div>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* LED type support */}
            <RevealOnScroll variant="fadeUp">
            <section className={`${styles.sectionPadding} ${styles.sectionAlt}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading}>20+ Different LED Types Supported</h2>
                    <p className={`${styles.sectionSubtext} ${styles.sectionSubtextCenter}`}>
                        Fovilight supports WS and SK families alongside other popular addressable and analog LED strips.
                        No vendor lock-in.
                    </p>
                    <div className={styles.stripTypesList}>
                        {ledStripTypes.map((type) => (
                            <div key={type} className={styles.stripType}>{type}</div>
                        ))}
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* Versatile power */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <div className={`${styles.twoColGrid} ${styles.twoColGridReverse}`}>
                        <div>
                            <h2 className={styles.sectionHeading}>Versatile Power Input</h2>
                            <p className={styles.sectionSubtext}>
                                Fovilight supports multiple power input options to fit any setup scenario:
                            </p>
                            <br />
                            <div className={styles.specsList}>
                                <div className={styles.specItem}>
                                    <i className="material-icons">usb</i>
                                    <span>USB Type-C for portable power (5A)</span>
                                </div>
                                <div className={styles.specItem}>
                                    <i className="material-icons">power</i>
                                    <span>Barrel jack for standard supplies (7A)</span>
                                </div>
                                <div className={styles.specItem}>
                                    <i className="material-icons">settings_input_component</i>
                                    <span>Screw terminal for custom powering (up to 20A)</span>
                                </div>
                                <div className={styles.specItem}>
                                    <i className="material-icons">bolt</i>
                                    <span>5-24V voltage range, up to 20A</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <i className="material-icons">power</i>
                            Top-down view of fovilight controller showing all three power input ports - USB-C, barrel jack, and screw terminal - with labels pointing to each
                        </div>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* LED strip connectors */}
            <RevealOnScroll variant="fadeUp">
            <section className={`${styles.sectionPadding} ${styles.sectionAlt}`}>
                <div className={styles.container}>
                    <div className={styles.twoColGrid}>
                        <div>
                            <h2 className={styles.sectionHeading}>Addressable & RGBW Support</h2>
                            <p className={styles.sectionSubtext}>
                                The controller supports both addressable LED strips (where each LED can be independently controlled)
                                and standard RGBW strips using dedicated connectors:
                            </p>
                            <br />
                            <div className={styles.specsList}>
                                <div className={styles.specItem}>
                                    <i className="material-icons">cable</i>
                                    <span>Industry standard 5.08 modular terminal block for addressable strips</span>
                                </div>
                                <div className={styles.specItem}>
                                    <i className="material-icons">settings_ethernet</i>
                                    <span>6-pin industry standard 5.08 modular terminal block for RGB/RGBW/White/CWWW strips</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <i className="material-icons">cable</i>
                            Close-up of fovilight LED output side - 5.08 modular terminal blocks for addressable and RGB/RGBW/White/CWWW strips
                        </div>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* AI & Scripting */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingGradient}`} style={{ textAlign: 'center' }}>
                        AI & Scripting Engine
                    </h2>
                    <p className={`${styles.sectionSubtext} ${styles.sectionSubtextCenter}`}>
                        Create stunning custom effects with natural language AI prompts or write your own scripts
                        using Lua scripting.
                    </p>
                    <div className={styles.twoColGridCards}>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <i className="material-icons">auto_awesome</i>
                            </div>
                            <h4 className={styles.cardTitle}>AI Effect Generator</h4>
                            <p className={styles.cardDesc}>
                                Describe the lighting effect you want in plain language and our AI converts it into a working
                                effect that runs directly on your fovilight. From &ldquo;warm sunrise wake-up&rdquo; to &ldquo;cyberpunk gaming
                                glow&rdquo; - if you can describe it, AI can create it.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <i className="material-icons">code</i>
                            </div>
                            <h4 className={styles.cardTitle}>Custom Scripting</h4>
                            <p className={styles.cardDesc}>
                                For advanced users, Lua gives you full control over LED behavior.
                                Create complex animations, reactive effects, and share them on the Effect Store marketplace
                                for others to enjoy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* Physical Characteristics */}
            <RevealOnScroll variant="fadeUp">
            <section className={`${styles.sectionPadding} ${styles.sectionAlt}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading} style={{ textAlign: 'center', marginBottom: '40px' }}>
                        Physical Characteristics
                    </h2>
                    <div className={styles.specsList}>
                        <div className={styles.specItem}>
                            <i className="material-icons">bolt</i>
                            <span>Voltage: 5-24V</span>
                        </div>
                        <div className={styles.specItem}>
                            <i className="material-icons">electric_meter</i>
                            <span>Current: up to 20A</span>
                        </div>
                        <div className={styles.specItem}>
                            <i className="material-icons">security</i>
                            <span>Over-voltage and over-current protection</span>
                        </div>
                        <div className={styles.specItem}>
                            <i className="material-icons">wifi</i>
                            <span>Wi-Fi and BLE connectivity</span>
                        </div>
                        <div className={styles.specItem}>
                            <i className="material-icons">hub</i>
                            <span>Local-first operation</span>
                        </div>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* On-the-go usage */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <div className={styles.twoColGrid}>
                        <div>
                            <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingGradient}`}>On-the-go use</h2>
                            <p className={styles.sectionSubtext}>
                                For portable setups, fovilight uses BLE for nearby control and setup without requiring Wi-Fi infrastructure.
                            </p>
                            <br />
                            <p className={styles.sectionSubtext}>
                                This keeps mobile usage simple while maintaining local-first behavior when internet is unavailable.
                            </p>
                        </div>
                        <div className={styles.imagePlaceholder} style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
                            <Image
                                src="/images/img/device_conenction_ble.png"
                                alt="Fovilight used on-the-go with phone connected over BLE for quick local control"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: 'cover' }}
                            />
                            {/**
                             * Placeholder (kept for reference)
                             *
                             * <div className={styles.imagePlaceholder}>
                             *     <i className="material-icons">bluetooth</i>
                             *     Fovilight used on-the-go with phone connected over BLE for quick local control
                             * </div>
                             */}
                        </div>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll variant="scaleUp">
            <section className={styles.ctaSection}>
                <div className={styles.ctaBox}>
                    <h2 className={styles.ctaHeading}>Ready to experience the future of LED control?</h2>
                    <Link href="/bundles" className={styles.ctaBtn}>Explore bundles</Link>
                </div>
            </section>
            </RevealOnScroll>
        </>
    );
}
