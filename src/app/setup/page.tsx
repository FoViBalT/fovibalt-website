import Link from 'next/link';
import Image from 'next/image';
import styles from '../shared.module.css';
import RevealOnScroll from '@/components/effects/RevealOnScroll';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3-Step Setup Guide – Connect, Pair over BLE, Enjoy',
  description:
    'Set up Fovilight in 3 easy steps: connect your LED strip, pair over BLE in the app and connect to Wi-Fi, then enjoy full smart lighting control. No technical knowledge required.',
  alternates: { canonical: 'https://fovibalt.com/setup' },
  openGraph: {
    title: 'Fovilight 3-Step Setup Guide',
    description: 'Connect your LED strip, pair over BLE, enjoy. No technical knowledge needed. Works with USB-C, barrel jack, or screw terminal power.',
    url: 'https://fovibalt.com/setup',
  },
};

export default function SetupPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Setup', url: '/setup' }]} />
            {/* Hero */}
            <RevealOnScroll variant="fadeUp">
            <section className={styles.pageHero}>
                <h1 className={styles.pageTitle}>3 Step Setup</h1>
                <p className={styles.pageSubtitle}>
                    Get your fovilight up and running in minutes. No technical knowledge required – just connect, select device, and enjoy.
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
                                <h3 className={styles.stepTitle}>Connect</h3>
                                <p className={styles.stepDesc}>
                                    Connect your LED strip to the fovilight controller using the appropriate connector –
                                    industry standard 5.08 modular terminal block for addressable strips or the 6-pin
                                    industry standard 5.08 modular terminal block for RGB/RGBW/White/CWWW strips. Then connect your
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
                                <h3 className={styles.stepTitle}>Select device and connect to Wi-Fi</h3>
                                <p className={styles.stepDesc}>
                                    Open the fovilight mobile app, choose your controller from the list of available BLE devices,
                                    and start setup instantly.
                                </p>
                                <br />
                                <p className={styles.stepDesc}>
                                    After selecting the controller, choose your Wi-Fi network in the app and complete the connection.
                                </p>
                            </div>
                            <div className={styles.imagePlaceholder} style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
                                <Image
                                    src="/images/img/device_conenction_ble.png"
                                    alt="Phone app showing available fovilight devices over BLE with one selected for Wi-Fi provisioning"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{ objectFit: 'cover' }}
                                />
                                {/**
                                 * Placeholder (kept for reference)
                                 *
                                 * <div className={styles.imagePlaceholder}>
                                 *     <i className="material-icons">bluetooth_searching</i>
                                 *     Phone app showing available fovilight devices over BLE with one selected for Wi-Fi provisioning
                                 * </div>
                                 */}
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className={styles.step}>
                            <div>
                                <div className={styles.stepNumber}>03</div>
                                <h3 className={styles.stepTitle}>Enjoy</h3>
                                <p className={styles.stepDesc}>
                                    Enter your home Wi-Fi network name and password in the app. The fovilight controller
                                    connects to your network and is ready to use!
                                </p>
                                <br />
                                <p className={styles.stepDesc}>
                                    Once connected you can control your light localy, or optionaly from anywhere in the world.
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
                            Side view of fovilight showing both LED output connectors – 5.08 modular terminal blocks for addressable and RGB/RGBW/White/CWWW strips
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
