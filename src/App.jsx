import "./App.css";
import CartDrawer from "./components/CartDrawer";
import Layout from "./components/Layout";
import { CartProvider } from "./context/CartContext";
import { FavouritesProvider } from "./context/FavouritesContext";
import { ProductsProvider } from "./context/ProductsContext";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import ContactPage from "./pages/ContactPage";
import FavouritesPage from "./pages/FavouritesPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <FavouritesProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/category/:categorySlug"
                element={<CategoryProductsPage />}
              />
              <Route path="/favourites" element={<FavouritesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
          </Routes>
          <CartDrawer />
        </FavouritesProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
