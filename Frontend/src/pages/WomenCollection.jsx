import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";
import { Heart, ShoppingBag } from "lucide-react";
import { fetchProducts } from "../api/productService";
import AuthModal from "../components/AuthModal";
import OrderSuccessModal from "../components/OrderSuccessModal";

const WomenCollection = () => {
  const { darkMode } = useTheme();
  const { accessToken } = useContext(AuthContext);
  const { isFavorite, toggleFavorite, placeOrder } = useWishlist();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal States
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalConfig, setAuthModalConfig] = useState({ title: "", message: "" });
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderedProduct, setOrderedProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const data = await fetchProducts("women");
      setProducts(data);
      setLoading(false);
    };

    getProducts();
  }, []);

  return (
    <section
      className={`
        min-h-screen
        pt-28
        pb-16
        px-5
        sm:px-8
        lg:px-[8%]
        relative
        overflow-hidden
        transition-all
        duration-300

        ${
          darkMode
            ? "bg-[#080808] text-white"
            : "bg-[#fafafa] text-black"
        }
      `}
    >
      {/* AMBIENT BACKGROUND GLOW ORBS */}
      <div className="glass-orb w-[500px] h-[500px] -top-20 -right-20 opacity-30 dark:opacity-20 bg-gradient-to-br from-rose-200/35 via-pink-200/25 to-purple-200/25 blur-[120px]" />
      <div className="glass-orb w-[450px] h-[450px] bottom-10 -left-20 opacity-25 dark:opacity-15 bg-gradient-to-tr from-amber-200/30 via-sky-200/25 to-teal-200/25 blur-[120px]" />

      <div className="relative z-10 max-w-[1250px] mx-auto">
        {/* HEADER */}
        <div className="max-w-[700px] mb-12">

          <span
            className={
              darkMode
                ? "glass-badge glass-badge-dark mb-3"
                : "glass-badge glass-badge-light mb-3"
            }
          >
            WOMEN'S COLLECTION
          </span>

          <h1
            className="
              text-[clamp(3.5rem,7.5vw,7.5rem)]
              leading-[0.88]
              font-normal
              tracking-[-4px]
              my-4
              max-[650px]:tracking-[-2px]
            "
          >
            Walk your{" "}
            <strong
              className={
                darkMode
                  ? "bg-gradient-to-r from-neutral-400 to-white bg-clip-text text-transparent font-normal"
                  : "bg-gradient-to-r from-neutral-500 to-black bg-clip-text text-transparent font-normal"
              }
            >
              way.
            </strong>
          </h1>

          <p
            className={
              darkMode
                ? "max-w-[450px] text-[#aaa] text-[14px] leading-[1.8]"
                : "max-w-[450px] text-[#555] text-[14px] leading-[1.8]"
            }
          >
            Thoughtfully designed footwear that brings together
            comfort, confidence, and effortless everyday style.
          </p>

        </div>

        {/* TOOLBAR */}
        <div
          className={`
            py-3.5
            px-6
            rounded-2xl
            mb-8
            flex
            justify-between
            items-center
            transition-all

            ${
              darkMode
                ? "glass-panel-dark"
                : "glass-panel-light"
            }
          `}
        >
          <span
            className={
              darkMode
                ? "text-[#aaa] text-[12px] font-medium tracking-wider"
                : "text-[#555] text-[12px] font-medium tracking-wider"
            }
          >
            {loading ? "..." : `${products.length.toString().padStart(2, "0")} PRODUCTS`}
          </span>

          <button
            className={`
              bg-transparent
              border-none
              text-[13px]
              font-medium
              cursor-pointer
              transition-colors

              ${
                darkMode
                  ? "text-[#ccc] hover:text-white"
                  : "text-[#555] hover:text-black"
              }
            `}
          >
            Sort by: Featured ↓
          </button>
        </div>

        {/* PRODUCT GRID */}
        {loading ? (
          <div className="py-20 text-center">
            <div
              className={`w-10 h-10 mx-auto mb-4 rounded-full border-2 border-t-transparent animate-spin ${
                darkMode ? "border-white" : "border-black"
              }`}
            />
            <p className={`text-sm ${darkMode ? "text-[#777]" : "text-[#777]"}`}>
              Loading Women's collection...
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-3
              gap-6
              max-[1000px]:grid-cols-2
              max-[650px]:grid-cols-1
            "
          >
            {products.map((product) => (
              <div
                className={`cursor-pointer group p-4 rounded-2xl transition-all ${
                  darkMode ? "glass-card-dark" : "glass-card-light"
                }`}
                key={product.id}
              >

              {/* IMAGE */}
              <div
                className={`
                  h-[360px]
                  rounded-xl
                  relative
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                  max-[650px]:h-[340px]

                  ${
                    darkMode
                      ? "bg-neutral-900/60"
                      : "bg-neutral-100/80"
                  }
                `}
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    block
                    transition-transform
                    duration-500
                    ease-in-out
                    group-hover:scale-105
                  "
                />

                {/* NUMBER */}
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-md absolute top-3 left-3 ${
                    darkMode ? "bg-black/50 text-white/80 border border-white/10" : "bg-white/70 text-black/80 border border-black/10"
                  }`}
                >
                  0{product.id}
                </span>

                {/* FAVORITE HEART BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!accessToken) {
                      setAuthModalConfig({
                        title: "Authentication Required",
                        message: "Please log in to your account to save products to your favorites list."
                      });
                      setAuthModalOpen(true);
                      return;
                    }
                    toggleFavorite(product);
                  }}
                  title={isFavorite(product.id) ? "Remove from Favorites" : "Add to Favorites"}
                  className={`
                    absolute
                    top-3
                    right-3
                    w-9.5
                    h-9.5
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    z-10
                    ${
                      isFavorite(product.id)
                        ? "bg-rose-500 text-white shadow-lg shadow-rose-500/40"
                        : darkMode
                        ? "glass-btn-dark hover:scale-110"
                        : "glass-btn-light hover:scale-110"
                    }
                  `}
                >
                  <Heart size={16} fill={isFavorite(product.id) ? "currentColor" : "none"} />
                </button>

                {/* QUICK ORDER BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!accessToken) {
                      setAuthModalConfig({
                        title: "Authentication Required",
                        message: "Please log in to your account to place orders."
                      });
                      setAuthModalOpen(true);
                      return;
                    }
                    placeOrder(product);
                    setOrderedProduct(product);
                    setOrderModalOpen(true);
                  }}
                  className={`
                    absolute
                    bottom-[18px]
                    right-[18px]
                    rounded-full
                    px-5
                    py-2.5
                    text-xs
                    font-medium
                    cursor-pointer
                    opacity-100
                    sm:opacity-0
                    translate-y-0
                    sm:translate-y-[10px]
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    flex
                    items-center
                    gap-1.5
                    shadow-lg

                    ${
                      darkMode
                        ? "bg-white text-black hover:bg-neutral-200"
                        : "bg-black text-white hover:bg-neutral-800"
                    }
                  `}
                >
                  <ShoppingBag size={14} />
                  Order
                </button>

              </div>

              {/* DETAILS */}
              <div
                className="
                  flex
                  justify-between
                  items-start
                  pt-4
                  px-1
                  pb-1
                "
              >

                <div>

                  <h2 className="text-[16px] font-medium mb-1">
                    {product.name}
                  </h2>

                  <p
                    className={
                      darkMode
                        ? "text-[#888] text-[12px]"
                        : "text-[#666] text-[12px]"
                    }
                  >
                    {product.category}
                  </p>

                </div>

                <span
                  className={
                    darkMode
                      ? "text-white text-[14px] font-semibold"
                      : "text-black text-[14px] font-semibold"
                  }
                >
                  {product.price}
                </span>

              </div>

            </div>
          ))}
        </div>
        )}
      </div>

      {/* POPUP MODALS */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        title={authModalConfig.title}
        message={authModalConfig.message}
      />

      <OrderSuccessModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        product={orderedProduct}
      />
    </section>
  );
};

export default WomenCollection;