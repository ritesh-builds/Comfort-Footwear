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
        px-[8%]
        py-[100px]
        transition-all
        duration-300
        max-[800px]:px-[25px]
        max-[800px]:py-[70px]

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
            justify-between
            items-end
            gap-[40px]
            mb-[70px]
            max-[800px]:flex-col
            max-[800px]:items-start
          "
        >
          <div>

            <span
              className={
                darkMode
                  ? "text-[12px] tracking-[4px] text-[#666]"
                  : "text-[12px] tracking-[4px] text-[#777]"
              }
            >
              OUR COLLECTION
            </span>

            {/* COLLECTION BUTTONS */}
            <div className="flex items-center gap-[10px] mt-[20px] mb-[10px]">

              <Link to="/Product/Men">
                <button
                  className={`
                    w-[100px]
                    h-[40px]
                    text-[16px]
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

              <Link to="/Product/Women">
                <button
                  className={`
                    w-[100px]
                    h-[40px]
                    text-[16px]
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
                text-[clamp(3.5rem,7vw,7rem)]
                leading-[0.9]
                font-normal
                tracking-[-5px]
                mt-[25px]
                mb-0
                max-[800px]:tracking-[-3px]
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
                ? "max-w-[350px] text-[#777] leading-[1.7] text-[14px]"
                : "max-w-[350px] text-[#666] leading-[1.7] text-[14px]"
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
            grid-cols-2
            gap-x-[25px]
            gap-y-[60px]
            max-[800px]:grid-cols-1
            max-[800px]:gap-y-[45px]
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
                  h-[480px]
                  overflow-hidden
                  relative
                  rounded-[12px]
                  max-[800px]:h-[400px]

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
                    bottom-[20px]
                    right-[20px]
                    px-[20px]
                    py-[12px]
                    border-none
                    rounded-[30px]
                    cursor-pointer
                    opacity-0
                    translate-y-[10px]
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
                  pt-[20px]
                  pb-[20px]
                  border-b

                  ${
                    darkMode
                      ? "border-[#222]"
                      : "border-[#ddd]"
                  }
                `}
              >

                <div>

                  <h2 className="text-[18px] font-normal m-0 mb-[7px]">
                    {product.name}
                  </h2>

                  <p
                    className={
                      darkMode
                        ? "text-[#666] text-[13px] m-0"
                        : "text-[#777] text-[13px] m-0"
                    }
                  >
                    {product.type}
                  </p>

                </div>

                <span
                  className={
                    darkMode
                      ? "text-[#ccc] text-[15px]"
                      : "text-[#555] text-[15px]"
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
