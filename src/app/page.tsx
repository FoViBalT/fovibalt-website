import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Fovilight - The Only Universal LED Strip Controller | LedID™ Auto-Detection & AI Effects',
  description:
    'Fovilight supports 20+ LED strip types with LedID™ auto-detection, AI-powered effects, Lua scripting, BLE pairing, and local-first control. 3-step setup. Works with WS2812, SK6812, APA102, RGBW, and more.',
  alternates: { canonical: 'https://fovibalt.com' },
  openGraph: {
    title: 'Fovilight - The Only Universal LED Strip Controller',
    description:
      '20+ LED types supported. LedID™ auto-detection. AI effects. Lua scripting. BLE setup. Local-first.',
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
        'Fovilight supports 20+ LED strip types with LedID™ auto-detection, AI effects, Lua scripting, BLE setup, and local-first control.',
      inLanguage: 'en-US',
    },
    {
      '@type': 'Product',
      '@id': 'https://fovibalt.com/#product',
      name: 'Fovilight Universal LED Strip Controller',
      description:
        'The only universal LED strip controller supporting 20+ LED types. Features LedID™ auto-detection, AI effects, Lua scripting, over-current and over-voltage protection, BLE pairing, and local-first control.',
      brand: { '@type': 'Brand', name: 'Fovibalt' },
      category: 'LED Controllers',
      url: 'https://fovibalt.com/bundles',
      image: 'https://fovibalt.com/images/og-cover.png',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/PreOrder',
        offerCount: 3,
      },
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
      <HomeClient />
    </>
  );
}

