import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Product() {
  const { darkMode } = useTheme();

  const products = [
    {
      id: 1,
      name: "Urban Runner",
      type: "Everyday Sneakers",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 2,
      name: "Classic Walk",
      type: "Comfort Shoes",
      price: "₹2,999",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    },
    {
      id: 3,
      name: "Street Flex",
      type: "Casual Sneakers",
      price: "₹3,499",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3",
    },
    {
      id: 4,
      name: "Daily Comfort",
      type: "Lifestyle Shoes",
      price: "₹2,799",
      image:
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3",
    },
  ];

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

                {/* VIEW BUTTON */}
                <button
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

                    ${
                      darkMode
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }
                  `}
                >
                  View →
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

      </div>
    </section>
  );
}

export default Product;
