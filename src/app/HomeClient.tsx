'use client';

import Link from 'next/link';
import styles from './page.module.css';
import ControllerRotation from '@/components/effects/ControllerRotation';
import RevealOnScroll from '@/components/effects/RevealOnScroll';
import AnimatedCounter from '@/components/effects/AnimatedCounter';
import TiltCard from '@/components/effects/TiltCard';
import TypewriterText from '@/components/effects/TypewriterText';

export default function HomeClient() {
    return (
        <div style={{ position: 'relative' }}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.heroContent}>
                        <RevealOnScroll variant="fadeUp">
                            <h1 className={styles.heroH1}>Get out of darkness</h1>
                        </RevealOnScroll>
                        <RevealOnScroll variant="fadeUp" delay={100}>
                            <p className={styles.heroSubtitle}>
                                with the only universal<br />
                                <TypewriterText
                                    words={['LED controller', 'smart lighting hub', 'lighting solution', 'AI-powered controller']}
                                    className={styles.heroTypewriter}
                                />
                            </p>
                        </RevealOnScroll>
                        <RevealOnScroll variant="fadeUp" delay={200}>
                            <div className={styles.heroFeatures}>
                                <span className={styles.featureCheck}>
                                    <i className="material-icons">check</i> LedID™ tech
                                </span>
                                <span className={styles.featureCheck}>
                                    <i className="material-icons">check</i> AI and scripting support
                                </span>
                                <span className={styles.featureCheck}>
                                    <i className="material-icons">check</i> Length up to 20m*
                                </span>
                                <span className={styles.featureCheck}>
                                    <i className="material-icons">check</i> 3 step first setup
                                </span>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll variant="fadeUp" delay={300}>
                            <Link href="/bundles" className={styles.heroCta}>Join wait list</Link>
                        </RevealOnScroll>
                    </div>
                    <RevealOnScroll variant="scaleUp" delay={200}>
                        <div className={styles.heroImageWrapper}>
                            <ControllerRotation className={styles.controllerCanvas} />
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ===== STATS BAR ===== */}
            <section className={styles.statsBar}>
                <RevealOnScroll variant="fadeUp">
                    <div className={styles.statsInner}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>
                                <AnimatedCounter end={20} suffix="m*" />
                            </span>
                            <span className={styles.statLabel}>Max LED length</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>
                                <AnimatedCounter end={3} />
                            </span>
                            <span className={styles.statLabel}>Step setup</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>
                                <AnimatedCounter end={20} suffix="+" />
                            </span>
                            <span className={styles.statLabel}>Different LED types supported</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>Smart</span>
                            <span className={styles.statLabel}>Intelligent LED strip protection</span>
                        </div>
                    </div>
                    <p className={styles.statsNote}>*20m is achievable only under specific strip, wiring, and power conditions.</p>
                </RevealOnScroll>
            </section>

            {/* ===== QUOTE ===== */}
            <section className={styles.quoteSection}>
                <RevealOnScroll variant="scaleUp">
                    <h2 className={styles.quoteText}>
                        Transform your lighting with unmatched precision and style
                    </h2>
                </RevealOnScroll>
            </section>

            {/* ===== PRODUCT INFO (BLE + Description) ===== */}
            <section className={styles.productInfo}>
                <div className={styles.productInfoInner}>
                    <RevealOnScroll variant="fadeLeft">
                        <div className={styles.qrImageWrapper}>
                            <div className={styles.imagePlaceholder}>
                                <i className="material-icons">bluetooth_connected</i>
                                Fovilight device shown in BLE pairing mode with nearby phone discovering it in the app device list
                            </div>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll variant="fadeRight" delay={150}>
                        <div className={styles.productText}>
                            <h3>Fovilight is <strong>powerful</strong>, universal led strip controller that can handle any task you throw at it!</h3>
                            <p>
                                It can also be used as current LED strip controller replacement, giving second birth for old lighting.
                                Or it can be used with you already purchased LED strips, controller supports vast amount of them.
                                Full list can be found <Link href="/technology">here</Link>.
                            </p>
                            <p>
                                The controller automatically detects LED strip type, length, and protocol using our proprietary LedID™ technology.
                                Pair over BLE in the app, then run local-first without requiring internet access.
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ===== EXPLORE WHY ===== */}
            <section className={styles.exploreSection}>
                <RevealOnScroll variant="fadeIn">
                    <h2 className={styles.exploreHeading}>
                        Explore why Fovilight is the best choice for your space
                    </h2>
                </RevealOnScroll>
            </section>

            {/* ===== LedID™ ===== */}
            <section className={styles.featureRow}>
                <div className={styles.featureRowInner}>
                    <RevealOnScroll variant="fadeLeft">
                        <div className={styles.featureContent}>
                            <h3 className={styles.featureLabel}>
                                <span className={styles.featureLabelGradient}>LedID</span>
                                <span className={styles.featureTrademark}>™</span>
                            </h3>
                            <p className={styles.featureDesc}>
                                LedID technology allows addressable LED strip auto identification, length calculation and fault detection
                                which simplifies installation and decreases error probability!
                            </p>
                            <p className={styles.featureSmall}>No need to lookup LED strip type, and no confusion!</p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll variant="fadeRight" delay={150}>
                        <div className={styles.featureImage}>
                            <div className={styles.imagePlaceholder}>
                                <i className="material-icons">memory</i>
                                Close-up of fovilight controller with LED strip auto-detecting – screen/indicator showing detected strip type and length
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ===== AI EFFECTS ===== */}
            <section className={styles.featureRow}>
                <div className={`${styles.featureRowInner} ${styles.featureRowReverse}`}>
                    <RevealOnScroll variant="fadeRight">
                        <div className={styles.featureContent}>
                            <h3 className={styles.featureLabel}>AI effects</h3>
                            <p className={styles.featureDesc}>
                                From wake up accents to powerful themes, AI adjusts to your lifestyle, ensuring lighting that suits every moment.
                            </p>
                            <p className={styles.featureSmall}>
                                Describe your custom effect and with AI will convert it to a working effect, that you can run
                            </p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll variant="fadeLeft" delay={150}>
                        <div className={styles.featureImage}>
                            <div className={styles.imagePlaceholder}>
                                <i className="material-icons">auto_awesome</i>
                                Mobile app AI chat interface – user typing lighting effect description, colorful preview of generated effect below
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ===== EFFECT STORE ===== */}
            <section className={styles.featureRow}>
                <div className={styles.featureRowInner}>
                    <RevealOnScroll variant="fadeLeft">
                        <div className={styles.featureContent}>
                            <h3 className={`${styles.featureLabel} ${styles.featureLabelGradient}`}>Effect store</h3>
                            <p className={styles.featureDesc}>
                                Create your own effects using Lua or download user-made ones from the built-in store.
                            </p>
                            <p className={styles.featureSmall}>
                                Share your creations with the community and discover thousands of unique lighting effects.
                            </p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll variant="fadeRight" delay={150}>
                        <div className={styles.featureImage}>
                            <div className={styles.imagePlaceholder}>
                                <i className="material-icons">store</i>
                                Effect store marketplace grid – showing various community-made lighting effect thumbnails with ratings and download counts
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ===== FEATURES HIGHLIGHT GRID ===== */}
            <section className={styles.featuresHighlight}>
                <div className={styles.featuresHighlightInner}>
                    <RevealOnScroll variant="fadeUp">
                        <h2 className={styles.featuresHighlightHeading}>Everything you need, built in</h2>
                    </RevealOnScroll>
                    <div className={styles.featuresGrid}>
                        {[
                            { icon: 'smart_toy', title: 'AI Integration', desc: 'Automate your lighting by telling the AI what lighting you want to see.', color: 'rgba(89,126,255,0.4)' },
                            { icon: 'timer', title: 'Timer Effect', desc: 'Time all of your lights daily. Powered only with the Morning mode.', color: 'rgba(155,89,255,0.4)' },
                            { icon: 'bluetooth_searching', title: '3 Step Setup', desc: '1) Connect. 2) Select your device and connect to Wi-Fi. 3) Enjoy.', color: 'rgba(255,88,220,0.4)' },
                            { icon: 'cable', title: 'Lighting Connectors', desc: 'Connect any type of led strips to one controller using our various connectors.', color: 'rgba(89,126,255,0.4)' },
                            { icon: 'power', title: 'Power Connectors', desc: 'Use USB-C, barrel jack, or screw terminal to power your setup based on your installation needs.', color: 'rgba(155,89,255,0.4)' },
                            { icon: 'group', title: 'Grouping & Scenes', desc: 'Group controllers together for simultaneous control. Create scenes for the perfect atmosphere.', color: 'rgba(255,88,220,0.4)' },
                        ].map((feat, i) => (
                            <RevealOnScroll key={feat.title} variant="fadeUp" delay={i * 80}>
                                <TiltCard className={styles.featureCard} glowColor={feat.color}>
                                    <div className={styles.featureCardIcon}>
                                        <i className="material-icons">{feat.icon}</i>
                                    </div>
                                    <h4 className={styles.featureCardTitle}>{feat.title}</h4>
                                    <p className={styles.featureCardDesc}>{feat.desc}</p>
                                </TiltCard>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== BUNDLES ===== */}
            <section className={styles.bundlesSection}>
                <RevealOnScroll variant="fadeUp">
                    <h2 className={styles.bundlesHeading}>Find which setup suits you more</h2>
                </RevealOnScroll>
                <div className={styles.bundlesGrid}>
                    {[
                        {
                            title: 'Replacement kit',
                            icon: 'swap_horiz',
                            imgDesc: 'Fovilight controller unit alone – clean product photo on dark surface',
                            features: ['Fovilight controller', 'Different clamps to connect LED strip'],
                        },
                        {
                            title: 'Starter kit',
                            icon: 'inventory_2',
                            imgDesc: 'Starter bundle box – controller, 12v WS2815 5m LED strip, 12v power supply, and clamps neatly arranged',
                            features: ['Fovilight controller', '12v ws2815 5m LED strip', '12v power supply', 'Different clamps to connect LED strip'],
                        },
                        {
                            title: 'Pro kit',
                            icon: 'star',
                            imgDesc: 'Pro bundle box – controller, 10m APA102 12v LED strip, 12v power supply, premium clamps, and accessories',
                            features: ['Fovilight controller', '10m Apa102 12v LED strip', '12v power supply', 'Different clamps to connect LED strip'],
                        },
                    ].map((bundle, i) => (
                        <RevealOnScroll key={bundle.title} variant="fadeUp" delay={i * 120} className={styles.bundleReveal}>
                            <TiltCard className={styles.bundleCard} glowColor="rgba(89,126,255,0.3)">
                                <h3 className={styles.bundleTitle}>{bundle.title}</h3>
                                <div className={styles.bundleImageWrapper}>
                                    <div className={styles.imagePlaceholder}>
                                        <i className="material-icons">{bundle.icon}</i>
                                        {bundle.imgDesc}
                                    </div>
                                </div>
                                <ul className={styles.bundleFeatures}>
                                    {bundle.features.map((f) => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>
                                <Link href="/bundles" className={styles.bundleExplore}>Explore</Link>
                            </TiltCard>
                        </RevealOnScroll>
                    ))}
                </div>
            </section>

            {/* ===== RELIABILITY ===== */}
            <section className={styles.reliabilitySection}>
                <div className={styles.reliabilityInner}>
                    <RevealOnScroll variant="fadeUp">
                        <h2 className={styles.reliabilityHeading}>Reliability on another level</h2>
                        <p className={styles.reliabilitySubtext}>
                            Fovilight is designed for dependable, local-first operation. Whether your network is stable or
                            temporarily unavailable, your saved settings stay protected and your lighting keeps working.
                        </p>
                    </RevealOnScroll>
                    <div className={styles.reliabilityGrid}>
                        {[
                            { title: 'Over-current protection', desc: 'If the LED output is accidentally shorted, both the controller and the LED strip are actively protected.', icon: 'bolt' },
                            { title: 'Over-voltage protection', desc: 'If input voltage exceeds the required range, protection logic prevents damage to the controller and connected strip.', icon: 'electric_bolt' },
                            { title: 'Power shortage', desc: 'In case power shortage happened fovilight restores all saved data and works like nothing happened when power is reapplied again.', icon: 'power_off' },
                            { title: 'Incorrect connection', desc: 'In case you connected high voltage power supply and low voltage LED strip, no power will be provided to connected LED strip.', icon: 'shield' },
                        ].map((item, i) => (
                            <RevealOnScroll key={item.title} variant="fadeUp" delay={i * 100}>
                                <TiltCard className={styles.reliabilityCard} glowColor="rgba(173,198,255,0.2)">
                                    <div className={styles.reliabilityIcon}>
                                        <i className="material-icons">{item.icon}</i>
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </TiltCard>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA BANNER ===== */}
            <section className={styles.ctaBanner}>
                <RevealOnScroll variant="scaleUp">
                    <div className={styles.ctaBannerInner}>
                        <h2 className={styles.ctaBannerHeading}>Fulfil your dreams with fovilight</h2>
                        <Link href="/bundles" className={styles.ctaBannerBtn}>
                            <span>Check out bundles</span>
                            <i className="material-icons" style={{ marginLeft: '8px', fontSize: '20px' }}>arrow_forward</i>
                        </Link>
                    </div>
                </RevealOnScroll>
            </section>
        </div>
    );
}
