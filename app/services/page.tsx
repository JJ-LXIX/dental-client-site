import ContactSection from "@/components/Contact Section/ContactSection";
import TestimonialSection from "@/components/Testimonial Section/TestimonialSection";

export default function Home() {
  return (
    <main className="min-h-screen pt-28 md:pt-36">
      <h2 className="text-4xl font-medium md:text-5xl lg:text-5xl text-center mx-auto max-w-[80%] lg:max-w-[90%]">
        Keep Your Smile Clean & Shine
      </h2>
      <h3 className="pt-2 md:pt-6 text-center text-xl md:text-2xl lg:text-3xl max-w-[90%] mx-auto lg:text-zinc-800 lg:max-w-[60%]">
        Our experienced team at Dentica is dedicated to providing high-quality
        service and personalized care to each of our clients.
      </h3>
      {/* TODO: Add services here */}
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
