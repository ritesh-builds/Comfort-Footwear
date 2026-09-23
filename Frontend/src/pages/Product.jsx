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
        transition-all
        duration-300

        ${
          darkMode
            ? "bg-[#080808] text-white"
            : "bg-[#f5f5f5] text-black"
        }
      `}
    >
      <div className="max-w-[1250px] mx-auto">

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
                  ? "text-[11px] sm:text-[12px] tracking-[4px] text-[#666] uppercase font-medium"
                  : "text-[11px] sm:text-[12px] tracking-[4px] text-[#777] uppercase font-medium"
              }
            >
              OUR COLLECTION
            </span>

            {/* COLLECTION BUTTONS */}
            <div className="flex items-center gap-[10px] mt-[15px] mb-[10px]">

              <Link to="/Product/Men" className="no-underline">
                <button
                  className={`
                    w-[90px]
                    sm:w-[100px]
                    h-[38px]
                    sm:h-[40px]
                    text-[14px]
                    sm:text-[16px]
                    font-bold
                    rounded-[20px]
                    border
                    cursor-pointer
                    transition-all
                    duration-200

                    ${
                      darkMode
                        ? `
                          bg-[#080808]
                          text-white
                          border-white
                          hover:bg-white
                          hover:text-[#080808]
                        `
                        : `
                          bg-white
                          text-black
                          border-black
                          hover:bg-black
                          hover:text-white
                        `
                    }
                  `}
                >
                  Men
                </button>
              </Link>

              <Link to="/Product/Women" className="no-underline">
                <button
                  className={`
                    w-[90px]
                    sm:w-[100px]
                    h-[38px]
                    sm:h-[40px]
                    text-[14px]
                    sm:text-[16px]
                    font-bold
                    rounded-[20px]
                    border
                    cursor-pointer
                    transition-all
                    duration-200

                    ${
                      darkMode
                        ? `
                          bg-[#080808]
                          text-white
                          border-white
                          hover:bg-white
                          hover:text-[#080808]
                        `
                        : `
                          bg-white
                          text-black
                          border-black
                          hover:bg-black
                          hover:text-white
                        `
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
                    ? "text-[#666] font-normal"
                    : "text-[#888] font-normal"
                }
              >
                comfort.
              </strong>
            </h1>

          </div>

          <p
            className={
              darkMode
                ? "max-w-[350px] text-[#777] leading-[1.7] text-[13px] sm:text-[14px]"
                : "max-w-[350px] text-[#666] leading-[1.7] text-[13px] sm:text-[14px]"
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
              gap-x-[25px]
              gap-y-10
              sm:gap-y-[60px]
            "
          >
            {products.map((product) => (
            <div
              className="cursor-pointer group"
              key={product.id}
            >

              {/* IMAGE */}
              <div
                className={`
                  h-[300px]
                  sm:h-[400px]
                  md:h-[480px]
                  overflow-hidden
                  relative
                  rounded-[12px]

                  ${
                    darkMode
                      ? "bg-[#111]"
                      : "bg-white"
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
                    w-9
                    h-9
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    backdrop-blur-md
                    transition-all
                    duration-300
                    z-10
                    ${
                      isFavorite(product.id)
                        ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30"
                        : darkMode
                        ? "bg-black/40 text-white hover:bg-black/80"
                        : "bg-white/80 text-black hover:bg-white"
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
                    px-[16px]
                    sm:px-[20px]
                    py-[10px]
                    sm:py-[12px]
                    border-none
                    rounded-[30px]
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

                    ${
                      darkMode
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }
                  `}
                >
                  <ShoppingBag size={14} />
                  Order Now
                </button>

              </div>

              {/* DETAILS */}
              <div
                className={`
                  flex
                  justify-between
                  items-start
                  pt-[15px]
                  sm:pt-[20px]
                  pb-[15px]
                  sm:pb-[20px]
                  border-b

                  ${
                    darkMode
                      ? "border-[#222]"
                      : "border-[#ddd]"
                  }
                `}
              >

                <div>

                  <h2 className="text-[17px] sm:text-[18px] font-normal m-0 mb-[5px] sm:mb-[7px]">
                    {product.name}
                  </h2>

                  <p
                    className={
                      darkMode
                        ? "text-[#666] text-[12px] sm:text-[13px] m-0"
                        : "text-[#777] text-[12px] sm:text-[13px] m-0"
                    }
                  >
                    {product.type}
                  </p>

                </div>

                <span
                  className={
                    darkMode
                      ? "text-[#ccc] text-[14px] sm:text-[15px] font-medium"
                      : "text-[#555] text-[14px] sm:text-[15px] font-medium"
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
