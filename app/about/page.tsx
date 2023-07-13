import ContactFormSection from "@/components/Contact Form Section/ContactFormSection";
import ContactSection from "@/components/Contact Section/ContactSection";
import TestimonialSection from "@/components/Testimonial Section/TestimonialSection";

export default function Home() {
  return (
    <main className="min-h-screen pt-28 md:pt-36 bg-black">
      <h2 className="text-white text-4xl font-medium md:text-5xl lg:text-5xl text-center mx-auto max-w-[80%] lg:max-w-[90%]">
        About Us
      </h2>
      {/* TODO: add about us section */}
      <div className="min-h-screen text-white flex items-center justify-center">
        Content to be added based on you!
      </div>
      <TestimonialSection />
      <ContactFormSection />
      <ContactSection />
    </main>
  );
}
