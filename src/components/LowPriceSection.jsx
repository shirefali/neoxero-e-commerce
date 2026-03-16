import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const LowPriceSection = () => {
  return (
    <section className=" my-16 bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 ">
          <img
            src="/pants.png"
            alt="pants-image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 md:px-15 py-8 lg-py-0 flex flex-col justify-center text-center md:text-left">
          <span className="text-[#1976d2] font-semibold tracking-[1px] uppercase text-xs text-semibold">
            Sale Up To 35% Off
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4 leading-11">
            HUNDREDS of <br /> New lower prices!
          </h2>
          <p className="text-gray-600 text-base">
            Hurry up!!! Winter is coming.
          </p>
          <Link className="mt-8 mx-auto md:mx-0 text-base font-semibold flex items-center cursor-pointer underline">
            Shop Now
            <span className="ml-1 text-2xl">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LowPriceSection;
