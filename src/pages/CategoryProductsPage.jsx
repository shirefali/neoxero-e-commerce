import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useFavourites } from "../context/FavouritesContext";
import { slugToCategoryName } from "../utils/categorySlug";

const API_BASE = "https://fakestoreapi.com/products";

const formatCategoryName = (name) => {
  if (!name || typeof name !== "string") return name;
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const CategoryProductsPage = () => {
  const { categorySlug } = useParams();
  const categoryName = slugToCategoryName(categorySlug ?? "");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem, openDrawer } = useCart();
  const { toggle: toggleFavourite, isFavourite } = useFavourites();

  useEffect(() => {
    if (!categoryName) {
      setError("Invalid category");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    const url = `${API_BASE}/category/${encodeURIComponent(categoryName)}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => setProducts(Array.isArray(data) ? data : []))
      .catch((err) => {
        setError(err.message);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, [categoryName]);

  if (error) {
    return (
      <div className="min-h-screen bg-white pt-24 py-16 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">{error}</p>
          <Link
            to="/"
            className="mt-4 inline-block text-black underline font-medium"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto py-12 px-4">
        <Link
          to="/"
          className="inline-block text-gray-600 hover:text-gray-900 mb-6 text-sm font-medium"
        >
          ← Back to home
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          {formatCategoryName(categoryName)}
        </h1>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-100 rounded-2xl h-[280px] mb-4" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/4" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <p className="text-gray-600">No products in this category.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-none border border-gray-100 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-gray-300/40 hover:-translate-y-1"
              >
                <div className="relative w-full h-[280px] bg-white overflow-hidden group flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-full w-auto h-auto object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 bg-white text-gray-900 text-xs font-bold px-2.5 py-1 rounded-md border border-gray-200 shadow-sm">
                    NEW
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavourite(product);
                    }}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-transparent text-gray-800 hover:bg-white/90 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 cursor-pointer"
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      className="w-5 h-5"
                      strokeWidth={1.5}
                      fill={isFavourite(product.id) ? "currentColor" : "none"}
                    />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(product, 1);
                        openDrawer();
                      }}
                      className="w-full py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-black transition-colors cursor-pointer"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1 min-h-[120px]">
                  <div className="flex gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-gray-800 flex-shrink-0"
                        strokeWidth={1.5}
                        fill="none"
                      />
                    ))}
                  </div>
                  <h2 className="text-gray-900 font-medium text-sm line-clamp-2 min-h-[2.5rem] overflow-hidden text-ellipsis mb-1 leading-snug">
                    {product.title}
                  </h2>
                  <p className="text-gray-900 font-bold text-base mt-auto">
                    $
                    {typeof product.price === "number"
                      ? product.price.toFixed(2)
                      : product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProductsPage;
