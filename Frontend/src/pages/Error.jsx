import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <section
      className="
        min-h-screen
        bg-[#080808]
        text-white
        flex
        items-center
        justify-center
        relative
        overflow-hidden
        p-[40px]
        max-[600px]:p-[25px]
      "
    >
      <div
        className="
          text-center
          relative
          z-[2]
        "
      >
        {/* 404 */}
        <span
          className="
            text-[100px]
            tracking-[5px]
            text-[#555]
          "
        >
          404
        </span>

        {/* HEADING */}
        <h1
          className="
            text-[clamp(4rem,9vw,9rem)]
            leading-[0.85]
            font-normal
            tracking-[-6px]
            my-[25px]
            max-[600px]:tracking-[-3px]
          "
        >
          Looks like
          <br />
          you're{" "}
          <strong className="text-[#666] font-normal">
            lost.
          </strong>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            max-w-[420px]
            mx-auto
            text-[#777]
            text-[14px]
            leading-[1.8]
          "
        >
          The page you're looking for doesn't exist
          or may have been moved somewhere else.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="
              inline-block
              mt-[30px]
              px-[24px]
              py-[14px]
              border
              border-[#444]
              rounded-[30px]
              text-white
              no-underline
              text-[13px]
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              hover:border-white
            "
          >
            ← Back to Home
          </Link>

          <button
            className="
              inline-block
              mt-[30px]
              ml-[20px]
              px-[24px]
              py-[14px]
              border-2
              border-[#444]
              rounded-[30px]
              cursor-pointer
              text-white
              bg-[#080808]
              text-[13px]
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              hover:border-white
            "
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </div>
      </div>

      {/* SHOE */}
      <div
        className="
          absolute
          right-[8%]
          bottom-[8%]
          text-[100px]
          opacity-[0.04]
          rotate-[-15deg]
          max-[600px]:text-[70px]
          max-[600px]:right-[5%]
        "
      >
        👟
      </div>
    </section>
  );
}

export default Error;