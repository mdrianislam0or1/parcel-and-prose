import ExploreSection from "@/components/UI/HomePage/HeroSection/ExploreSection";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import LatestProduct from "@/components/UI/LatestProduct/LatestProduct";

export default function page() {
  return (
    <>
      <HeroSection />
      <LatestProduct />
      <ExploreSection />
    </>
  );
}
