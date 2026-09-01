import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={
        ` fixed
          top-0
          left-0
          w-full
          flex
          items-center
          justify-between
          px-10
          py-5
          z-[100]
          border-b
          transition-all
          duration-300
        ${
          darkMode
            ? "bg-[#080808] border-[#1f1f1f]"
            : "bg-[#f5f5f5] border-[#dddddd]"
        }
      `}
    >
      {/* LOGO */}
      <Link
        to="/"
        className={ `
          no-underline
          ${
            darkMode
              ? "text-white"
              : "text-black"
          }
        `}
      >
        <h3
          className="
            text-[20px]
            font-medium
            tracking-[-1px]
            m-0
          "
        >
          Comfort Footwear
        </h3>
      </Link>

      {/* NAV LINKS */}
      <div className="flex items-center gap-10">

        <NavLink
          to="/"
          className={({ isActive }) => `
            ${
              darkMode
                ? isActive
                  ? "text-white"
                  : "text-[#888] hover:text-white"
                : isActive
                  ? "text-black"
                  : "text-[#666] hover:text-black"
            }
            no-underline
            text-[17px]
            transition-colors
            duration-300
            ${
              darkMode
                ? "text-[#888] hover:text-white"
                : "text-[#666] hover:text-black"
            }
          `}
        >
          Home
        </NavLink>

        <NavLink
          to="/About"
          className={({isActive}) => 
            `
          ${ darkMode ? isActive
                ? "text-white"
                : "text-[#888] hover:text-white"
              : isActive
                ? "text-black"
                : "text-[#666] hover:text-black"
          }
            no-underline
            text-[17px]
            transition-colors
            duration-300
            ${
              darkMode
                ? "text-[#888] hover:text-white"
                : "text-[#666] hover:text-black"
            }
          `
          }
        >
          About
        </NavLink>

        <NavLink
          to="/Contact"
          className={({isActive}) => 
            `
            ${
              darkMode
                ? isActive
                  ? "text-white"
                  : "text-[#888] hover:text-white"
                : isActive
                  ? "text-black"
                  : "text-[#666] hover:text-black"
            }
            no-underline
            text-[17px]
            transition-colors
            duration-300
            ${
              darkMode
                ? "text-[#888] hover:text-white"
                : "text-[#666] hover:text-black"
            }
          `
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/Product"
          className={(({isActive}) => 
          ` 
          ${darkMode
            ? isActive
              ? "text-white"
              : "text-[#888] hover:text-white"
            : isActive
              ? "text-black"
              : "text-[#666] hover:text-black"
          }
            no-underline
            text-[17px]
            transition-colors
            duration-300
            ${
              darkMode
                ? "text-[#888] hover:text-white"
                : "text-[#666] hover:text-black"
            }
          `
          )}
        >
          Product
        </NavLink>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3.75">

        {/* THEME BUTTON */}
        <button
          onClick={toggleTheme}
          className={`
            w-10
            h-10
            rounded-full
            cursor-pointer
            text-[18px]
            flex
            items-center
            justify-center
            transition-all
            duration-300

            ${
              darkMode
                ? "bg-[#111] border border-[#333]"
                : "bg-white border border-[#ccc]"
            }
          `}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* LOGIN */}
        <Link
          to="/login"
          className={`
            px-5
            py-2.5
            rounded-[25px]
            border
            no-underline
            text-[14px]
            transition-all
            duration-300

            ${
              darkMode
                ? "border-[#444] text-white hover:bg-white hover:text-black hover:border-white"
                : "border-[#bbb] text-black hover:bg-black hover:text-white hover:border-black"
            }
          `}
        >
          Login / Sign Up
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;





// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useTheme } from "../context/ThemeContext";

// function Navbar() {
//   const { darkMode, toggleTheme } = useTheme();

//   const navLinkStyle = ({ isActive }) => `
//     no-underline
//     text-[17px]
//     transition-colors
//     duration-300
//     ${
//       darkMode
//         ? isActive
//           ? "text-white"
//           : "text-[#888] hover:text-white"
//         : isActive
//           ? "text-black"
//           : "text-[#666] hover:text-black"
//     }
//   `;

//   return (
//     <nav
//       className={`
//         w-full
//         flex
//         items-center
//         justify-between
//         px-[40px]
//         py-[20px]
//         relative
//         z-100
//         border-b
//         transition-all
//         duration-300

//         ${
//           darkMode
//             ? "bg-[#080808] border-[#1f1f1f]"
//             : "bg-[#f5f5f5] border-[#dddddd]"
//         }
//       `}
//     >

//       {/* LOGO */}
//       <Link
//         to="/"
//         className={`
//           no-underline
//           ${darkMode ? "text-white" : "text-black"}
//         `}
//       >
//         <h3
//           className="
//             text-[20px]
//             font-medium
//             tracking-[-1px]
//             m-0
//           "
//         >
//           Comfort Footwear
//         </h3>
//       </Link>


//       {/* NAV LINKS */}
//       <div className="flex items-center gap-[40px]">

//         <NavLink to="/" className={navLinkStyle}>
//           Home
//         </NavLink>

//         <NavLink to="/About" className={navLinkStyle}>
//           About
//         </NavLink>

//         <NavLink to="/Contact" className={navLinkStyle}>
//           Contact
//         </NavLink>

//         <NavLink to="/Product" className={navLinkStyle}>
//           Product
//         </NavLink>

//       </div>


//       {/* RIGHT SIDE */}
//       <div className="flex items-center gap-[15px]">

//         {/* THEME BUTTON */}
//         <button
//           onClick={toggleTheme}
//           className={`
//             w-[40px]
//             h-[40px]
//             rounded-full
//             cursor-pointer
//             text-[18px]
//             flex
//             items-center
//             justify-center
//             transition-all
//             duration-300

//             ${
//               darkMode
//                 ? "bg-[#111] border border-[#333]"
//                 : "bg-white border border-[#ccc]"
//             }
//           `}
//         >
//           {darkMode ? "☀️" : "🌙"}
//         </button>


//         {/* LOGIN */}
//         <Link
//           to="/login"
//           className={`
//             px-[20px]
//             py-[10px]
//             rounded-[25px]
//             border
//             no-underline
//             text-[14px]
//             transition-all
//             duration-300

//             ${
//               darkMode
//                 ? "border-[#444] text-white hover:bg-white hover:text-black hover:border-white"
//                 : "border-[#bbb] text-black hover:bg-black hover:text-white hover:border-black"
//             }
//           `}
//         >
//           Login / Sign Up
//         </Link>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;