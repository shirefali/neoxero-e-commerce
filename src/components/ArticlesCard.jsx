import { ArrowRight } from "lucide-react";

const ArticlesCard = ({ src }) => {
  return (
    <div>
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={src}
          alt="article-image"
          className="w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-2">2023 holiday gift guide</h2>
      <button className="capitalize flex gap-2 underline cursor-pointer">
        read more
        <span>
          <ArrowRight />
        </span>
      </button>
    </div>
  );
};

export default ArticlesCard;
