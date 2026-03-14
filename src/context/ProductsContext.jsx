import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const PRODUCTS_URL = "https://fakestoreapi.com/products";
const CATEGORIES_URL = "https://fakestoreapi.com/products/categories";

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categoriesError, setCategoriesError] = useState(null);

  const fetchProducts = useCallback(() => {
    setLoading(true);
    setError(null);
    fetch(PRODUCTS_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        setError(err.message);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const fetchCategories = useCallback(() => {
    setCategoriesLoading(true);
    setCategoriesError(null);
    fetch(CATEGORIES_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then((data) => {
        setCategories(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        setCategoriesError(err.message);
        setCategories([]);
      })
      .finally(() => setCategoriesLoading(false));
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const value = {
    products,
    loading,
    error,
    refetch: fetchProducts,
    categories,
    categoriesLoading,
    categoriesError,
    refetchCategories: fetchCategories,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}
