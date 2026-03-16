import { Heart, Star } from "lucide-react";

const ProductCard = ({
  product,
  toggleFavourite,
  isFavourite,
  addItem,
  openDrawer,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-none transition-all duration-300 ease-out hover:shadow-lg hover:shadow-gray-300/40 hover:-translate-y-1 cursor-pointer border border-gray-100">
      <div className="relative w-full h-[280px] bg-white overflow-hidden group cursor-pointer flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-w-full max-h-full w-auto h-auto object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-110 mb-3"
        />
        <span className="absolute top-3 left-3 bg-white text-[11px] font-semibold px-2 py-1 rounded-md border border-gray-200 shadow-sm">
          NEW
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavourite(product);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-transparent flex items-center justify-center hover:bg-white/90 hover:scale-110 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 cursor-pointer"
          aria-label="Add to wishlist"
        >
          <Heart
            className="w-4 h-4"
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
            className="w-full py-3 text-white text-[13px] font-medium rounded-md bg-black hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1 min-h-[120px]">
        <div className="flex gap-1 mb-1.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className="w-3 h-3 flex-shrink-0"
              strokeWidth={1.5}
              fill="none"
            />
          ))}
        </div>
        <h3 className="font-medium text-sm line-clamp-2 min-h-[2.5rem] overflow-hidden text-ellipsis mb-1 leading-snug">
          {product.title}
        </h3>
        <p className="font-semibold text-sm ">
          $
          {typeof product.price === "number"
            ? product.price.toFixed(2)
            : product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
