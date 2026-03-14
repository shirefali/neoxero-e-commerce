import { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Heart,
  Search,
  User,
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useFavourites } from "../context/FavouritesContext";
import { Link } from "react-scroll";
import DropdownPanel from "./DropdownPanel";
import { useProducts } from "../context/ProductsContext";
import { categoryNameToSlug } from "../utils/categorySlug";

const formatCategoryLabel = (name) => {
  if (!name || typeof name !== "string") return name;
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const navLinks = [
  {
    to: "home",
    label: "Home",
    smooth: true,
    showChevron: false,
    isDropdown: false,
  },
  {
    to: "shop",
    label: "Shop",
    smooth: false,
    showChevron: true,
    isDropdown: true,
    dropdownKey: "shop",
  },
  {
    to: "product",
    label: "Product",
    smooth: false,
    showChevron: true,
    isDropdown: true,
    dropdownKey: "product",
  },
  {
    to: "contact",
    label: "Contact Us",
    smooth: false,
    showChevron: false,
    isDropdown: false,
  },
];

const scrollProps = { duration: 500, offset: 100 };

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  const { categories } = useProducts();
  const { totalItems, toggleDrawer } = useCart();
  const { items: favouriteItems } = useFavourites();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleDropdownToggle = (key) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <nav ref={navRef}>
      <div className="container flex items-center justify-between bg-white mx-auto px-4 py-8 relative">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 -m-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="w-6 h-6 transition-transform duration-200" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-200" />
            )}
          </button>
          <RouterLink
            to="/"
            className="text-2xl md:text-3xl font-bold cursor-pointer"
          >
            VisioCreate.
          </RouterLink>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            if (item.isDropdown && item.dropdownKey) {
              return (
                <div key={item.to} className="relative">
                  <button
                    type="button"
                    onClick={handleDropdownToggle(item.dropdownKey)}
                    className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.dropdownKey ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.dropdownKey && (
                    <DropdownPanel
                      categories={categories}
                      onClose={() => setOpenDropdown(null)}
                    />
                  )}
                </div>
              );
            }
            if (item.to === "home") {
              return (
                <RouterLink
                  key={item.to}
                  to="/"
                  className="cursor-pointer hover:text-gray-600"
                >
                  {item.label}
                </RouterLink>
              );
            }
            if (item.to === "contact") {
              return (
                <RouterLink
                  key={item.to}
                  to="/contact"
                  className="cursor-pointer hover:text-gray-600"
                >
                  {item.label}
                </RouterLink>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to}
                smooth={item.smooth}
                duration={scrollProps.duration}
                offset={scrollProps.offset}
                className={`${
                  item.showChevron ? "flex items-center gap-1" : ""
                } cursor-pointer hover:text-gray-600`}
              >
                {item.label}
                {item.showChevron && <ChevronDown className="w-4 h-4" />}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu: backdrop + panel */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
          />
          <aside
            className={`fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out z-50 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-5 border-b border-gray-100">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="p-2 -m-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4">
              {navLinks.map((item) => {
                if (item.isDropdown && item.dropdownKey) {
                  const isExpanded = openDropdown === item.dropdownKey;
                  return (
                    <div key={item.to} className="px-2">
                      <button
                        type="button"
                        onClick={handleDropdownToggle(item.dropdownKey)}
                        className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-200 overflow-hidden ${
                          isExpanded && categories?.length
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="min-h-0">
                          <div className="pl-4 pr-2 pb-3 space-y-0.5">
                            {categories?.map((category) => {
                              const slug = categoryNameToSlug(category);
                              return (
                                <RouterLink
                                  key={category}
                                  to={`/category/${slug}`}
                                  onClick={() => {
                                    setMenuOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                  className="block py-2.5 px-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-sm transition-colors"
                                >
                                  {formatCategoryLabel(category)}
                                </RouterLink>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                if (item.to === "home") {
                  return (
                    <RouterLink
                      key={item.to}
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3.5 mx-2 rounded-xl font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                    </RouterLink>
                  );
                }
                if (item.to === "contact") {
                  return (
                    <RouterLink
                      key={item.to}
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3.5 mx-2 rounded-xl font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                    </RouterLink>
                  );
                }
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth={item.smooth}
                    duration={scrollProps.duration}
                    offset={scrollProps.offset}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3.5 mx-2 rounded-xl font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-gray-100 p-4 bg-gray-50/80">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-3">
                Quick actions
              </p>
              <div className="space-y-1">
                <button
                  type="button"
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-colors text-left"
                >
                  <Search className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700 font-medium">Search</span>
                </button>
                <RouterLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-colors"
                >
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700 font-medium">Account</span>
                </RouterLink>
                <RouterLink
                  to="/favourites"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-colors"
                >
                  <Heart className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                  <span className="text-gray-700 font-medium">Favourites</span>
                  {favouriteItems.length > 0 && (
                    <span className="ml-auto bg-gray-900 text-white text-xs font-medium min-w-[20px] h-5 flex items-center justify-center rounded-full px-1.5">
                      {favouriteItems.length}
                    </span>
                  )}
                </RouterLink>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    toggleDrawer();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-colors text-left"
                >
                  <ShoppingBag className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700 font-medium">Cart</span>
                  {totalItems > 0 && (
                    <span className="ml-auto bg-gray-900 text-white text-xs font-medium min-w-[20px] h-5 flex items-center justify-center rounded-full px-1.5">
                      {totalItems}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </aside>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-600" />
          </div>
          <div className="hidden md:block">
            <User className="w-5 h-5 cursor-pointer hover:text-gray-600" />
          </div>
          <RouterLink
            to="/favourites"
            className="relative cursor-pointer"
            aria-label="Favourites"
          >
            <Heart className="w-5 h-5" strokeWidth={1.5} />
            {favouriteItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1">
                {favouriteItems.length}
              </span>
            )}
          </RouterLink>
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              toggleDrawer();
            }}
            className="relative cursor-pointer bg-transparent border-none p-0"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
