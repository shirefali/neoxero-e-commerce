const categoriesPics = [
  {
    title: "Puffers",
    src: "../public/puffers-category.png",
  },
  {
    title: "Bombers",
    src: "../public/bombers-category.png",
  },
  {
    title: "Lightweight jackets",
    src: null,
  },
  {
    title: "Gilets",
    src: "../public/gilets-category.png",
  },
  {
    title: "Coats",
    src: null,
  },
  {
    title: "Rainwear",
    src: "../public/rainwear-category.png",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-center font-medium text-2xl md:text-3xl mb-10">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-18">
          {categoriesPics.map((category) => (
            <div key={category.title} className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 lg:w-35 lg:h-35 rounded-full bg-gray-200 overflow-hidden mb-4">
                {category.src ? (
                  <img
                    src={category.src}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>
              <span className=" text-sm md:text-lg text-[#11111] text-center">
                {category.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
