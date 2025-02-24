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
      <div className="flex flex-col gap-[80px] rounded-[58px] pt-[52px] pb-[52px] mb-[20px] text-black bg-white">
        <About />
        <Services />
        <Works />
      </div>
      <div className="pt-[56px] rounded-t-[58px] bg-gradient-to-t to-[rgba(255,255,255,0.07)] from-transparent">
        <Feedback />
        <Footer />
      </div>
    </Page>
  );
}
