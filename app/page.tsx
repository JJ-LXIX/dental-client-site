import FaqSection from "@/components/FAQ Section/FaqSection";
import HeroSection from "@/components/Hero Section/HeroSection2";
import TeamSection from "@/components/Team Section/TeamSection";
import TestimonialSection from "@/components/Testimonial Section/TestimonialSection";
import WhyUsSection from "@/components/Why Us Section/WhyUsSection";
import WorkSection from "@/components/Work Section/WorkSection";
import ContactFormSection from "@/components/Contact Form Section/ContactFormSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroSection />
      <WhyUsSection />
      <WorkSection />
      <FaqSection />
      <TeamSection />
      <TestimonialSection />
      <ContactFormSection />
    </main>
  );
}
