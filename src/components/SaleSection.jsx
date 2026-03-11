import { ArrowRight, X } from "lucide-react";

const SaleSection = () => {
  return (
    <section className="bg-[#FA7070] py-4 text-white">
      <div className="mx-auto flex items-center justify-between px-4">
        <div className="hidden md:block w-5" />

        <div className="flex-1 flex justify-center items-center gap-1 md:font-medium">
          30% off storewide -- Limited time! Shop Now
          <span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        <X className="w-5 h-5 cursor-pointer" />
      </div>
    </section>
  );
};

export default SaleSection;
