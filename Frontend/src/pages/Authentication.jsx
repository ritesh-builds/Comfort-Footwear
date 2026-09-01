import React, { useState } from "react";

import LoginForm from "../auth/login/LoginForm.jsx";
import CreateAccountForm from "../auth/createAccount/CreateAccountForm.jsx";

const Authentication = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <>
      {!isSignup ? (
        <LoginForm
          onSwitch={() => setIsSignup(true)}
        />
      ) : (
        <CreateAccountForm
          onSwitch={() => setIsSignup(false)}
        />
      )}
    </>
  );
};

export default Authentication;



























// import React, { useState } from "react";
// import { useTheme } from "../context/ThemeContext";

// function Login() {
//   const [isSignup, setIsSignup] = useState(false);
//   const { darkMode } = useTheme();

//   const [fullname, setFullname] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState()

//   const handleSubmit = (evt) => {
//     evt.preventDefault()
    
//   }

//   return (
//     <section
//       className={`min-h-screen px-[8%] py-[80px] flex items-center transition-all duration-300 max-[850px]:px-[25px] max-[850px]:py-[60px]

//         ${
//           darkMode
//             ? "bg-[#080808] text-white"
//             : "bg-[#f5f5f5] text-black"
//         }
//       `}
//     >
//       <div
//         className="
//           w-full
//           max-w-[1150px]
//           mx-auto
//           grid
//           grid-cols-[1fr_450px]
//           gap-[100px]
//           items-center
//           max-[850px]:grid-cols-1
//           max-[850px]:gap-[50px]
//         "
//       >
//         {/* BRAND */}
//         <div>

//           <span
//             className={`
//               text-[11px]
//               tracking-[5px]
//               ${
//                 darkMode
//                   ? "text-[#666]"
//                   : "text-[#777]"
//               }
//             `}
//           >
//             COMFORT FOOTWEAR
//           </span>

//           <h1
//             className="
//               text-[clamp(4rem,7vw,7rem)]
//               leading-[0.85]
//               font-normal
//               tracking-[-5px]
//               mt-[25px]
//               mb-[30px]
//               max-[850px]:text-[4.5rem]
//               max-[850px]:tracking-[-3px]
//             "
//           >
//             Step into
//             <br />

//             <strong
//               className={`
//                 font-normal
//                 ${
//                   darkMode
//                     ? "text-[#666]"
//                     : "text-[#888]"
//                 }
//               `}
//             >
//               comfort.
//             </strong>
//           </h1>

//           <p
//             className={`
//               max-w-[430px]
//               text-[14px]
//               leading-[1.8]
//               ${
//                 darkMode
//                   ? "text-[#777]"
//                   : "text-[#666]"
//               }
//             `}
//           >
//             Your comfort is just one step away.
//             Sign in to continue your journey with us.
//           </p>

//         </div>

//         {/* AUTH BOX */}
//         <form onSubmit={handleSubmit}>
//           <div
//           className={`
//             border
//             rounded-[16px]
//             p-[35px]
//             transition-all
//             duration-300
//             max-[850px]:max-w-[500px]
//             max-[850px]:w-full
//             max-[850px]:mx-auto

//             ${
//               darkMode
//                 ? "bg-[#0d0d0d] border-[#222]"
//                 : "bg-white border-[#ddd]"
//             }
//           `}
//         >

//           {/* TABS */}
//           <div
//             className={`
//               grid
//               grid-cols-2
//               gap-[5px]
//               border
//               p-[5px]
//               rounded-[8px]

//               ${
//                 darkMode
//                   ? "bg-[#080808] border-[#1d1d1d]"
//                   : "bg-[#f5f5f5] border-[#ddd]"
//               }
//             `}
//           >

//             <button
//               className={`
//                 border-none
//                 py-[11px]
//                 rounded-[6px]
//                 cursor-pointer
//                 text-[13px]
//                 transition-all
//                 duration-300

//                 ${
//                   !isSignup
//                     ? darkMode
//                       ? "bg-[#1a1a1a] text-white"
//                       : "bg-white text-black"
//                     : darkMode
//                       ? "bg-transparent text-[#666]"
//                       : "bg-transparent text-[#888]"
//                 }
//               `}
//               onClick={() => setIsSignup(false)}
//             >
//               Login
//             </button>

//             <button
//               className={`
//                 border-none
//                 py-[11px]
//                 rounded-[6px]
//                 cursor-pointer
//                 text-[13px]
//                 transition-all
//                 duration-300

//                 ${
//                   isSignup
//                     ? darkMode
//                       ? "bg-[#1a1a1a] text-white"
//                       : "bg-white text-black"
//                     : darkMode
//                       ? "bg-transparent text-[#666]"
//                       : "bg-transparent text-[#888]"
//                 }
//               `}
//               onClick={() => setIsSignup(true)}
//             >
//               Sign Up
//             </button>

//           </div>

//           {/* HEADING */}
//           <div className="mt-[35px] mb-[28px]">

//             <h2 className="text-[25px] font-normal mb-[8px]">
//               {isSignup ? "Create account" : "Welcome back"}
//             </h2>

//             <p
//               className={
//                 darkMode
//                   ? "text-[#666] text-[13px]"
//                   : "text-[#777] text-[13px]"
//               }
//             >
//               {isSignup
//                 ? "Create your account to get started."
//                 : "Enter your details to continue."}
//             </p>

//           </div>

//           {/* FULL NAME */}
//           {isSignup && (
//             <div className="mb-[18px]">

//               <label
//                 className={`
//                   block
//                   text-[12px]
//                   mb-[8px]
//                   ${
//                     darkMode
//                       ? "text-[#888]"
//                       : "text-[#666]"
//                   }
//                 `}
//               >
//                 Full Name
//               </label>

//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className={`
//                   w-full
//                   box-border
//                   border
//                   rounded-[7px]
//                   outline-none
//                   text-[13px]
//                   font-inherit
//                   py-[14px]
//                   px-[15px]
//                   transition-all
//                   duration-300

//                   ${
//                     darkMode
//                       ? `
//                         bg-[#080808]
//                         border-[#242424]
//                         text-white
//                         placeholder:text-[#444]
//                         focus:border-[#555]
//                       `
//                       : `
//                         bg-[#f8f8f8]
//                         border-[#ddd]
//                         text-black
//                         placeholder:text-[#999]
//                         focus:border-[#999]
//                       `
//                   }
//                 `}
//                 value={fullname}
//                 onChange={(evt) => {
//                   console.log(fullname);
//                   setFullname(evt.target.value)
                  
//                 }}
//               />

//             </div>
//           )}

//           {/* EMAIL */}
//           <div className="mb-[18px]">

//             <label
//               className={`
//                 block
//                 text-[12px]
//                 mb-[8px]
//                 ${
//                   darkMode
//                     ? "text-[#888]"
//                     : "text-[#666]"
//                 }
//               `}
//             >
//               Email
//             </label>

//             <input
//               type="email"
//               placeholder="you@example.com"
//               className={`
//                 w-full
//                 box-border
//                 border
//                 rounded-[7px]
//                 outline-none
//                 text-[13px]
//                 font-inherit
//                 py-[14px]
//                 px-[15px]
//                 transition-all
//                 duration-300

//                 ${
//                   darkMode
//                     ? `
//                       bg-[#080808]
//                       border-[#242424]
//                       text-white
//                       placeholder:text-[#444]
//                       focus:border-[#555]
//                     `
//                     : `
//                       bg-[#f8f8f8]
//                       border-[#ddd]
//                       text-black
//                       placeholder:text-[#999]
//                       focus:border-[#999]
//                     `
//                 }
//               `}
//               value={email}
//               onChange={(evt) => {
//                 console.log(email);
                
//                 setEmail(evt.target.value)
//               }}
//             />

//           </div>

//           {/* PASSWORD */}
//           <div className="mb-[18px]">

//             <label
//               className={`
//                 block
//                 text-[12px]
//                 mb-[8px]
//                 ${
//                   darkMode
//                     ? "text-[#888]"
//                     : "text-[#666]"
//                 }
//               `}
//             >
//               Password
//             </label>

//             <input
//               type="password"
//               placeholder="••••••••"
//               className={`
//                 w-full
//                 box-border
//                 border
//                 rounded-[7px]
//                 outline-none
//                 text-[13px]
//                 font-inherit
//                 py-[14px]
//                 px-[15px]
//                 transition-all
//                 duration-300

//                 ${
//                   darkMode
//                     ? `
//                       bg-[#080808]
//                       border-[#242424]
//                       text-white
//                       placeholder:text-[#444]
//                       focus:border-[#555]
//                     `
//                     : `
//                       bg-[#f8f8f8]
//                       border-[#ddd]
//                       text-black
//                       placeholder:text-[#999]
//                       focus:border-[#999]
//                     `
//                 }
//               `}
//               value={password}
//               onChange={(evt) => {
//                 console.log(password);
                
//                 setPassword(evt.target.value)
//               }}
//             />

//           </div>

//           {/* CONFIRM PASSWORD */}

//           {/* {isSignup && (
//             <div className="mb-[18px]">

//               <label
//                 className={`
//                   block
//                   text-[12px]
//                   mb-[8px]
//                   ${
//                     darkMode
//                       ? "text-[#888]"
//                       : "text-[#666]"
//                   }
//                 `}
//               >
//                 Confirm Password
//               </label>

//               <input
//                 type="password"
//                 placeholder="••••••••"
//                 className={`
//                   w-full
//                   box-border
//                   border
//                   rounded-[7px]
//                   outline-none
//                   text-[13px]
//                   font-inherit
//                   py-[14px]
//                   px-[15px]
//                   transition-all
//                   duration-300

//                   ${
//                     darkMode
//                       ? `
//                         bg-[#080808]
//                         border-[#242424]
//                         text-white
//                         placeholder:text-[#444]
//                         focus:border-[#555]
//                       `
//                       : `
//                         bg-[#f8f8f8]
//                         border-[#ddd]
//                         text-black
//                         placeholder:text-[#999]
//                         focus:border-[#999]
//                       `
//                   }
//                 `}
//                 value={confirmPassword}
//                 onClick={(evt) => {
//                   setConfirmPassword(evt.target.value)
//                   console.log(confirmPassword);
//                 }}
//               />

//             </div>
//           )} */}

//           {/* FORGOT PASSWORD */}
//           {!isSignup && (
//             <div className="text-right mt-[-5px] mb-[20px]">

//               <button
//                 className={`
//                   border-none
//                   bg-transparent
//                   cursor-pointer
//                   text-[12px]
//                   transition-colors
//                   duration-300
//                   ${
//                     darkMode
//                       ? "text-[#777] hover:text-white"
//                       : "text-[#777] hover:text-black"
//                   }
//                 `}
//               >
//                 Forgot password?
//               </button>

//             </div>
//           )}

//           {/* SUBMIT */}
//           <button
//             className={`
//               w-full
//               py-[15px]
//               border
//               rounded-[8px]
//               cursor-pointer
//               text-[13px]
//               transition-all
//               duration-300

//               ${
//                 darkMode
//                   ? `
//                     border-white
//                     bg-white
//                     text-black
//                     hover:bg-transparent
//                     hover:text-white
//                   `
//                   : `
//                     border-black
//                     bg-black
//                     text-white
//                     hover:bg-transparent
//                     hover:text-black
//                   `
//               }
//             `}
//           >
//             {isSignup ? "Create Account →" : "Login →"}
//           </button>

//           {/* SWITCH */}
//           <div
//             className={`
//               flex
//               justify-center
//               gap-[5px]
//               mt-[25px]
//               text-[12px]
//               ${
//                 darkMode
//                   ? "text-[#555]"
//                   : "text-[#888]"
//               }
//             `}
//           >

//             <span>
//               {isSignup
//                 ? "Already have an account?"
//                 : "Don't have an account?"}
//             </span>

//             <button
//               onClick={() => setIsSignup(!isSignup)}
//               className={`
//                 border-none
//                 bg-transparent
//                 cursor-pointer
//                 transition-colors
//                 duration-300

//                 ${
//                   darkMode
//                     ? "text-[#aaa] hover:text-white"
//                     : "text-[#666] hover:text-black"
//                 }
//               `}
//             >
//               {isSignup ? "Login" : "Sign Up"}
//             </button>

//           </div>

//         </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Login;