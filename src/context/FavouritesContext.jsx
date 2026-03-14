import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const FavouritesContext = createContext(null);

function productSnapshot(product) {
  if (!product?.id) return null;
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
  };
}

export function FavouritesProvider({ children }) {
  const [items, setItems] = useState([]);

  const add = useCallback((product) => {
    const snap = productSnapshot(product);
    if (!snap) return;
    setItems((prev) =>
      prev.some((i) => i.id === snap.id) ? prev : [...prev, snap]
    );
  }, []);

  const remove = useCallback((productId) => {
    setItems((prev) => prev.filter((i) => i.id !== productId));
  }, []);

  const toggle = useCallback((product) => {
    const snap = productSnapshot(product);
    if (!snap) return;
    setItems((prev) => {
      const exists = prev.some((i) => i.id === snap.id);
      if (exists) return prev.filter((i) => i.id !== snap.id);
      return [...prev, snap];
    });
  }, []);

  const isFavourite = useCallback(
    (productId) => items.some((i) => i.id === productId),
    [items]
  );

  const value = useMemo(
    () => ({ items, add, remove, toggle, isFavourite }),
    [items, add, remove, toggle, isFavourite]
  );

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error("useFavourites must be used within a FavouritesProvider");
  }
  return context;
}
