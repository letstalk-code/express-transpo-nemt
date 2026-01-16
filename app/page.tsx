import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSnapshot from "@/components/sections/ServicesSnapshot";
import HowItWorks from "@/components/sections/HowItWorks";
import WhoWeServe from "@/components/sections/WhoWeServe";
import InteractiveMap from "@/components/sections/InteractiveMap";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import PaymentOptions from "@/components/sections/PaymentOptions";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsSection />
      <ServicesSnapshot />
      <HowItWorks />
      <WhoWeServe />
      <InteractiveMap />
      <TestimonialCarousel />
      <PaymentOptions />
      <CTASection />
    </>
  );
}
