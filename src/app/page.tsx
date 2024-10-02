import Header from "../components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import Shop from '@/components/Shop/Shop'
import AboutUs from '@/components/AboutUs/AboutUs'
import ContactUs from '@/components/ContactUs/ContactUs'
import {NextUIProvider} from "@nextui-org/system";
export default function Home() {
  return (
    <div>
      <NextUIProvider>
        <Header />
        <HeroSection />
        <Shop />
        <AboutUs />
        <ContactUs />
       {/* <Members />
        <Research />
        <Articles />
        <Footer /> */}
      </NextUIProvider>
    </div>
  );
}