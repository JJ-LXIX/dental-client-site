import ContactSection from "@/components/Contact Section/ContactSection";
import FaqSection from "@/components/FAQ Section/FaqSection";
import HeroSection2 from "@/components/Hero Section/HeroSection2";
import TeamSection from "@/components/Team Section/TeamSection";
import TestimonialSection from "@/components/Testimonial Section/TestimonialSection";
import WhyUsSection from "@/components/Why Us Section/WhyUsSection";
import WorkSection from "@/components/Work Section/WorkSection";
import ContactFormSection from "@/components/Contact Form Section/ContactFormSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroSection2 />
      <WhyUsSection />
      <WorkSection />
      <FaqSection />
      <TeamSection />
      <TestimonialSection />
      <ContactFormSection />
      <ContactSection />
    </main>
  );
}
