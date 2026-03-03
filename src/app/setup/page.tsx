import Link from 'next/link';
import styles from '../shared.module.css';
import RevealOnScroll from '@/components/effects/RevealOnScroll';

export default function SetupPage() {
    return (
        <>
            {/* Hero */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.pageHero}>
                <h1 className={styles.pageTitle}>3 Step Setup</h1>
                <p className={styles.pageSubtitle}>
                    Get your fovilight up and running in minutes. No technical knowledge required – just connect, scan, and enjoy.
                </p>
            </section>
            </RevealOnScroll>

            {/* Steps */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <div className={styles.stepsGrid}>
                        {/* Step 1 */}
                        <div className={styles.step}>
                            <div>
                                <div className={styles.stepNumber}>01</div>
                                <h3 className={styles.stepTitle}>Connect LED strip and power</h3>
                                <p className={styles.stepDesc}>
                                    Connect your LED strip to the fovilight controller using the appropriate connector –
                                    MR-30 for addressable strips or the 6-pin connector for RGBW strips. Then connect your
                                    power supply via USB-C, barrel jack, or screw terminal.
                                </p>
                                <br />
                                <p className={styles.stepDesc}>
                                    The LedID™ technology automatically detects the strip type, protocol, and length.
                                    No configuration needed!
                                </p>
                            </div>
                            <div className={styles.imagePlaceholder}>
                                <i className="material-icons">cable</i>
                                Hands connecting LED strip cable to fovilight controller – power supply plugged in on the other side, LED strip starting to glow softly
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className={`${styles.step} ${styles.stepReverse}`}>
                            <div>
                                <div className={styles.stepNumber}>02</div>
                                <h3 className={styles.stepTitle}>Scan QR-code on fovilight</h3>
                                <p className={styles.stepDesc}>
                                    Each fovilight has a unique QR code printed on it. Open the Fovilight mobile app and scan
                                    the QR code to instantly pair with your controller.
                                </p>
                                <br />
                                <p className={styles.stepDesc}>
                                    The QR code contains the device identifier and connection details. You can scan multiple
                                    controllers to add them all to your app at once.
                                </p>
                            </div>
                            <div className={styles.imagePlaceholder}>
                                <i className="material-icons">qr_code_scanner</i>
                                Phone camera scanning QR code on fovilight device – QR code shows fovibalt.com, device name, date, and MAC address
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className={styles.step}>
                            <div>
                                <div className={styles.stepNumber}>03</div>
                                <h3 className={styles.stepTitle}>Connect to home Wi-Fi</h3>
                                <p className={styles.stepDesc}>
                                    Enter your home Wi-Fi network name and password in the app. The fovilight controller
                                    connects to your network and is ready to use!
                                </p>
                                <br />
                                <p className={styles.stepDesc}>
                                    Once connected, you can control your lighting from anywhere in the world through the app
                                    or web interface. Enjoy powerful, intelligent lighting!
                                </p>
                            </div>
                            <div className={styles.imagePlaceholder}>
                                <i className="material-icons">wifi</i>
                                Mobile app Wi-Fi setup screen – showing SSID input field, password field, and &ldquo;Connect&rdquo; button with fovilight devices listed below
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            <div className={styles.divider}></div>

            {/* Versatile Power */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingGradient}`} style={{ textAlign: 'center', marginBottom: '50px' }}>
                        Versatile power input connection
                    </h2>
                    <div className={styles.twoColGrid}>
                        <div className={styles.imagePlaceholder}>
                            <i className="material-icons">power</i>
                            Annotated diagram of fovilight power inputs – screw terminal on top labeled &ldquo;Screw interface for custom powering&rdquo;, barrel jack on left labeled &ldquo;Barrel jack for affordable power supplies&rdquo;, USB-C on right labeled &ldquo;USB type-c for portable power supplies&rdquo;
                        </div>
                        <div>
                            <h3 className={styles.sectionHeading}>Three ways to power</h3>
                            <p className={styles.sectionSubtext}>
                                Whether you&apos;re using a power bank on the go, a standard barrel jack adapter at home,
                                or a high-power screw terminal setup for professional installations – fovilight has you covered.
                            </p>
                            <br />
                            <div className={styles.specsList}>
                                <div className={styles.specItem}>
                                    <i className="material-icons">usb</i>
                                    <span>USB Type-C – up to 5A, portable</span>
                                </div>
                                <div className={styles.specItem}>
                                    <i className="material-icons">power</i>
                                    <span>Barrel Jack – up to 7A, affordable</span>
                                </div>
                                <div className={styles.specItem}>
                                    <i className="material-icons">settings_input_component</i>
                                    <span>Screw Terminal – up to 20A, custom</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* LED strip support */}
            <RevealOnScroll variant="fadeUp">
            <section className={`${styles.sectionPadding} ${styles.sectionAlt}`}>
                <div className={styles.container}>
                    <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingGradient}`} style={{ textAlign: 'center', marginBottom: '50px' }}>
                        Addressable LED strip and RGBW led strip support
                    </h2>
                    <div className={`${styles.twoColGrid} ${styles.twoColGridReverse}`}>
                        <div>
                            <p className={styles.sectionSubtext}>
                                Connect both individually addressable LED strips (like WS2812, SK6812) where each LED can show
                                a different color, and standard RGBW/RGB strips where all LEDs show the same color.
                            </p>
                            <br />
                            <div className={styles.specsList}>
                                <div className={styles.specItem}>
                                    <i className="material-icons">cable</i>
                                    <span>MR-30 connector for addressable LED strip</span>
                                </div>
                                <div className={styles.specItem}>
                                    <i className="material-icons">settings_ethernet</i>
                                    <span>6 pin connector for RGB WW CW strips</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <i className="material-icons">cable</i>
                            Side view of fovilight showing both LED output connectors – MR-30 three-pin connector labeled for addressable strips, 6-pin header labeled for RGBW strips
                        </div>
                    </div>
                </div>
            </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll variant="scaleUp">
            <section className={styles.ctaSection}>
                <div className={styles.ctaBox}>
                    <h2 className={styles.ctaHeading}>Ready to set it up?</h2>
                    <Link href="/bundles" className={styles.ctaBtn}>Get your fovilight</Link>
                </div>
            </section>
            </RevealOnScroll>
        </>
    );
}
