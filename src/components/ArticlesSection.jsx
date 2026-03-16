import { ArrowRight } from "lucide-react";
import ArticlesCard from "./ArticlesCard";

const ArticlesSection = () => {
  return (
    <section className="px-4">
      <div className="container max-w-[1200px] mx-auto py-20">
        {/* section title  */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-[28px] font-bold text-black">
            Latest Articles
          </h2>
          <button className="text-black underline cursor-pointer font-sm self-start sm:self-center flex items-center gap-1">
            View More
            <span>
              <ArrowRight className="w-[14px] h-[14px]" />
            </span>
          </button>
        </div>

        {/* Article cards*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <ArticlesCard src="/article-1.png" />
          <ArticlesCard src="/article-2.png" />
          <ArticlesCard src="/article-3.png" />
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
