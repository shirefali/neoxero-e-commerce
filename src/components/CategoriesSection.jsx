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
    const product = products.find((p) => p.category === categoryName);
    return product?.image ?? null;
  };

  if (categoriesError) {
    return (
      <section className="py-16 px-4">
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
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-center font-medium text-2xl md:text-4xl mb-10">
          Shop by Categories
        </h2>
        {categoriesLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-35 lg:h-35 rounded-full bg-gray-200 animate-pulse" />
                <div className="mt-4 h-4 w-20 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-18">
            {categories.map((category) => {
              const imageSrc = getImageForCategory(category);
              const slug = categoryNameToSlug(category);
              return (
                <Link
                  key={category}
                  to={`/category/${slug}`}
                  className="flex flex-col items-center hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 lg:w-35 lg:h-35 rounded-full bg-gray-200 overflow-hidden mb-4">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={formatCategoryName(category)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200" />
                    )}
                  </div>
                  <span className="text-sm md:text-lg text-[#111111] text-center">
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
