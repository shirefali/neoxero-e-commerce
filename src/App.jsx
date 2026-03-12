import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LowPriceSection from "./components/LowPriceSection";
import Navbar from "./components/Nabar";
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
      <LowPriceSection />
      <PromoSection />
      <OurServiceSection />
      <Footer />
    </>
  );
}

export default App;
