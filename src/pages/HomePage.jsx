import ArticlesSection from "../components/ArticlesSection";
import CategoriesSection from "../components/CategoriesSection";
import CollectionsSection from "../components/CollectionsSection";
import Hero from "../components/Hero";
import JustInSection from "../components/JustInSection";
import LowPriceSection from "../components/LowPriceSection";
import NewsFeedSection from "../components/NewsFeedSection";
import OurServiceSection from "../components/OurServiceSection";
import PromoSection from "../components/PromoSection";
import TrendingBrandsSection from "../components/TrendingBrandsSection";

function HomePage() {
  return (
    <>
      <Hero />
      <TrendingBrandsSection />
      <JustInSection />
      <CategoriesSection />
      <CollectionsSection />
      <LowPriceSection />
      <PromoSection />
      <ArticlesSection />
      <NewsFeedSection />
      <OurServiceSection />
    </>
  );
}

export default HomePage;
