import { MoveRight } from "lucide-react";
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

        <div className="w-full md:w-1/2 p-8 lg:p-24 flex flex-col justify-center text-center md:text-left">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-semibold">
            Sale Up To 35% Off
          </span>
          <h2 className="text-4xl lg:text-6xl font-semibold text-gray-900 mt-4">
            HUNDREDS of <br /> New lower prices!
          </h2>
          <p className="text-gray-600 mt-6 text-xl">
            Hurry up!!! Winter is coming.
          </p>
          <Link className="mt-8 mx-auto md:mx-0 text-xl font-semibold flex items-center cursor-pointer underline">
            Shop Now
            <span className="ml-2 text-2xl">
              <MoveRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LowPriceSection;
