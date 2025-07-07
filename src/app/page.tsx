import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { EventsSection } from "@/components/events-section";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { ResourcesSection } from "@/components/resources-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <GallerySection />
      <EventsSection />
      <ResourcesSection />
      <ContactSection />
    </>
  );
}
