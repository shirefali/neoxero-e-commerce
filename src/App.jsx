import "./App.css";
import ArticlesSection from "./components/ArticlesSection";
import CategoriesSection from "./components/CategoriesSection";
import CollectionsSection from "./components/CollectionsSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LowPriceSection from "./components/LowPriceSection";
import Navbar from "./components/Nabar";
import NewsFeedSection from "./components/NewsFeedSection";
import OurServiceSection from "./components/OurServiceSection";
import PromoSection from "./components/PromoSection";
import SaleSection from "./components/SaleSection";
import TrendingBrandsSection from "./components/TrendingBrandsSection";

function App() {
  return (
    <>
      <SaleSection />
      <Navbar />
      <Hero />
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

export default App;
