import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Nabar";
import SaleSection from "./components/SaleSection";
import TrendingBrandsSection from "./components/TrendingBrandsSection";

function App() {
  return (
    <>
      <SaleSection />
      <Navbar />
      <Hero />
      <TrendingBrandsSection />
    </>
  );
}

export default App;
