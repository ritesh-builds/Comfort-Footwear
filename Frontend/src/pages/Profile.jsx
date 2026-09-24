import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../api/axiosInstance";
import { useTheme } from "../context/ThemeContext";
import {
  User,
  ShoppingBag,
  Heart,
  MapPin,
  Settings,
  LogOut,
  Package,
  Clock,
  ChevronRight,
  Plus,
  Trash2,
  Shield,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { useWishlist } from "../context/WishlistContext";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' | 'orders' | 'favorites' | 'addresses' | 'settings'

  const { favorites, orders, removeFromFavorites, placeOrder } = useWishlist();
  const [addresses, setAddresses] = useState([]);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [addressSubmitting, setAddressSubmitting] = useState(false);
  const [newAddress, setNewAddress] = useState({
    fullName: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    pincode: "",
    addressType: "Home"
  });

  const { accessToken, logout } = useContext(AuthContext);
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    const fetchProfileAndData = async () => {
      try {
        const [userRes, addressRes] = await Promise.all([
          axiosInstance.get("/api/user/profile"),
          axiosInstance.get("/api/addresses")
        ]);
        setUser(userRes.data);
        if (addressRes.data) {
          setAddresses(addressRes.data);
        }
      } catch (error) {
        console.log("Error fetching profile or addresses:", error);
      }
    };

    fetchProfileAndData();
  }, [accessToken]);

  const handleAddAddressSubmit = async (e) => {
    e.preventDefault();
    setAddressSubmitting(true);
    try {
      const response = await axiosInstance.post("/api/addresses", newAddress);
      setAddresses((prev) => [response.data, ...prev]);
      setShowAddressModal(false);
      setNewAddress({
        fullName: "",
        phone: "",
        streetAddress: "",
        city: "",
        state: "",
        pincode: "",
        addressType: "Home"
      });
    } catch (err) {
      console.error("Failed to add address:", err);
      alert("Failed to save address to database.");
    } finally {
      setAddressSubmitting(false);
    }
  };

  const handleDeleteAddress = async (id) => {
    try {
      await axiosInstance.delete(`/api/addresses/${id}`);
      setAddresses((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      console.error("Failed to delete address:", err);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!accessToken) {
    return (
      <section
        className={`min-h-screen pt-28 pb-16 px-4 flex flex-col items-center justify-center transition-all duration-300 ${
          darkMode ? "bg-[#080808] text-white" : "bg-[#f7f7f7] text-black"
        }`}
      >
        <div className={`text-center max-w-md w-full p-8 rounded-2xl border shadow-xl ${
          darkMode ? "bg-[#0d0d0d] border-[#222]" : "bg-white border-[#ddd]"
        }`}>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-amber-500/10 text-amber-500">
            <User size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-2">Login Required</h2>
          <p className={`text-sm mb-6 ${darkMode ? "text-[#888]" : "text-[#666]"}`}>
            Please log in or create an account to view your user dashboard, orders, and saved favorites.
          </p>
          <button
            onClick={() => navigate("/login")}
            className={`w-full py-3.5 px-6 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
              darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            Go to Login →
          </button>
        </div>
      </section>
    );
  }

  if (!user) {
    return (
      <section
        className={`min-h-[calc(100vh-80px)] flex items-center justify-center ${
          darkMode ? "bg-[#080808] text-white" : "bg-[#f7f7f7] text-black"
        }`}
      >
        <div className="text-center">
          <div
            className={`w-10 h-10 mx-auto mb-4 rounded-full border-2 border-t-transparent animate-spin ${
              darkMode ? "border-white" : "border-black"
            }`}
          />
          <p className={`text-sm ${darkMode ? "text-[#777]" : "text-[#777]"}`}>
            Loading Dashboard...
          </p>
        </div>
      </section>
    );
  }

  const initial = user.name?.charAt(0)?.toUpperCase() || "U";

  // NAVIGATION TABS CONFIG
  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "orders", label: "My Orders", icon: ShoppingBag, count: orders.length },
    { id: "favorites", label: "Favorites", icon: Heart, count: favorites.length },
    { id: "addresses", label: "Addresses", icon: MapPin, count: addresses.length },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <section
      className={`min-h-screen pt-28 pb-16 px-4 sm:px-8 lg:px-[8%] relative overflow-hidden transition-all duration-300 ${
        darkMode ? "bg-[#080808] text-white" : "bg-[#fafafa] text-black"
      }`}
    >
      {/* AMBIENT BACKGROUND GLOW ORBS */}
      <div className="glass-orb w-[500px] h-[500px] -top-20 -right-20 opacity-30 dark:opacity-20 bg-gradient-to-br from-indigo-200/35 via-violet-200/25 to-pink-200/25 blur-[120px]" />
      <div className="glass-orb w-[450px] h-[450px] bottom-10 -left-20 opacity-25 dark:opacity-15 bg-gradient-to-tr from-emerald-200/30 via-teal-200/25 to-sky-200/25 blur-[120px]" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* TOP DASHBOARD HEADER */}
        <div className={`mb-8 p-6 sm:p-8 rounded-3xl transition-all ${
          darkMode ? "glass-panel-dark" : "glass-panel-light"
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* AVATAR */}
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-semibold shrink-0 shadow-lg ${
                  darkMode
                    ? "bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 text-white"
                    : "bg-gradient-to-br from-black to-neutral-800 text-white"
                }`}
              >
                {initial}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`glass-badge ${
                      darkMode ? "glass-badge-dark" : "glass-badge-light"
                    }`}
                  >
                    USER DASHBOARD
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                      darkMode
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    }`}
                  >
                    Active
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-2">
                  Welcome back, {user.name.split(" ")[0]}
                </h1>

                <p className={`text-xs sm:text-sm mt-1 ${darkMode ? "text-[#aaa]" : "text-[#555]"}`}>
                  {user.email}
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className={`px-5 py-2.5 rounded-full border text-xs uppercase tracking-widest font-medium cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 self-start md:self-auto ${
                darkMode
                  ? "border-red-500/30 text-red-400 bg-red-500/10 hover:bg-red-500 hover:text-white"
                  : "border-red-200 text-red-600 bg-red-50 hover:bg-red-600 hover:text-white"
              }`}
            >
              <LogOut size={14} />
              Log Out
            </button>
          </div>
        </div>

        {/* MAIN DASHBOARD CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* NAVIGATION SIDEBAR */}
          <div className={`p-3 rounded-2xl flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none ${
            darkMode ? "glass-panel-dark" : "glass-panel-light"
          }`}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-between px-4.5 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 lg:w-full ${
                    isActive
                      ? darkMode
                        ? "bg-white text-black font-semibold shadow-md"
                        : "bg-black text-white font-semibold shadow-md"
                      : darkMode
                      ? "text-[#aaa] hover:text-white hover:bg-white/10"
                      : "text-[#555] hover:text-black hover:bg-black/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} />
                    <span>{tab.label}</span>
                  </div>

                  {tab.count !== undefined && tab.count > 0 && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                        isActive
                          ? darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                          : darkMode
                          ? "bg-neutral-800 text-neutral-300"
                          : "bg-neutral-200 text-neutral-700"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* TAB CONTENT AREA */}
          <div className="w-full">
            {/* ================= TAB 1: OVERVIEW ================= */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* QUICK STATS CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div
                    className={`p-5 rounded-2xl transition-all duration-300 ${
                      darkMode ? "glass-card-dark" : "glass-card-light"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs uppercase tracking-wider ${darkMode ? "text-[#aaa]" : "text-[#666]"}`}>
                        Total Orders
                      </span>
                      <ShoppingBag size={18} className={darkMode ? "text-neutral-300" : "text-neutral-700"} />
                    </div>
                    <p className="text-2xl font-semibold">{orders.length}</p>
                    <p className={`text-xs mt-1 ${darkMode ? "text-[#888]" : "text-[#777]"}`}>
                      {orders.length === 0 ? "No orders placed yet" : `${orders.length} orders recorded`}
                    </p>
                  </div>

                  <div
                    className={`p-5 rounded-2xl transition-all duration-300 ${
                      darkMode ? "glass-card-dark" : "glass-card-light"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs uppercase tracking-wider ${darkMode ? "text-[#aaa]" : "text-[#666]"}`}>
                        Saved Favorites
                      </span>
                      <Heart size={18} className={darkMode ? "text-neutral-300" : "text-neutral-700"} />
                    </div>
                    <p className="text-2xl font-semibold">{favorites.length}</p>
                    <p className={`text-xs mt-1 ${darkMode ? "text-[#888]" : "text-[#777]"}`}>
                      {favorites.length === 0 ? "Wishlist is empty" : `${favorites.length} saved items`}
                    </p>
                  </div>

                  <div
                    className={`p-5 rounded-2xl transition-all duration-300 ${
                      darkMode ? "glass-card-dark" : "glass-card-light"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs uppercase tracking-wider ${darkMode ? "text-[#aaa]" : "text-[#666]"}`}>
                        Saved Addresses
                      </span>
                      <MapPin size={18} className={darkMode ? "text-neutral-300" : "text-neutral-700"} />
                    </div>
                    <p className="text-2xl font-semibold">{addresses.length}</p>
                    <p className={`text-xs mt-1 ${darkMode ? "text-[#888]" : "text-[#777]"}`}>
                      {addresses.length === 0 ? "No addresses added" : `${addresses.length} delivery locations`}
                    </p>
                  </div>
                </div>

                {/* PERSONAL INFORMATION CARD */}
                <div
                  className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                    darkMode ? "bg-[#101010] border-[#222]" : "bg-white border-[#e3e3e3]"
                  }`}
                >
                  <div className={`px-6 py-4 border-b flex items-center justify-between ${darkMode ? "border-[#222]" : "border-[#e8e8e8]"}`}>
                    <h3 className="text-base font-medium">Personal Information</h3>
                    <span className={`text-xs ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                      Account Verified
                    </span>
                  </div>

                  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className={`text-xs uppercase tracking-wider mb-1 ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                        Full Name
                      </p>
                      <p className="text-sm font-medium">{user.name}</p>
                    </div>

                    <div>
                      <p className={`text-xs uppercase tracking-wider mb-1 ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                        Email Address
                      </p>
                      <p className="text-sm font-medium break-all">{user.email}</p>
                    </div>

                    <div>
                      <p className={`text-xs uppercase tracking-wider mb-1 ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                        User Account ID
                      </p>
                      <p className="text-sm font-medium">#{user.internalUserId}</p>
                    </div>

                    <div>
                      <p className={`text-xs uppercase tracking-wider mb-1 ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                        Authentication Provider
                      </p>
                      <p className="text-sm font-medium capitalize">{user.provider || "Email & Password"}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB 2: ORDERS ================= */}
            {activeTab === "orders" && (
              <div
                className={`rounded-2xl border p-8 transition-all duration-300 ${
                  darkMode ? "bg-[#101010] border-[#222]" : "bg-white border-[#e3e3e3]"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium">Order History</h3>
                    <p className={`text-xs mt-1 ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                      View and track your previous purchases
                    </p>
                  </div>

                  <Link
                    to="/Product"
                    className={`px-4 py-2 rounded-xl text-xs font-medium border no-underline flex items-center gap-1.5 transition-all duration-300 ${
                      darkMode ? "border-[#333] text-white hover:bg-white hover:text-black" : "border-[#ddd] text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    Browse Collection →
                  </Link>
                </div>

                {orders.length === 0 ? (
                  <div className="text-center py-12">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${darkMode ? "bg-neutral-900 text-neutral-500" : "bg-neutral-100 text-neutral-400"}`}>
                      <Package size={28} />
                    </div>
                    <h4 className="text-base font-medium mb-1">No Orders Placed Yet</h4>
                    <p className={`text-xs max-w-sm mx-auto mb-6 ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                      When you purchase footwear from Comfort Footwear, your order details and delivery status will appear here.
                    </p>
                    <Link
                      to="/Product"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider no-underline transition-all duration-300 ${
                        darkMode ? "bg-white text-black hover:bg-neutral-200" : "bg-black text-white hover:bg-neutral-800"
                      }`}
                    >
                      Explore Products
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className={`p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 ${
                          darkMode ? "border-[#222] bg-[#0c0c0c]" : "border-[#eee] bg-[#fafafa]"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold">{order.id}</span>
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase bg-amber-500/10 text-amber-500 border border-amber-500/20">
                              {order.status}
                            </span>
                          </div>
                          <p className={`text-xs mt-1 ${darkMode ? "text-[#777]" : "text-[#777]"}`}>
                            Placed on {order.date} • {order.items[0]?.name}
                          </p>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end gap-4">
                          <span className="text-sm font-semibold">{order.total}</span>
                          <span className={`text-xs px-3 py-1.5 rounded-lg border ${darkMode ? "border-[#333] text-[#aaa]" : "border-[#ddd] text-[#666]"}`}>
                            View Order
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ================= TAB 3: FAVORITES ================= */}
            {activeTab === "favorites" && (
              <div
                className={`rounded-2xl border p-8 transition-all duration-300 ${
                  darkMode ? "bg-[#101010] border-[#222]" : "bg-white border-[#e3e3e3]"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium">Saved Favorites</h3>
                    <p className={`text-xs mt-1 ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                      Your personal footwear wishlist
                    </p>
                  </div>

                  <Link
                    to="/Product"
                    className={`px-4 py-2 rounded-xl text-xs font-medium border no-underline flex items-center gap-1.5 transition-all duration-300 ${
                      darkMode ? "border-[#333] text-white hover:bg-white hover:text-black" : "border-[#ddd] text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    Add Items →
                  </Link>
                </div>

                {favorites.length === 0 ? (
                  <div className="text-center py-12">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${darkMode ? "bg-neutral-900 text-rose-500/40" : "bg-rose-50 text-rose-400"}`}>
                      <Heart size={28} />
                    </div>
                    <h4 className="text-base font-medium mb-1">Your Wishlist is Empty</h4>
                    <p className={`text-xs max-w-sm mx-auto mb-6 ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                      Save your favorite shoes while browsing to easily access or purchase them later.
                    </p>
                    <Link
                      to="/Product"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider no-underline transition-all duration-300 ${
                        darkMode ? "bg-white text-black hover:bg-neutral-200" : "bg-black text-white hover:bg-neutral-800"
                      }`}
                    >
                      Browse Footwear
                      <Sparkles size={14} />
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {favorites.map((item) => (
                      <div
                        key={item.id}
                        className={`p-4 rounded-xl border flex items-center justify-between gap-4 transition-all duration-300 ${
                          darkMode ? "border-[#222] bg-[#0c0c0c]" : "border-[#eee] bg-[#fafafa]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {item.image ? (
                            <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg" />
                          ) : (
                            <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-2xl ${darkMode ? "bg-neutral-800" : "bg-neutral-200"}`}>
                              👟
                            </div>
                          )}
                          <div>
                            <h5 className="text-sm font-medium">{item.name}</h5>
                            <p className={`text-xs ${darkMode ? "text-[#777]" : "text-[#777]"}`}>{item.type || item.category || "Footwear"}</p>
                            <p className="text-xs font-semibold mt-0.5">{item.price}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              placeOrder(item);
                              alert(`Order placed for ${item.name}! Check your Orders tab.`);
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all duration-200 ${
                              darkMode ? "bg-white text-black hover:bg-neutral-200" : "bg-black text-white hover:bg-neutral-800"
                            }`}
                          >
                            Order
                          </button>
                          <button
                            onClick={() => removeFromFavorites(item.id)}
                            title="Remove from favorites"
                            className="p-1.5 rounded-lg text-neutral-400 hover:text-red-500 cursor-pointer transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ================= TAB 4: ADDRESSES ================= */}
            {activeTab === "addresses" && (
              <div
                className={`rounded-2xl border p-8 transition-all duration-300 ${
                  darkMode ? "bg-[#101010] border-[#222]" : "bg-white border-[#e3e3e3]"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium">Delivery Addresses</h3>
                    <p className={`text-xs mt-1 ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                      Manage shipping addresses saved in your database
                    </p>
                  </div>

                  <button
                    onClick={() => setShowAddressModal(true)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium border flex items-center gap-1.5 cursor-pointer transition-all duration-300 ${
                      darkMode ? "border-[#333] text-white hover:bg-white hover:text-black" : "border-[#ddd] text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    <Plus size={14} />
                    Add Address
                  </button>
                </div>

                {addresses.length === 0 ? (
                  <div className="text-center py-12">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${darkMode ? "bg-neutral-900 text-neutral-500" : "bg-neutral-100 text-neutral-400"}`}>
                      <MapPin size={28} />
                    </div>
                    <h4 className="text-base font-medium mb-1">No Saved Addresses</h4>
                    <p className={`text-xs max-w-sm mx-auto mb-6 ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                      Add your home or office address to enable quick 1-click checkout saved securely in the database.
                    </p>
                    <button
                      onClick={() => setShowAddressModal(true)}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer transition-all duration-300 ${
                        darkMode ? "bg-white text-black hover:bg-neutral-200" : "bg-black text-white hover:bg-neutral-800"
                      }`}
                    >
                      <Plus size={14} />
                      Add New Address
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {addresses.map((addr) => (
                      <div
                        key={addr.id}
                        className={`p-5 rounded-xl border relative flex flex-col justify-between transition-all duration-300 ${
                          darkMode ? "border-[#222] bg-[#0c0c0c]" : "border-[#eee] bg-[#fafafa]"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-sm">{addr.fullName}</span>
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase ${
                              darkMode ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "bg-indigo-50 text-indigo-700 border border-indigo-200"
                            }`}>
                              {addr.addressType || "Home"}
                            </span>
                          </div>
                          <p className={`text-xs ${darkMode ? "text-[#aaa]" : "text-[#555]"}`}>
                            {addr.streetAddress}
                          </p>
                          <p className={`text-xs ${darkMode ? "text-[#aaa]" : "text-[#555]"}`}>
                            {addr.city}, {addr.state} - {addr.pincode}
                          </p>
                          <p className={`text-xs mt-2 font-medium ${darkMode ? "text-[#777]" : "text-[#888]"}`}>
                            Phone: {addr.phone}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-neutral-500/10 flex justify-end">
                          <button
                            onClick={() => handleDeleteAddress(addr.id)}
                            className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1 cursor-pointer"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ADD ADDRESS MODAL */}
            {showAddressModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <div className={`w-full max-w-lg p-6 rounded-2xl border shadow-2xl ${
                  darkMode ? "bg-[#121212] border-[#2a2a2a] text-white" : "bg-white border-[#e5e5e5] text-black"
                }`}>
                  <h3 className="text-xl font-semibold mb-4">Add Delivery Address</h3>
                  <form onSubmit={handleAddAddressSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className={`block text-xs font-medium mb-1 ${darkMode ? "text-[#aaa]" : "text-[#555]"}`}>Full Name</label>
                        <input
                          type="text"
                          required
                          value={newAddress.fullName}
                          onChange={(e) => setNewAddress({ ...newAddress, fullName: e.target.value })}
                          placeholder="John Doe"
                          className={`w-full p-3 rounded-xl border text-sm outline-none ${darkMode ? "bg-[#1a1a1a] border-[#333] text-white" : "bg-gray-50 border-[#ddd] text-black"}`}
                        />
                      </div>
                      <div>
                        <label className={`block text-xs font-medium mb-1 ${darkMode ? "text-[#aaa]" : "text-[#555]"}`}>Phone Number</label>
                        <input
                          type="text"
                          required
                          value={newAddress.phone}
                          onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                          placeholder="+91 9876543210"
                          className={`w-full p-3 rounded-xl border text-sm outline-none ${darkMode ? "bg-[#1a1a1a] border-[#333] text-white" : "bg-gray-50 border-[#ddd] text-black"}`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-xs font-medium mb-1 ${darkMode ? "text-[#aaa]" : "text-[#555]"}`}>Street Address</label>
                      <input
                        type="text"
                        required
                        value={newAddress.streetAddress}
                        onChange={(e) => setNewAddress({ ...newAddress, streetAddress: e.target.value })}
                        placeholder="123 Main St, Apt 4B"
                        className={`w-full p-3 rounded-xl border text-sm outline-none ${darkMode ? "bg-[#1a1a1a] border-[#333] text-white" : "bg-gray-50 border-[#ddd] text-black"}`}
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className={`block text-xs font-medium mb-1 ${darkMode ? "text-[#aaa]" : "text-[#555]"}`}>City</label>
                        <input
                          type="text"
                          required
                          value={newAddress.city}
                          onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                          placeholder="Mumbai"
                          className={`w-full p-3 rounded-xl border text-sm outline-none ${darkMode ? "bg-[#1a1a1a] border-[#333] text-white" : "bg-gray-50 border-[#ddd] text-black"}`}
                        />
                      </div>
                      <div>
                        <label className={`block text-xs font-medium mb-1 ${darkMode ? "text-[#aaa]" : "text-[#555]"}`}>State</label>
                        <input
                          type="text"
                          required
                          value={newAddress.state}
                          onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                          placeholder="Maharashtra"
                          className={`w-full p-3 rounded-xl border text-sm outline-none ${darkMode ? "bg-[#1a1a1a] border-[#333] text-white" : "bg-gray-50 border-[#ddd] text-black"}`}
                        />
                      </div>
                      <div>
                        <label className={`block text-xs font-medium mb-1 ${darkMode ? "text-[#aaa]" : "text-[#555]"}`}>Pincode</label>
                        <input
                          type="text"
                          required
                          value={newAddress.pincode}
                          onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                          placeholder="400001"
                          className={`w-full p-3 rounded-xl border text-sm outline-none ${darkMode ? "bg-[#1a1a1a] border-[#333] text-white" : "bg-gray-50 border-[#ddd] text-black"}`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-xs font-medium mb-1 ${darkMode ? "text-[#aaa]" : "text-[#555]"}`}>Address Type</label>
                      <select
                        value={newAddress.addressType}
                        onChange={(e) => setNewAddress({ ...newAddress, addressType: e.target.value })}
                        className={`w-full p-3 rounded-xl border text-sm outline-none ${darkMode ? "bg-[#1a1a1a] border-[#333] text-white" : "bg-gray-50 border-[#ddd] text-black"}`}
                      >
                        <option value="Home">Home</option>
                        <option value="Work">Work</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={addressSubmitting}
                        className={`flex-1 py-3 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                          darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
                        }`}
                      >
                        {addressSubmitting ? "Saving..." : "Save Address"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowAddressModal(false)}
                        className={`py-3 px-5 rounded-xl border font-medium text-sm cursor-pointer ${
                          darkMode ? "border-[#333] text-gray-300 hover:bg-[#1a1a1a]" : "border-[#ddd] text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* ================= TAB 5: SETTINGS ================= */}
            {activeTab === "settings" && (
              <div className="space-y-6">
                <div
                  className={`rounded-2xl border p-8 transition-all duration-300 ${
                    darkMode ? "bg-[#101010] border-[#222]" : "bg-white border-[#e3e3e3]"
                  }`}
                >
                  <h3 className="text-lg font-medium mb-1">Account & Security</h3>
                  <p className={`text-xs mb-6 ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                    Manage security settings and account preferences
                  </p>

                  <div className="space-y-4">
                    <div className={`p-4 rounded-xl border flex items-center justify-between ${darkMode ? "border-[#222] bg-[#0c0c0c]" : "border-[#eee] bg-[#fafafa]"}`}>
                      <div className="flex items-center gap-3">
                        <Shield size={20} className="text-emerald-500" />
                        <div>
                          <p className="text-sm font-medium">Session Status</p>
                          <p className={`text-xs ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                            Authenticated via {user.provider || "JWT Token"}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-emerald-500 font-medium flex items-center gap-1">
                        <CheckCircle2 size={14} /> Active
                      </span>
                    </div>

                    <div className={`p-4 rounded-xl border flex items-center justify-between ${darkMode ? "border-[#222] bg-[#0c0c0c]" : "border-[#eee] bg-[#fafafa]"}`}>
                      <div className="flex items-center gap-3">
                        <User size={20} className={darkMode ? "text-neutral-400" : "text-neutral-600"} />
                        <div>
                          <p className="text-sm font-medium">Account ID</p>
                          <p className={`text-xs ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                            Internal Identifier #{user.internalUserId}
                          </p>
                        </div>
                      </div>
                      <span className={`text-xs ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                        Protected
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-500/20 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-red-500">Log Out of All Devices</p>
                      <p className={`text-xs mt-0.5 ${darkMode ? "text-[#666]" : "text-[#888]"}`}>
                        End active session and return to login
                      </p>
                    </div>

                    <button
                      onClick={handleLogout}
                      className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider cursor-pointer transition-all duration-300"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

