import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "November Outfits",
    bgClass: "bg-gradient-to-t from-gray-500 via-gray-200 to-gray-transparent",
    src: null,
  },
  {
    title: "Cashmere Set",
    bgClass: "bg-gradient-to-t from-gray-500 via-gray-200 to-gray-transparent",
    src: "/collection-1.png",
  },
  {
    title: "The New Nordic",
    bgClass: "bg-gradient-to-t from-gray-500 via-gray-200 to-gray-transparent",
    src: "/collection-2.png",
  },
  {
    title: "The Leather",
    bgClass: "bg-gradient-to-t from-gray-500 via-gray-200 to-gray-transparent",
    src: null,
  },
];

const CollectionsSection = () => {
  return (
    <section className="pb-20 px-4">
      <div className="container max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mx-auto">
          {collections.map((collection) => (
            <div
              key={collection.title}
              className={`relative rounded-2xl overflow-hidden min-h-[220px] md:min-h-[400px] ${collection.bgClass} z-2 flex flex-col justify-end p-8`}
            >
              {collection.src && (
                <img
                  src={collection.src}
                  alt="collection-image"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform"
                />
              )}
              <div className="relative z-3">
                <h3 className="text-white font-semibold text-xl md:text-2xl mb-2">
                  {collection.title}
                </h3>
                <button className="text-white flex items-center gap-1 cursor-pointer underline text-sm transition-colors">
                  Collections
                  <span>
                    <ArrowRight className="w-[14px] h-[14px]" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
