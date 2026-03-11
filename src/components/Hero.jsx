const Hero = () => {
  return (
    <section className="min-h-[40vh] bg-[#FF6B6B] overflow-hidden relative">
      <div className="container mx-auto px-4 flex flex-col items-center lg:flex-row min-h-[40vh]">
        <div className="flex-1 flex flex-col justify-center py-12 lg:py-0">
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

        <div className="flex-1 relative w-full lg-mt-0 min-h-[60vh] lg:min-h-[70vh]">
          <div className="absolute right-0 bottom-[-100px] w-120 h-120 rounded-full bg-[#066176]"></div>
          <div className="absolute right-0 bottom-50 sm:bottom-30 md:right-[-70px] w-80 h-70 md:w-90 md:h-90 border-8 border-[#066176] z-0"></div>
          <div className="absolute inset-0 z-3 flex items-end justify-center md:right-[-300px] pl-8 lg:pl-30">
            <img src="../public/hero-img.png" alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
