import type { Metadata } from 'next';
import ABTestHome from '@/components/ABTestHome';

export const metadata: Metadata = {
  title: 'Fovilight - The Only Universal LED Strip Controller | LedID™ Auto-Detection & AI Effects',
  description:
    'Fovilight supports WS2812, WS2815, SK6812, APA102 & 20+ LED types with LedID™ auto-detection. AI effects, Lua scripting, local-first, Home Assistant compatible. No soldering. Govee & Philips Hue Lightstrip alternative. EU shipping.',
  alternates: { canonical: 'https://fovibalt.com' },
  openGraph: {
    title: 'Fovilight - The Only Universal LED Strip Controller',
    description:
      'WS2812 / WS2815 / SK6812 / APA102 & 20+ LED types. LedID™ auto-detection. AI effects. Local-first. Home Assistant compatible. Govee & Hue Lightstrip alternative. EU shipping.',
    url: 'https://fovibalt.com',
  },
};

/* JSON-LD structured data for the home page */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://fovibalt.com/#organization',
      name: 'Fovibalt',
      url: 'https://fovibalt.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fovibalt.com/images/og-cover.png',
      },
      sameAs: [],
      description:
        'Fovibalt builds Fovilight — the only universal LED strip controller with LedID™ auto-detection, AI effects, and local-first operation.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://fovibalt.com/#website',
      url: 'https://fovibalt.com',
      name: 'Fovibalt',
      publisher: { '@id': 'https://fovibalt.com/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://fovibalt.com/#webpage',
      url: 'https://fovibalt.com',
      name: 'Fovilight - The Only Universal LED Strip Controller',
      isPartOf: { '@id': 'https://fovibalt.com/#website' },
      about: { '@id': 'https://fovibalt.com/#organization' },
      description:
        'Fovilight supports WS2812, WS2815, SK6812, APA102 & 20+ LED types with LedID™ auto-detection. AI effects, local-first, Home Assistant compatible. Govee & Philips Hue Lightstrip alternative.',
      inLanguage: 'en-US',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '[data-speakable]'],
      },
      mentions: [
        { '@type': 'Thing', name: 'LedID™', description: 'Proprietary auto-detection technology that identifies LED strip type, protocol, length, and fault conditions automatically.' },
        { '@type': 'Thing', name: 'WS2812B', url: 'https://fovibalt.com/technology' },
        { '@type': 'Thing', name: 'WS2815', url: 'https://fovibalt.com/technology' },
        { '@type': 'Thing', name: 'SK6812', url: 'https://fovibalt.com/technology' },
        { '@type': 'Thing', name: 'APA102', url: 'https://fovibalt.com/technology' },
        { '@type': 'Thing', name: 'Lua scripting', url: 'https://fovibalt.com/technology' },
        { '@type': 'Thing', name: 'Bluetooth Low Energy', alternateName: 'BLE' },
        { '@type': 'Thing', name: 'local-first software', description: 'Software that works without internet, storing data and logic on the device itself.' },
        { '@type': 'Thing', name: 'Home Assistant', description: 'Open-source home automation platform. Fovilight is compatible with Home Assistant via local API.' },
      ],
    },
    {
      '@type': 'Product',
      '@id': 'https://fovibalt.com/#product',
      name: 'Fovilight Universal LED Strip Controller',
      alternateName: ['Fovilight', 'LedID controller', 'universal LED controller'],
      description:
        'The only universal LED strip controller supporting 20+ LED types (WS2812B, WS2815, SK6812, APA102, HD107S and more). Features LedID™ auto-detection, AI effects, Lua scripting, over-current and over-voltage protection, BLE pairing, and local-first control. Works without internet. Compatible with Home Assistant. No soldering required.',
      brand: { '@type': 'Brand', name: 'Fovibalt' },
      manufacturer: { '@id': 'https://fovibalt.com/#organization' },
      category: 'Smart LED Controllers',
      url: 'https://fovibalt.com/bundles',
      image: 'https://fovibalt.com/images/og-cover.png',
      keywords: 'universal LED controller, WS2812B controller, WS2815 controller, SK6812 controller, APA102 controller, LED strip auto detection, local-first smart lighting, Home Assistant LED, Govee alternative, Philips Hue Lightstrip alternative, WLED alternative',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/PreOrder',
        offerCount: 3,
        seller: { '@id': 'https://fovibalt.com/#organization' },
      },
    },
    {
      '@type': 'ItemList',
      name: 'Fovilight Product Bundles',
      url: 'https://fovibalt.com/bundles',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Fovilight Replacement Kit',
          description: 'Fovilight controller and connectors. Replace your existing LED controller without changing your LED strip.',
          url: 'https://fovibalt.com/bundles',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Fovilight Starter Kit',
          description: 'Fovilight controller, 5m WS2815 12V LED strip, 12V power supply, and connectors. Everything you need to get started.',
          url: 'https://fovibalt.com/bundles',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Fovilight Pro Kit',
          description: 'Fovilight controller, 10m WS2805 12V LED strip, 12V power supply, and premium connectors. For larger installations.',
          url: 'https://fovibalt.com/bundles',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What LED strip types does Fovilight support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fovilight supports 20+ types including WS2811, WS2812, WS2812B, WS2813, WS2815, SK6812, SK6812 RGBW, APA102, APA102C, HD107S, standard RGB, RGBW, and warm/cool white strips.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is LedID™ technology?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LedID™ automatically detects the connected LED strip type, communication protocol, length, and fault conditions — no manual configuration needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Fovilight require internet to work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Fovilight operates local-first, meaning it works without internet. Pair over BLE, connect to Wi-Fi optionally, and your lights work even if your router goes offline.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I set up Fovilight?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Setup takes 3 steps: 1) Connect your LED strip and power supply. 2) Open the app and select your Fovilight over BLE; connect to Wi-Fi. 3) Enjoy full control.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I create custom lighting effects?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You can describe effects in plain language using AI, or write your own with Lua scripting. You can also download community-made effects from the built-in Effect Store.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Fovilight a good Govee alternative?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Unlike Govee, Fovilight works with any LED strip — not just proprietary ones. It also operates local-first without a cloud account, supports 20+ LED types, and requires no soldering.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Fovilight compare to Philips Hue Lightstrip?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fovilight supports any LED strip (WS2812B, SK6812, APA102, and more) while Philips Hue only works with its own proprietary strips. Fovilight is also local-first with no Hue Bridge required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Fovilight compatible with Home Assistant?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Fovilight\'s local-first Wi-Fi API makes it compatible with Home Assistant. It does not require cloud access, making it ideal for local home automation setups.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Fovilight ship to EU countries?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Fovilight ships to EU countries including Germany, France, Italy, Netherlands, Spain, and others. Visit the bundles page for availability.',
          },
        },
        {
          '@type': 'Question',
          name: 'What power options does Fovilight support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fovilight supports USB Type-C (5A), barrel jack (7A), and screw terminal (up to 20A) with a 5-24V voltage range. Use a power bank for portable setups.',
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ABTestHome />
    </>
  );
}

