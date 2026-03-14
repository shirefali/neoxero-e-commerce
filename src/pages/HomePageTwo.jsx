import ArticlesSection from "../components/ArticlesSection";
import CategoriesSection from "../components/CategoriesSection";
import CollectionsSection from "../components/CollectionsSection";
import Footer from "../components/Footer";
import HeroTwo from "../components/HeroTwo";
import LowPriceSection from "../components/LowPriceSection";
import Navbar from "../components/Navbar";
import NewsFeedSection from "../components/NewsFeedSection";
import OurServiceSection from "../components/OurServiceSection";
import PromoSection from "../components/PromoSection";
import SaleSection from "../components/SaleSection";
import TrendingBrandsSection from "../components/TrendingBrandsSection";

function HomePageTwo() {
  return (
    <>
      <SaleSection />
      <Navbar />
      <HeroTwo />
      <TrendingBrandsSection />
      <CategoriesSection />
      <CollectionsSection />
      <LowPriceSection />
      <PromoSection />
      <ArticlesSection />
      <NewsFeedSection />
      <OurServiceSection />
      <Footer />
    </>
  );
}

export default HomePageTwo;
