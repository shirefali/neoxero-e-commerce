const TrendingBrandsSection = () => {
  const brands = Array(5).fill("logoipsum");

  return (
    <section className="bg-white py-10 px-4">
      <div className="container max-w-[1200px] mx-auto">
        <h2 className="text-center font-semibold text-black mb-6">
          Trending Brands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-6 items-center gap-8 md:gap-34 px-10">
          {brands.map((brand, index) => (
            <h3
              key={index}
              className="text-gray-400 font-bold uppercase text-2xl md:text-[20px] text-center"
            >
              {brand}
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingBrandsSection;
