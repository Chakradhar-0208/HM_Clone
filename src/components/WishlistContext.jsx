import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState({});
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      try {
        setWishlist(JSON.parse(stored));
      } catch {
        setWishlist({});
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (key, product) => {
    setWishlist((prev) => {
      const updated = { ...prev };
      if (updated[key]) {
        delete updated[key];
        setToastMessage("Removed from wishlist");
      } else {
        updated[key] = product;
        setToastMessage("Added to wishlist");
      }
      return updated;
    });
  };

  const clearToast = () => setToastMessage("");

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, toastMessage, clearToast }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
