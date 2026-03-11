import { useState } from "react";
import { Search, User, ShoppingBag, ChevronDown, Menu } from "lucide-react";
import { Link } from "react-scroll";

const navLinks = [
  { to: "home", label: "Home", smooth: true, showChevron: false },
  { to: "shop", label: "Shop", smooth: false, showChevron: true },
  { to: "product", label: "Product", smooth: false, showChevron: true },
  { to: "contact", label: "Contact Us", smooth: false, showChevron: false },
];

const scrollProps = { duration: 500, offset: 100 };

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="container flex items-center justify-between bg-white mx-auto px-4 py-8 relative">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1 cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-2xl md:text-3xl font-bold cursor-pointer">
            VisioCreate.
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={item.smooth}
              duration={scrollProps.duration}
              offset={scrollProps.offset}
              className={`${
                item.showChevron && "flex items-center gap-1"
              } cursor-pointer`}
            >
              {item.label}
              {item.showChevron && (
                <span>
                  <ChevronDown />
                </span>
              )}
            </Link>
          ))}
        </div>

        {menuOpen && (
          <div className="md:hidden absolute left-4 right-4 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-3 z-50">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={item.smooth}
                duration={scrollProps.duration}
                offset={scrollProps.offset}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 px-4 py-2 border-t border-gray-100 mt-2 pt-3">
              <Search className="w-5 h-5 cursor-pointer hover:text-gray-600" />
              <User className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            </div>
          </div>
        )}

        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-600" />
          </div>
          <div className="hidden md:block">
            <User className="w-5 h-5 cursor-pointer hover:text-gray-600" />
          </div>
          <div className="relative cursor-pointer">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
