import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCart } from "../context/CartContext";
import { useFavourites } from "../context/FavouritesContext";
import { useProducts } from "../context/ProductsContext";

const JustInSection = () => {
  const { products, loading, error, refetch } = useProducts();
  const { addItem, openDrawer } = useCart();
  const { toggle: toggleFavourite, isFavourite } = useFavourites();
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const swiperRef = useRef(null);

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
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Just In
          </h2>
          {!loading && products.length > 0 && pageCount > 0 && (
            <>
              {/* Mobile: arrows only */}
              <div className="flex md:hidden justify-end items-center gap-2">
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slidePrev()}
                  disabled={activePage === 0}
                  className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer shadow-sm"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slideNext()}
                  disabled={activePage >= pageCount - 1}
                  className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer shadow-sm"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>
              {/* Desktop: dots only */}
              <div className="hidden md:flex justify-end items-center gap-2">
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      const swiper = swiperRef.current;
                      if (!swiper) return;
                      const group =
                        typeof swiper.params.slidesPerGroup === "number"
                          ? swiper.params.slidesPerGroup
                          : 1;
                      const slideIndex = Math.min(
                        i * group,
                        products.length - 1
                      );
                      swiper.slideTo(slideIndex);
                    }}
                    className={`w-2 h-2 rounded-full border transition-colors cursor-pointer ${
                      i === activePage
                        ? "bg-gray-900 border-gray-900"
                        : "bg-transparent border-gray-300 hover:border-gray-400"
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {loading ? (
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] md:w-[calc(33.333%-12px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-12px)]"
              >
                <div className="bg-gray-100 rounded-xl aspect-square animate-pulse" />
                <div className="mt-3 h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                <div className="mt-2 h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <p className="text-gray-600 text-center py-8">
            No products available.
          </p>
        ) : (
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 2 },
              768: { slidesPerView: 2.5, slidesPerGroup: 2 },
              1024: { slidesPerView: 3.5, slidesPerGroup: 3 },
              1280: { slidesPerView: 4.5, slidesPerGroup: 4 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              const group =
                typeof swiper.params.slidesPerGroup === "number"
                  ? swiper.params.slidesPerGroup
                  : 1;
              setPageCount(Math.ceil(products.length / group));
            }}
            onSlideChange={(swiper) => {
              const group =
                typeof swiper.params.slidesPerGroup === "number"
                  ? swiper.params.slidesPerGroup
                  : 1;
              const totalPages = Math.ceil(products.length / group);
              const page = Math.round(swiper.activeIndex / group);
              setActivePage(Math.min(Math.max(0, page), totalPages - 1));
            }}
            onBreakpointChange={(swiper) => {
              const group =
                typeof swiper.params.slidesPerGroup === "number"
                  ? swiper.params.slidesPerGroup
                  : 1;
              const totalPages = Math.ceil(products.length / group);
              setPageCount(totalPages);
              const page = Math.round(swiper.activeIndex / group);
              setActivePage(Math.min(Math.max(0, page), totalPages - 1));
            }}
            className="overflow-visible"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-none transition-all duration-300 ease-out hover:shadow-lg hover:shadow-gray-300/40 hover:-translate-y-1 cursor-pointer border border-gray-100">
                  <div className="relative w-full h-[280px] bg-white overflow-hidden group cursor-pointer flex items-center justify-center">
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
                      className="absolute top-3 right-3 p-1.5 rounded-full bg-transparent text-gray-800 hover:bg-white/90 hover:scale-110 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 cursor-pointer"
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
                        className="w-full py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 cursor-pointer"
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
                    <h3 className="text-gray-900 font-medium text-sm line-clamp-2 min-h-[2.5rem] overflow-hidden text-ellipsis mb-1 leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-gray-900 font-bold text-base mt-auto">
                      $
                      {typeof product.price === "number"
                        ? product.price.toFixed(2)
                        : product.price}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default JustInSection;
