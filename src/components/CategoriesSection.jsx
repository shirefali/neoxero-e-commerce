import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { categoryNameToSlug } from "../utils/categorySlug";

const formatCategoryName = (name) => {
  if (!name || typeof name !== "string") return name;
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const CategoriesSection = () => {
  const {
    categories,
    categoriesLoading,
    categoriesError,
    refetchCategories,
    products,
  } = useProducts();

  const getImageForCategory = (categoryName) => {
    if (!categoryName || !products.length) return null;
    const normalized = String(categoryName).toLowerCase().trim();
    const product = products.find(
      (p) =>
        p.category && String(p.category).toLowerCase().trim() === normalized
    );
    return product?.image ?? null;
  };

  if (categoriesError) {
    return (
      <section className="py-20">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">{categoriesError}</p>
          <button
            type="button"
            onClick={refetchCategories}
            className="mt-4 text-black underline font-medium"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="container max-w-[1200px] mx-auto">
        <h2 className="text-center font-bold text-2xl md:text-[28px] mb-10">
          Shop by Categories
        </h2>
        {categoriesLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full bg-gray-200 animate-pulse" />
                <div className="mt-4 h-4 w-20 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-18">
            {Array.from(
              { length: 6 },
              (_, i) => categories[i % categories.length]
            ).map((category, i) => {
              const imageSrc = getImageForCategory(category);
              const slug = categoryNameToSlug(category);
              return (
                <Link
                  key={`${category}-${i}`}
                  to={`/category/${slug}`}
                  className="flex flex-col items-center hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <div className="w-24 h-24  md:w-35 md:h-35 rounded-full bg-gray-200 overflow-hidden mb-4 flex-shrink-0 relative">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={formatCategoryName(category)}
                        className="w-full h-full object-contain object-center block"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 w-full h-full bg-gray-200" />
                    )}
                  </div>
                  <span className="text-sm text-black text-center font-medium">
                    {formatCategoryName(category)}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;
