const NewsFeedSection = () => {
  const newsFeedPics = [
    {
      id: 1,
      src: null,
    },
    { id: 2, src: "/newsfeed2.png" },
    {
      id: 3,
      src: "/newsfeed1.png",
    },
    { id: 4, src: null },
  ];

  return (
    <section className="bg-white px-4">
      <div className="container max-w-[1200px] mx-auto py-20">
        <div className="text-center mb-2">
          <p className="text-xs font-semibold uppercase text-gray-600 tracking-[1px] mb-2">
            Newsfeed
          </p>
          <h2 className="text-3xl md:text-[32px] font-bold mb-2">Instagram</h2>
          <p className="text-gray-600 text-base mb-6">
            Follow us on social media for more discount & promotions
          </p>
          <p className="text-gray-600 text-base ">@VisioCreate_official</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full py-6">
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
