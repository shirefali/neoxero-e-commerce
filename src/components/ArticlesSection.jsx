import { ArrowRight } from "lucide-react";
import ArticlesCard from "./ArticlesCard";

const ArticlesSection = () => {
  return (
    <section className=" py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* section title  */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-3xl font-bold text-black">
            Latest Articles
          </h2>
          <button className="text-black underline cursor-pointer font-medium self-start sm:self-center flex gap-2">
            View More
            <span>
              <ArrowRight />
            </span>
          </button>
        </div>

        {/* Article cards*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <ArticlesCard src="../public/article-1.png" />
          <ArticlesCard src="../public/article-2.png" />
          <ArticlesCard src="../public/article-3.png" />
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
