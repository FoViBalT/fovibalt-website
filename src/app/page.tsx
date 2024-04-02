import Header from '../components/parts/Header'
import Hero from '../components/sections/Hero'
import QuoteSection from '../components/sections/QuoteSection'
import SectionStairs from '../components/sections/SectionStairs'
import TextTable from '../components/sections/TextTable'
import ImageTextSectionRatio2_3 from '../components/sections/ImageTextSectionRatio2_3'
import ImageTextSectionRatio1_1 from "../components/sections/ImageTextSectionRatio1_1";
import ImageListSectionRatio2_3 from "../components/sections/ImageListSectionRatio2_3";
import SetUpSection from "../components/sections/SetUpSection";
import ConnectorsSection from "../components/sections/ConnectorsSection";
import SlideShowSection from "../components/sections/SlideShowSection";

/*
Components:
Header
Hero section
Quote section
Section with radial gradient
Section with Text in grid (timer effect & Reliability) (Props: Heading text, Text in grid)
Button
Icon-button (Props: icon, color; Static: size, icon align)
Arrow-link
*/

export default function Home() {

  const TimerEffectContent = [
    {
      id: 1,
      heading: "wake up with natural alarm",
      text: "With timer effect you can make your fovilight gradually increase brightness of your lighting to help you wake up naturally"
    },
    {
      id: 1,
      heading: "plan auto turning off",
      text: "With fovilight you can schedule your light to automatically turn off while you are not home. Change effect so it would help you focus when you are working and relax when you are not"
    }
  ]

  const ReliabilityContent = [
    {
      id: 1,
      heading: "Over-current protection",
      text: "Nether fovilight nor your LED strip will be damaged if 50A will be applied to your foviloght power input"
    },
    {
      id: 2,
      heading: "Over-voltage protection",
      text: "Nether fovilight nor your LED strip will be damaged if 96V will be applied to your foviloght power input"
    },
    {
      id: 3,
      heading: "Power shortage",
      text: "In case power shortage happened fovilight restores all the saved data and works like nothing happened when power is reapplied again"
    },
    {
      id: 4,
      heading: "Incorrect connection",
      text: "In case you connected high voltage power supply and low voltage LED strip, no power will be provided to connected LED strip"
    }
  ]

  const AIandEffectStoreContent = [
    {
      id: 1,
      heading: "AI",
      text: "Describe your custom effect and with a help of AI foviapp will convert it to a working effect, that you can run"
    },
    {
      id: 2,
      heading: "Effect store",
      text: "Every fovibalt product user can create their own custom effect an publish it on our effect store for other users to use and enjoy it later"
    },
  ]

  const LEDStrips = [
    {
      LEDStripImg: '/images/LED-strips/sk6812-rgbw.png',
      LEDStripType: 'SK6812 RGBW'
    },
    {
      LEDStripImg: '/images/LED-strips/sk6812-rgb.png',
      LEDStripType: 'SK6812 RGB'
    },
    {
      LEDStripImg: '/images/LED-strips/ws2812-rgb.png',
      LEDStripType: 'WS2812 RGB'
    },
    {
      LEDStripImg: '/images/LED-strips/rgb-ww-cw.png',
      LEDStripType: 'RGB WW CW'
    },
    {
      LEDStripImg: '/images/LED-strips/rgbw.png',
      LEDStripType: 'RGBW'
    },
    {
      LEDStripImg: '/images/LED-strips/rgb.png',
      LEDStripType: 'RGB'
    },
    {
      LEDStripImg: '/images/LED-strips/ww-cw.png',
      LEDStripType: 'WW CW'
    },
    {
      LEDStripImg: '/images/LED-strips/ww.png',
      LEDStripType: 'WW'
    },
  ];

  return (
    <>
    <Header></Header>
    <main>
      <Hero></Hero>
      <QuoteSection text="Welcome to the world, full of light"></QuoteSection>
      <ImageTextSectionRatio2_3></ImageTextSectionRatio2_3>
      <SectionStairs LEDStrips={LEDStrips} ></SectionStairs>
      <ConnectorsSection></ConnectorsSection>
      <SetUpSection></SetUpSection>
      <TextTable title="Timer effect" tableContent={TimerEffectContent} numOfCols={2} colorful={false}></TextTable>
      <ImageListSectionRatio2_3></ImageListSectionRatio2_3>
      <TextTable title="Reliability" tableContent={ReliabilityContent} numOfCols={2} colorful={false}></TextTable>
      <TextTable tableContent={AIandEffectStoreContent} numOfCols={1} colorful={true}></TextTable>
      <SlideShowSection></SlideShowSection>
      <ImageTextSectionRatio1_1></ImageTextSectionRatio1_1>
    </main>
    </>
  )
}
