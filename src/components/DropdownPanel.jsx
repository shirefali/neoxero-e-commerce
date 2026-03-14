import { Link } from "react-router-dom";
import { categoryNameToSlug } from "../utils/categorySlug";

const formatCategoryLabel = (name) => {
  if (!name || typeof name !== "string") return name;
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const DropdownPanel = ({ categories, onClose, className = "" }) => {
  if (!categories?.length) return null;
  return (
    <div
      className={`absolute left-0 top-full mt-1 min-w-[200px] bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50 ${className}`}
      role="menu"
    >
      {categories.map((category) => {
        const slug = categoryNameToSlug(category);
        return (
          <Link
            key={category}
            to={`/category/${slug}`}
            onClick={onClose}
            className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm font-medium"
            role="menuitem"
          >
            {formatCategoryLabel(category)}
          </Link>
        );
      })}
    </div>
  );
};

export default DropdownPanel;
