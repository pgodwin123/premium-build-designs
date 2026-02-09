import SplitHero from "@/components/home/SplitHero";
import StatsBar from "@/components/home/StatsBar";
import AlternatingServices from "@/components/home/AlternatingServices";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <SplitHero />
      <StatsBar />
      <AlternatingServices />
      <TestimonialCarousel />
      <CTABanner />
    </>
  );
}
