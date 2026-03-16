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
      <h2 className="text-base font-semibold mb-2">2023 holiday gift guide</h2>
      <button className="capitalize flex gap-1 font-medium text-xs underline cursor-pointer">
        read more
        <span>
          <ArrowRight className="w-[14px] h-[14px]" />
        </span>
      </button>
    </div>
  );
};

export default ArticlesCard;
