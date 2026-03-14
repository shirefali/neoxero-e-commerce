import Footer from "./Footer";
import Navbar from "./Navbar";
import SaleSection from "./SaleSection";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <SaleSection />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
