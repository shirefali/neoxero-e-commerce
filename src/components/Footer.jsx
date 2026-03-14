import { Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] text-gray-700 px-4">
      <div className="container mx-auto py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column: location & contact us */}
          <div>
            <h3 className="font-semibold text-[#111111] text-2xl mb-6">
              VisioCreate.
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              43111 Hai Trieu street,
              <br /> District 1, HCMC,
              <br /> Vietnam
            </p>
            <p className="text-gray-600 text-sm mb-6">84-756-3237</p>
            <div className="flex gap-4 text-black">
              <a
                href="https//wwww.intagram.com"
                className=" hover:text-[#c13584] transition-colors"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https//www.facebook.com"
                className=" hover:text-[#1877f2] transition-colors"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https//www.youtube.com"
                className=" hover:text-[#ff0000] transition-colors"
              >
                <Youtube size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column: Page links */}
          <div>
            <h3 className="font-semibold text-[#11111] text-lg mb-6">Page</h3>
            <ul className="space-y-2">
              {["Home", "Shop", "Product", "Articles", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 text-sm hover:text-[#111111] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column: Info links */}
          <div>
            <h3 className="font-semibold text-[#111111] text-lg mb-6">Info</h3>
            <ul className="space-y-2">
              {["Shipping Policy", "Return & Refund", "Support", "FAQs"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column: Newsletter */}
          <div>
            <h3 className="font-semibold text-[#111111] text-lg mb-6">
              Join Newsletter
            </h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              Subscribe our newsletter to get more deals, new products and
              promotions
            </p>
            <form
              className="flex items-center border border-gray-300 rounded-full bg-white overflow-hidden"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 h-full p-4 text-sm text-[#111111] bg-transparent border-0 rounded-full focus:outline-none"
              />
              <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2 hover:bg-blue-700 transition-colors">
                <ArrowRight size={20} strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>
        {/* <hr className="text-gray-200 mt-5" /> */}
      </div>

      {/* Bottom part */}
      <div>
        <div className="container border-t px-4 border-gray-200 mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-center text-sm order-2 sm:order-1">
            Copyright © 2023 VisioCreate. All rights reserved.
          </p>
          <div className="flex gap-4 text-gray-500 text-sm order-3 sm:order-2">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs font-medium order-1 sm:order-3">
            <span className="border border-gray-300 py-1 px-2 rounded-lg">
              VISA
            </span>
            <span className="border border-gray-300 py-1 px-2 rounded-lg">
              AMEX
            </span>

            <span className="text-[#003087] border border-gray-300 py-1 px-2 rounded-lg font-bold">
              PayPal
            </span>
            <span className="border border-gray-300 py-1 px-2 rounded-lg font-bold">
              Pay
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
