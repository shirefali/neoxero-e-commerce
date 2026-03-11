const TrendingBrandsSection = () => {
  const brands = Array(5).fill("logoipsum");

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-center font-medium text-2xl text-black mb-8">
          Trending Brands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-8">
          {brands.map((brand, index) => (
            <h3
              key={index}
              className="text-gray-400 font-bold uppercase text-2xl md:text-3xl text-center"
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
