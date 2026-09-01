import React from "react";
import { useTheme } from "../context/ThemeContext";

const MenCollection = () => {
  const { darkMode } = useTheme();

  const products = [
    {
      id: 1,
      name: "Aero Runner",
      category: "Running",
      price: "₹2,999",
    },
    {
      id: 2,
      name: "Urban Classic",
      category: "Casual",
      price: "₹2,499",
    },
    {
      id: 3,
      name: "Street Form",
      category: "Sneakers",
      price: "₹3,499",
    },
    {
      id: 4,
      name: "Daily Walk",
      category: "Lifestyle",
      price: "₹2,799",
    },
    {
      id: 5,
      name: "Flex Motion",
      category: "Sports",
      price: "₹3,199",
    },
    {
      id: 6,
      name: "Essential Low",
      category: "Everyday",
      price: "₹2,299",
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
        max-[650px]:px-[25px]
        max-[650px]:py-[70px]

        ${
          darkMode
            ? "bg-[#080808] text-white"
            : "bg-[#f5f5f5] text-black"
        }
      `}
    >
      {/* HEADER */}
      <div className="max-w-[700px] mb-[70px]">

        <span
          className={
            darkMode
              ? "text-[11px] tracking-[4px] text-[#666]"
              : "text-[11px] tracking-[4px] text-[#777]"
          }
        >
          MEN'S COLLECTION
        </span>

        <h1
          className="
            text-[clamp(4rem,8vw,8rem)]
            leading-[0.85]
            font-normal
            tracking-[-6px]
            my-[25px]
            max-[650px]:tracking-[-3px]
          "
        >
          Made to{" "}
          <strong
            className={
              darkMode
                ? "text-[#666] font-normal"
                : "text-[#888] font-normal"
            }
          >
            move.
          </strong>
        </h1>

        <p
          className={
            darkMode
              ? "max-w-[450px] text-[#777] text-[14px] leading-[1.8]"
              : "max-w-[450px] text-[#666] text-[14px] leading-[1.8]"
          }
        >
          Explore footwear designed for everyday comfort,
          effortless movement, and modern style.
        </p>

      </div>

      {/* TOOLBAR */}
      <div
        className={`
          border-t
          border-b
          py-[18px]
          mb-[35px]
          flex
          justify-between
          items-center

          ${
            darkMode
              ? "border-[#222]"
              : "border-[#ddd]"
          }
        `}
      >
        <span
          className={
            darkMode
              ? "text-[#555] text-[11px] tracking-[2px]"
              : "text-[#888] text-[11px] tracking-[2px]"
          }
        >
          06 PRODUCTS
        </span>

        <button
          className={`
            bg-transparent
            border-none
            text-[12px]
            cursor-pointer
            transition-colors
            duration-300

            ${
              darkMode
                ? "text-[#777] hover:text-white"
                : "text-[#777] hover:text-black"
            }
          `}
        >
          Sort by: Featured ↓
        </button>
      </div>

      {/* PRODUCT GRID */}
      <div
        className="
          grid
          grid-cols-3
          gap-x-[20px]
          gap-y-[45px]
          max-[1000px]:grid-cols-2
          max-[650px]:grid-cols-1
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
                h-[420px]
                border
                rounded-[12px]
                relative
                overflow-hidden
                flex
                items-center
                justify-center
                max-[650px]:h-[380px]

                ${
                  darkMode
                    ? "bg-[#111] border-[#1d1d1d]"
                    : "bg-white border-[#ddd]"
                }
              `}
            >

              {/* SHOE */}
              <div
                className="
                  text-[110px]
                  grayscale
                  opacity-80
                  rotate-[-12deg]
                  transition-transform
                  duration-500
                  ease-in-out
                  group-hover:scale-[1.12]
                "
              >
                👟
              </div>

              {/* NUMBER */}
              <span
                className={
                  darkMode
                    ? "absolute top-[18px] left-[18px] text-[#555] text-[11px]"
                    : "absolute top-[18px] left-[18px] text-[#999] text-[11px]"
                }
              >
                0{product.id}
              </span>

              {/* QUICK VIEW */}
              <button
                className={`
                  absolute
                  bottom-[18px]
                  right-[18px]
                  border-none
                  rounded-[30px]
                  px-[18px]
                  py-[11px]
                  text-[12px]
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
                Quick View →
              </button>

            </div>

            {/* DETAILS */}
            <div
              className={`
                flex
                justify-between
                items-start
                px-[2px]
                py-[18px]
                border-b

                ${
                  darkMode
                    ? "border-[#222]"
                    : "border-[#ddd]"
                }
              `}
            >

              <div>

                <h2 className="text-[16px] font-normal mb-[6px]">
                  {product.name}
                </h2>

                <p
                  className={
                    darkMode
                      ? "text-[#666] text-[12px]"
                      : "text-[#888] text-[12px]"
                  }
                >
                  {product.category}
                </p>

              </div>

              <span
                className={
                  darkMode
                    ? "text-[#aaa] text-[13px]"
                    : "text-[#555] text-[13px]"
                }
              >
                {product.price}
              </span>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default MenCollection;