import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TrustBar from "@/components/home/TrustBar";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProjectsPreview />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
