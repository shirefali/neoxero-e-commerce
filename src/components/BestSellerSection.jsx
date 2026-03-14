import { Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useFavourites } from "../context/FavouritesContext";
import { useProducts } from "../context/ProductsContext";

const BestSellerSection = () => {
  const { products, loading, error, refetch } = useProducts();
  const { addItem, openDrawer } = useCart();
  const { toggle: toggleFavourite, isFavourite } = useFavourites();

  const displayProducts = products.slice(0, 8);

  if (error) {
    return (
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">{error}</p>
          <button
            type="button"
            onClick={refetch}
            className="mt-4 text-black underline font-medium"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
          Best Seller
        </h2>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex flex-col">
                <div className="bg-gray-100 rounded-lg aspect-square animate-pulse" />
                <div className="mt-3 h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                <div className="mt-2 h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
              </div>
            ))}
          </div>
        ) : displayProducts.length === 0 ? (
          <p className="text-gray-600 text-center py-8">
            No products available.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {displayProducts.map((product, index) => {
              const price =
                typeof product.price === "number"
                  ? product.price
                  : parseFloat(product.price) || 0;
              const showDiscount = index === 0;
              const originalPrice = showDiscount ? price / 0.5 : null;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden flex flex-col transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative w-full aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full w-auto h-auto object-contain p-4 transition-transform duration-500 group-hover:scale-105 "
                    />
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                      HOT
                    </span>
                    {showDiscount && (
                      <span className="absolute top-2 left-14 bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                        -50%
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavourite(product);
                      }}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 text-gray-800 hover:bg-white border border-gray-200 shadow-sm transition-all cursor-pointer"
                    >
                      <Heart
                        className="w-4 h-4"
                        strokeWidth={1.5}
                        fill={isFavourite(product.id) ? "currentColor" : "none"}
                      />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          addItem(product, 1);
                          openDrawer();
                        }}
                        className="w-full py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-black transition-colors cursor-pointer"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col flex-1 border-t border-gray-100">
                    <h3 className="text-black font-medium text-sm line-clamp-2 min-h-[2.5rem] leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-black font-bold text-sm mt-2">
                      {originalPrice != null ? (
                        <>
                          <span className="text-gray-400 line-through font-normal mr-1">
                            ${originalPrice.toFixed(2)}
                          </span>
                          ${price.toFixed(2)}
                        </>
                      ) : (
                        `$${price.toFixed(2)}`
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSellerSection;
