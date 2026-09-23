import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("comfort_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem("comfort_orders");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("comfort_favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("comfort_orders", JSON.stringify(orders));
  }, [orders]);

  const isFavorite = (productId) => {
    return favorites.some((item) => item.id === productId);
  };

  const toggleFavorite = (product) => {
    let updated;
    let added = false;

    if (isFavorite(product.id)) {
      updated = favorites.filter((item) => item.id !== product.id);
    } else {
      updated = [...favorites, product];
      added = true;
    }

    setFavorites(updated);
    return added;
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== productId));
  };

  const placeOrder = (product) => {
    const newOrder = {
      id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      status: "Processing",
      total: product.price || "₹2,999",
      items: [
        {
          name: product.name || "Comfort Footwear Shoe",
          price: product.price || "₹2,999",
          category: product.category || product.type || "Footwear",
        },
      ],
    };

    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  return (
    <WishlistContext.Provider
      value={{
        favorites,
        orders,
        isFavorite,
        toggleFavorite,
        removeFromFavorites,
        placeOrder,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
