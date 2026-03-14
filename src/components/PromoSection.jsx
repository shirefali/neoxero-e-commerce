import { Play } from "lucide-react";

const PromoSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        {/* title */}
        <div>
          <p className="text-sm font-semibold uppercase text-blue-500 mb-2">
            Promotion
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Winter Collections
          </h2>
          <p className="text-gray-600 text-xl md:text-lg mb-8">
            Introducing the new winter jackets.
          </p>
        </div>
        {/* picture  */}
        <div className="relative rounded-2xl w-full overflow-hidden max-h-[500px]">
          <img
            src="/promotion.png"
            alt="promo-image"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <Play className="w-7 h-7 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
