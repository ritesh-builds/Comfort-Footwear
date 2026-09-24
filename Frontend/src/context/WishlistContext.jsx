import React, { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import { AuthContext } from "./AuthContext";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { accessToken } = useContext(AuthContext) || {};
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);

  // Sync favorites & orders from DB API when user is logged in
  useEffect(() => {
    if (!accessToken) {
      setFavorites([]);
      setOrders([]);
      return;
    }

    const fetchUserDataFromDb = async () => {
      try {
        const [wishlistRes, ordersRes] = await Promise.all([
          axiosInstance.get("/api/wishlist"),
          axiosInstance.get("/api/orders")
        ]);

        if (wishlistRes.data) {
          setFavorites(wishlistRes.data.map(item => ({
            id: item.productId,
            name: item.name,
            price: item.price,
            category: item.category,
            image: item.image
          })));
        }

        if (ordersRes.data) {
          setOrders(ordersRes.data);
        }
      } catch (error) {
        console.error("Error loading user data from database:", error);
      }
    };

    fetchUserDataFromDb();
  }, [accessToken]);

  const isFavorite = (productId) => {
    return favorites.some((item) => String(item.id) === String(productId));
  };

  const toggleFavorite = async (product) => {
    let updated;
    let added = false;

    if (isFavorite(product.id)) {
      updated = favorites.filter((item) => String(item.id) !== String(product.id));
    } else {
      updated = [...favorites, product];
      added = true;
    }
    setFavorites(updated);

    if (accessToken) {
      try {
        await axiosInstance.post("/api/wishlist/toggle", {
          productId: String(product.id),
          name: product.name,
          price: product.price,
          category: product.category || product.type || "Footwear",
          image: product.image
        });
      } catch (err) {
        console.error("Failed to sync wishlist to database:", err);
      }
    }
    return added;
  };

  const removeFromFavorites = async (productId) => {
    setFavorites((prev) => prev.filter((item) => String(item.id) !== String(productId)));

    if (accessToken) {
      try {
        await axiosInstance.delete(`/api/wishlist/${productId}`);
      } catch (err) {
        console.error("Failed to remove item from database:", err);
      }
    }
  };

  const placeOrder = async (product) => {
    const tempOrder = {
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

    setOrders((prev) => [tempOrder, ...prev]);

    if (accessToken) {
      try {
        const response = await axiosInstance.post("/api/orders", {
          productName: product.name || "Comfort Footwear Shoe",
          price: product.price || "₹2,999"
        });
        if (response.data) {
          setOrders((prev) => [response.data, ...prev.filter(o => o.id !== tempOrder.id)]);
          return response.data;
        }
      } catch (err) {
        console.error("Failed to persist order to database:", err);
      }
    }
    return tempOrder;
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
