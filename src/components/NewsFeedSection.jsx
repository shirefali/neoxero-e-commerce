const NewsFeedSection = () => {
  const newsFeedPics = [
    {
      id: 1,
      src: null,
    },
    { id: 2, src: "../public/newsfeed2.png" },
    {
      id: 3,
      src: "../public/newsfeed1.png",
    },
    { id: 4, src: null },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase text-gray-600 mb-2">
            Newsfeed
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Instagram</h2>
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            Follow us on social media for more discount & promotions
          </p>
          <p className="text-gray-600 text-lg md:text-xl">
            @VisioCreate_official
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 lg:gap-20 w-full">
          {newsFeedPics.map((pic) => (
            <div
              key={pic.id}
              className="aspect-square rounded-xl bg-gray-100 overflow-hidden"
            >
              {pic.src ? (
                <img
                  src={pic.src}
                  alt="newsfeed-picture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsFeedSection;
