import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useFavourites } from "../context/FavouritesContext";

const FavouritesPage = () => {
  const { items, remove } = useFavourites();
  const { addItem, openDrawer } = useCart();

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Favourites
          </h1>
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            ← Continue shopping
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <Heart
              className="w-16 h-16 text-gray-300 mx-auto mb-4"
              strokeWidth={1}
            />
            <p className="text-gray-600 text-lg mb-4">
              You have no favourites yet.
            </p>
            <Link
              to="/"
              className="inline-block py-2.5 px-6 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition-colors"
            >
              Discover products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {items.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden flex flex-col h-full border border-gray-100 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-gray-300/40"
              >
                <div className="relative w-full h-[280px] bg-white overflow-hidden group flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-full w-auto h-auto object-contain p-4"
                  />
                  <button
                    type="button"
                    onClick={() => remove(product.id)}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 text-red-600 hover:bg-white cursor-pointer shadow-sm"
                    aria-label="Remove from favourites"
                  >
                    <Heart
                      className="w-5 h-5"
                      strokeWidth={1.5}
                      fill="currentColor"
                    />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        addItem(product, 1);
                        openDrawer();
                      }}
                      className="w-full py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-black transition-colors cursor-pointer"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1 min-h-[100px]">
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

export default FavouritesPage;
