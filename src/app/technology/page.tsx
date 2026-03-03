import Link from 'next/link';
import styles from '../shared.module.css';
import RevealOnScroll from '@/components/effects/RevealOnScroll';

export default function TechnologyPage() {
    const ledStripTypes = [
        'SK6812 RGBW', 'SK6812 RGB', 'WS2812 RGB', 'WS2815 RGB',
        'WS2811', 'APA102', 'RGB WW CW', 'RGBW', 'RGB', 'WW CW', 'WW', 'CW',
    ];

    return (
        <>
            {/* Hero */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.pageHero}>
                <h1 className={styles.pageTitle}>Technology</h1>
                <p className={styles.pageSubtitle}>
                    Discover the innovations behind fovilight – from LedID™ auto-detection to AI-powered lighting effects.
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
                                LedID is our proprietary technology that enables the fovilight controller to automatically identify
                                connected LED strips. It detects the communication protocol, strip length, number of LEDs, and
                                fault conditions — all within seconds of connection.
                            </p>
                            <br />
                            <p className={styles.sectionSubtext}>
                                This eliminates the need to manually look up strip specifications, configure protocols, or worry
                                about compatibility. Simply connect your LED strip and fovilight handles everything automatically.
                            </p>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <i className="material-icons">memory</i>
                            Diagram showing LedID detection flow – LED strip plugged in, controller analyzing signal, screen showing detected parameters (type: WS2812, length: 5m, LEDs: 150)
                        </div>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* Multi-protocol support */}
            <RevealOnScroll variant="fadeUp">
            <section className={`${styles.sectionPadding} ${styles.sectionAlt}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading}>Multi-Protocol LED Strip Support</h2>
                    <p className={`${styles.sectionSubtext} ${styles.sectionSubtextCenter}`}>
                        Fovilight communicates with different LED strips from different manufacturers using
                        a wide range of protocols. No more vendor lock-in.
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
                                    <span>5–12V voltage range, up to 100W delivery</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <i className="material-icons">power</i>
                            Top-down view of fovilight controller showing all three power input ports – USB-C, barrel jack, and screw terminal – with labels pointing to each
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
                                    <span>MR-30 connector for addressable strips</span>
                                </div>
                                <div className={styles.specItem}>
                                    <i className="material-icons">settings_ethernet</i>
                                    <span>6-pin connector for RGB WW CW strips</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <i className="material-icons">cable</i>
                            Close-up of fovilight LED output side – MR-30 connector on left for addressable strips, 6-pin connector on right for RGBW strips, with labels
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
                        using our easy-to-learn scripting language.
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
                                glow&rdquo; – if you can describe it, AI can create it.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <i className="material-icons">code</i>
                            </div>
                            <h4 className={styles.cardTitle}>Custom Scripting</h4>
                            <p className={styles.cardDesc}>
                                For advanced users, our scripting language gives you full control over LED behavior.
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
                            <span>Voltage: 5–12V</span>
                        </div>
                        <div className={styles.specItem}>
                            <i className="material-icons">electric_meter</i>
                            <span>Current: up to 20A</span>
                        </div>
                        <div className={styles.specItem}>
                            <i className="material-icons">battery_charging_full</i>
                            <span>Power delivery: up to 100W</span>
                        </div>
                        <div className={styles.specItem}>
                            <i className="material-icons">security</i>
                            <span>Over-current protection</span>
                        </div>
                        <div className={styles.specItem}>
                            <i className="material-icons">shield</i>
                            <span>Over-voltage protection</span>
                        </div>
                        <div className={styles.specItem}>
                            <i className="material-icons">wifi</i>
                            <span>Wi-Fi connectivity</span>
                        </div>
                        <div className={styles.specItem}>
                            <i className="material-icons">portable_wifi_off</i>
                            <span>Hotspot mode for on-the-go use</span>
                        </div>
                        <div className={styles.specItem}>
                            <i className="material-icons">sensors</i>
                            <span>Sensor expansion port</span>
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
