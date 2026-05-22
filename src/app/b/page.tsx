/**
 * B-variant of the home page.
 *
 * Visitors assigned to variant "b" are silently rewritten here by middleware.
 * The URL in their browser still shows "/" — they never see "/b".
 *
 * Customise this page to test a different layout, copy, CTAs, etc.
 * The original A variant lives in src/app/page.tsx.
 */
import Header from '../../components/parts/Header';
import Hero from '../../components/sections/Hero';
import QuoteSection from '../../components/sections/QuoteSection';
import SectionStairs from '../../components/sections/SectionStairs';
import TextTable from '../../components/sections/TextTable';
import ImageTextSectionRatio2_3 from '../../components/sections/ImageTextSectionRatio2_3';
import ImageTextSectionRatio1_1 from '../../components/sections/ImageTextSectionRatio1_1';
import ImageListSectionRatio2_3 from '../../components/sections/ImageListSectionRatio2_3';
import SetUpSection from '../../components/sections/SetUpSection';
import ConnectorsSection from '../../components/sections/ConnectorsSection';
import SlideShowSection from '../../components/sections/SlideShowSection';
import DifferentEffectsSection from '../../components/sections/DifferentEffectsSection';

export default function HomeB() {
  const TimerEffectContent = [
    {
      id: 1,
      heading: 'wake up with natural alarm',
      text: 'With timer effect you can make your fovilight gradually increase brightness of your lighting to help you wake up naturally',
    },
    {
      id: 2,
      heading: 'plan auto turning off',
      text: 'With fovilight you can schedule your light to automatically turn off while you are not home. Change effect so it would help you focus when you are working and relax when you are not',
    },
  ];

  const ReliabilityContent = [
    {
      id: 1,
      heading: 'Over-current protection',
      text: 'Neither fovilight nor your LED strip will be damaged if 50 A is applied to your fovilight power input',
    },
    {
      id: 2,
      heading: 'Over-voltage protection',
      text: 'Neither fovilight nor your LED strip will be damaged if 96 V is applied to your fovilight power input',
    },
    {
      id: 3,
      heading: 'Power shortage',
      text: 'In case a power shortage happens, fovilight restores all saved data and works like nothing happened when power is reapplied',
    },
    {
      id: 4,
      heading: 'Incorrect connection',
      text: 'In case you connect a high-voltage power supply to a low-voltage LED strip, no power will be provided to the connected LED strip',
    },
  ];

  const AIandEffectStoreContent = [
    {
      id: 1,
      heading: 'AI',
      text: 'Describe your custom effect and with the help of AI, foviapp will convert it to a working effect that you can run immediately',
    },
    {
      id: 2,
      heading: 'Effect store',
      text: 'Every fovibalt product user can create their own custom effect and publish it on our effect store for other users to use and enjoy',
    },
  ];

  const LEDStrips = [
    { LEDStripImg: '/images/LED-strips/sk6812-rgbw.png', LEDStripType: 'SK6812 RGBW' },
    { LEDStripImg: '/images/LED-strips/sk6812-rgb.png',  LEDStripType: 'SK6812 RGB'  },
    { LEDStripImg: '/images/LED-strips/ws2812-rgb.png',  LEDStripType: 'WS2812 RGB'  },
    { LEDStripImg: '/images/LED-strips/rgb-ww-cw.png',   LEDStripType: 'RGB WW CW'   },
    { LEDStripImg: '/images/LED-strips/rgbw.png',        LEDStripType: 'RGBW'        },
    { LEDStripImg: '/images/LED-strips/rgb.png',         LEDStripType: 'RGB'         },
    { LEDStripImg: '/images/LED-strips/ww-cw.png',       LEDStripType: 'WW CW'       },
    { LEDStripImg: '/images/LED-strips/ww.png',          LEDStripType: 'WW'          },
  ];

  return (
    <>
      <Header />
      <main>
        {/* ── B variant: swap the quote copy to test engagement ── */}
        <Hero />
        <QuoteSection text="Step into a world of brilliant light" />
        <ImageTextSectionRatio2_3 />
        <SectionStairs LEDStrips={LEDStrips} />
        <ConnectorsSection />
        <SetUpSection />
        <DifferentEffectsSection />
        <TextTable title="Timer effect" tableContent={TimerEffectContent} numOfCols={2} colorful={false} />
        <ImageListSectionRatio2_3 />
        <TextTable title="Reliability" tableContent={ReliabilityContent} numOfCols={2} colorful={false} />
        <TextTable tableContent={AIandEffectStoreContent} numOfCols={1} colorful={true} />
        <SlideShowSection />
        <ImageTextSectionRatio1_1 />
      </main>
    </>
  );
}
