// *** COMPONENTS
// ** SECTION COMPONENTS
import Herosection from "@/containers/home/components/herosection";
import RoadMap from "@/containers/home/components/roadmap";
import SafetyCards from "./components/safety-cards";
import Cartoon from "./components/cartoon";
import Ownroad from "./components/ownroad";
import SellAnything from "./components/sell-anything";
import ClientComment from "./components/client-comment";
import SellToAnyone from "./components/sell-to-anyone";
import SellAnywhere from "./components/sell-anywhere";
import Inspirations from "./components/inspirations";
import EarnedMoney from "./components/earned-money";
import StartSelling from "./components/start-selling";
// ** UI COMPONENTS

function HomePageContainer() {
  return (
    <main>
      <Herosection />
      <RoadMap />
      <SafetyCards />
      <Cartoon />
      <Ownroad />
      <SellAnything />
      <ClientComment
        backgroundColor="#ff90e8"
        clientImage="/client_max.png"
        imageHeight={567}
        imageWidth={560}
        clientImageSticker="/stickers/client_comment_sticker_1.svg"
        clientComment="I launched MaxPacks as an experimental side gig; but within 2 years those Procreate brushes were earning more than my 6-figure salary in CG. Leaving in favor of Gumroad enabled me to explore other aspects of my art, develop new hobbies, and finally prioritize my personal life."
        clientRole="Max Ulichney sells Procreate Brush Packs"
        clientLink="/"
        clientName="Max Ulichney"
      />
      <SellToAnyone />
      <ClientComment
        backgroundColor="#23a094"
        clientImage="/client_trendsvc.png"
        imageHeight={656}
        imageWidth={560}
        clientImageSticker="/stickers/client_comment_sticker_2.svg"
        clientComment="Originally, I took pre-orders for my Trend Reports on Gumroad. But I received... exactly $0. So I changed tactics: I made half of my report free, and the other half paid. Today, 99% of Trends.VC revenue is recurring in the form of annual and quarterly subscriptions."
        clientRole="Dru Riley sells business insights and expertise"
        clientLink="/"
        clientName="trendsvc"
      />
      <SellAnywhere />
      <Inspirations />
      <ClientComment
        backgroundColor="#ff90e8"
        clientImage="/client_ma.png"
        imageHeight={656}
        imageWidth={560}
        clientImageSticker="/stickers/client_comment_sticker_3.svg"
        clientComment="For years, I had a goal to develop ‘passive’ income streams, but struggled to make that a reality. Last year, I started selling informational products on Gumroad and since then have made $10k+ per month building products that I love."
        clientRole="Steph Smith sells content tutorials"
        clientLink="/"
        clientName="stephsmithio"
      />
      <EarnedMoney />
      <StartSelling />
    </main>
  );
}

export default HomePageContainer;
