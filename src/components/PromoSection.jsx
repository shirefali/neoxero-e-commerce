import { Play } from "lucide-react";

const PromoSection = () => {
  return (
    <section className="px-4">
      <div className="container max-w-[1200px] mx-auto py-20 text-center">
        {/* title */}
        <div>
          <p className="text-xm font-semibold uppercase text-[#1976d2] tracking-[1px] mb-2">
            Promotion
          </p>
          <h2 className="text-3xl md:text-[32px] font-bold mb-2">
            Winter Collections
          </h2>
          <p className="text-[#555] text-base mb-8">
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
            <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <Play className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
