const Hero = () => {
  return (
    <section className="bg-[#FF6B6B] overflow-hidden relative">
      <div className="container mx-auto px-4 flex flex-col items-center lg:flex-row">
        <div className="flex-1 flex flex-col justify-center py-12 lg:py-12">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            Unveil Your Style,
            <br />
            Elevate Every Day
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl mt-6 max-w-xl">
            Everyone needs a good winter jacket.
            <br />
            Find yours with our collection and more.
          </p>
          <button className="mt-8 w-fit px-8 py-3 bg-white font-medium cursor-pointer">
            Shop Now
          </button>
        </div>

        <div className="flex-1 relative w-full aspect-[4/3] lg:aspect-[1/1] xl:aspect-[4/3]">
          <div className="absolute left-[15%] bottom-[-20%] w-[70%] aspect-square rounded-full bg-[#066176] -z-0"></div>

          <div className="absolute right-[5%] bottom-[15%] w-[50%] aspect-square border-8 border-[#066176] -z-0"></div>

          <div className="absolute inset-0 flex items-end justify-center lg:justify-end">
            <img
              src="/hero-img.png"
              alt="hero-image"
              className="h-full w-auto object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
