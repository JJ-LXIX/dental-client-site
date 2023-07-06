import FaqSection from "@/components/FAQ Section/FaqSection";
import HeroSection from "@/components/Hero Section/HeroSection";
import WhyUsSection from "@/components/Why Us Section/WhyUsSection";
import WorkSection from "@/components/Work Section/WorkSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyUsSection />
      <WorkSection />
      <FaqSection />
    </main>
  );
}
