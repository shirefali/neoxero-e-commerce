import { Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartDrawer = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    totalPrice,
    totalItems,
    clearCart,
    isDrawerOpen,
    closeDrawer,
  } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
        onKeyDown={(e) => e.key === "Escape" && closeDrawer()}
        role="button"
        tabIndex={-1}
        aria-label="Close cart"
      />
      <aside
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-xl z-50 flex flex-col transition-transform duration-300 ease-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Cart"
        aria-hidden={!isDrawerOpen}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
          <button
            type="button"
            onClick={closeDrawer}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-gray-600 mb-4">Your cart is empty.</p>
              <button
                type="button"
                onClick={closeDrawer}
                className="py-2.5 px-6 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition-colors"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <>
              <ul className="divide-y divide-gray-200">
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className="py-4 flex gap-3">
                    <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm truncate">
                        {product.title}
                      </h3>
                      <p className="text-gray-900 font-bold text-sm mt-0.5">
                        $
                        {typeof product.price === "number"
                          ? product.price.toFixed(2)
                          : product.price}
                      </p>
                      <div className="flex items-center gap-1 mt-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(product.id, quantity - 1)
                          }
                          className="p-1 rounded border border-gray-300 hover:bg-gray-50"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-xs font-medium">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(product.id, quantity + 1)
                          }
                          className="p-1 rounded border border-gray-300 hover:bg-gray-50"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(product.id)}
                          className="ml-1 p-1 text-red-600 hover:bg-red-50 rounded"
                          aria-label="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right font-semibold text-sm text-gray-900">
                      ${((Number(product.price) || 0) * quantity).toFixed(2)}
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={clearCart}
                className="mt-4 text-sm text-red-600 hover:underline"
              >
                Clear cart
              </button>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between font-bold text-gray-900 text-lg mb-4">
              <span>Subtotal ({totalItems} items)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              type="button"
              className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition-colors"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeDrawer}
              className="w-full mt-2 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
