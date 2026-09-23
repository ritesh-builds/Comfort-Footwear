import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";
import { Heart, ShoppingBag } from "lucide-react";
import { fetchProducts } from "../api/productService";
import AuthModal from "../components/AuthModal";
import OrderSuccessModal from "../components/OrderSuccessModal";

function Product() {
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
      const data = await fetchProducts("all");
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
        px-4
        sm:px-8
        lg:px-[8%]
        relative
        overflow-hidden
        transition-all
        duration-300

        ${
          darkMode
            ? "bg-[#080808] text-white"
            : "bg-gradient-to-br from-[#f0f4f9] via-[#e5ecf5] to-[#f4f7fb] text-black"
        }
      `}
    >
      {/* AMBIENT BACKGROUND GLOW ORBS */}
      <div className="glass-orb w-[540px] h-[540px] -top-30 -right-20 opacity-80 dark:opacity-20 bg-gradient-to-br from-indigo-400/50 via-purple-400/40 to-pink-400/45 blur-[95px]" />
      <div className="glass-orb w-[500px] h-[500px] top-[40%] -left-30 opacity-75 dark:opacity-15 bg-gradient-to-tr from-cyan-400/45 via-teal-400/40 to-blue-400/40 blur-[100px]" />

      <div className="max-w-[1250px] mx-auto relative z-10">

        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-start
            md:items-end
            gap-6
            md:gap-[40px]
            mb-10
            md:mb-[70px]
          "
        >
          <div>

            <span
              className={
                darkMode
                  ? "glass-badge glass-badge-dark mb-2"
                  : "glass-badge glass-badge-light mb-2"
              }
            >
              OUR COLLECTION
            </span>

            {/* COLLECTION BUTTONS */}
            <div className="flex items-center gap-3 mt-4 mb-3">

              <Link to="/Product/Men" className="no-underline">
                <button
                  className={`
                    px-5
                    py-2
                    text-[14px]
                    font-semibold
                    rounded-full
                    cursor-pointer
                    transition-all
                    duration-200
                    ${
                      darkMode
                        ? "glass-btn-dark hover:bg-white hover:text-black"
                        : "glass-btn-light hover:bg-black hover:text-white"
                    }
                  `}
                >
                  Men
                </button>
              </Link>

              <Link to="/Product/Women" className="no-underline">
                <button
                  className={`
                    px-5
                    py-2
                    text-[14px]
                    font-semibold
                    rounded-full
                    cursor-pointer
                    transition-all
                    duration-200
                    ${
                      darkMode
                        ? "glass-btn-dark hover:bg-white hover:text-black"
                        : "glass-btn-light hover:bg-black hover:text-white"
                    }
                  `}
                >
                  Women
                </button>
              </Link>

            </div>

            <h1
              className="
                text-[clamp(2.5rem,6.5vw,6.5rem)]
                leading-[0.9]
                font-normal
                tracking-[-2px]
                sm:tracking-[-4px]
                md:tracking-[-5px]
                mt-4
                mb-0
              "
            >
              Find your{" "}
              <strong
                className={
                  darkMode
                    ? "bg-gradient-to-r from-neutral-400 to-white bg-clip-text text-transparent font-normal"
                    : "bg-gradient-to-r from-neutral-500 to-black bg-clip-text text-transparent font-normal"
                }
              >
                comfort.
              </strong>
            </h1>

          </div>

          <p
            className={
              darkMode
                ? "max-w-[350px] text-[#aaa] leading-[1.7] text-[13px] sm:text-[14px]"
                : "max-w-[350px] text-[#555] leading-[1.7] text-[13px] sm:text-[14px]"
            }
          >
            Carefully designed footwear that combines
            everyday comfort with modern style.
          </p>

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
              Loading footwear collection...
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-6
              sm:gap-8
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
                  h-[300px]
                  sm:h-[380px]
                  md:h-[440px]
                  overflow-hidden
                  relative
                  rounded-xl

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
                    duration-[600ms]
                    ease-in-out
                    group-hover:scale-[1.05]
                  "
                />

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

                {/* ORDER BUTTON */}
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
                    bottom-[15px]
                    sm:bottom-[20px]
                    right-[15px]
                    sm:right-[20px]
                    px-5
                    py-2.5
                    rounded-full
                    text-xs
                    sm:text-sm
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
                  Order Now
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
                  pb-2
                "
              >

                <div>

                  <h2 className="text-[17px] sm:text-[18px] font-medium m-0 mb-1">
                    {product.name}
                  </h2>

                  <p
                    className={
                      darkMode
                        ? "text-[#888] text-[12px] sm:text-[13px] m-0"
                        : "text-[#666] text-[12px] sm:text-[13px] m-0"
                    }
                  >
                    {product.type}
                  </p>

                </div>

                <span
                  className={
                    darkMode
                      ? "text-white text-[14px] sm:text-[15px] font-semibold"
                      : "text-black text-[14px] sm:text-[15px] font-semibold"
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
}

export default Product;
