import { Navigation } from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import MonitoringSolutions from "@/components/MonitoringSolutions";
import { PricingOffer } from "@/components/PricingOffer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <MonitoringSolutions />
      <Features />
      {/* <Testimonials /> */}
      <PricingOffer />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
