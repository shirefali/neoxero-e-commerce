const Hero = () => {
  return (
    <section className="bg-[#FF6B6B] overflow-hidden px-4 relative">
      <div className="container max-w-[1152px] mx-auto flex flex-col items-center lg:flex-row">
        <div className="flex-1 flex flex-col justify-center py-12 lg:py-39">
          <h1 className="text-white font-bold text-4xl md:text-[64px] leading-tight tracking-[-1px]">
            Unveil Your Style,
            <br />
            Elevate Every Day
          </h1>
          <p className="text-white text-[18px] mt-6">
            Everyone needs a good winter jacket.
            <br />
            Find yours with our collection and more.
          </p>
          <button className="mt-6 w-[112.59px] h-[40px] flex items-center justify-center bg-white font-medium cursor-pointer">
            Shop Now
          </button>
        </div>

        <div className="flex-1 relative w-full aspect-[4/3]">
          <div className="absolute left-0 bottom-[-60%] w-[80%] aspect-square rounded-full bg-[#066176] -z-0"></div>

          <div className="absolute right-[5%] bottom-[5%] w-[50%] aspect-square border-6 border-[#066176] -z-0"></div>

          <div className="absolute flex items-end justify-center lg:justify-end left-20 overflow-hidden">
            <img
              src="/hero-img.png"
              alt="hero-image"
              className=" object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
