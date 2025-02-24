import {
  About,
  Feedback,
  Footer,
  Header,
  Hero,
  Services,
  Works,
} from "@/components/shared";
import { Page } from "@/components/ui";

export default function Home() {
  return (
    <Page>
      <Header />
      <Hero />
      <div className="flex flex-col gap-[60px] lg:gap-[80px] rounded-[28px] lg:rounded-[58px] pt-[22px] pb-[38px] lg:pt-[52px] lg:pb-[52px] mb-[20px] text-black bg-white animate-show">
        <About />
        <Services />
        <Works />
      </div>
      <div className="pt-[56px] rounded-t-[28px] lg:rounded-t-[58px] bg-gradient-to-t to-[rgba(255,255,255,0.07)] from-transparent animate-show">
        <Feedback />
        <Footer />
      </div>
    </Page>
  );
}
