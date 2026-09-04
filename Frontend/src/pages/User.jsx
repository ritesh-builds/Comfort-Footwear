import { useParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

function User() {
    const { userId } = useParams();
    const { darkMode } = useTheme();

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axiosInstance.get("/api/user/hello");

                console.log(
                    "Protected API response:",
                    response.data
                );
            } catch (error) {
                console.log("Error:", error);
            }
        };

        getUser();
    }, []);

    return (
        <div
            className={`
                min-h-screen
                px-6
                py-24
                flex
                items-center
                justify-center
                transition-all
                duration-300

                ${
                    darkMode
                        ? "bg-[#080808] text-white"
                        : "bg-[#f5f5f5] text-black"
                }
            `}
        >
            <div
                className={`
                    w-full
                    max-w-2xl
                    rounded-3xl
                    p-8
                    sm:p-10
                    border
                    shadow-2xl
                    transition-all
                    duration-300

                    ${
                        darkMode
                            ? "bg-[#111111] border-white/10 shadow-black/40"
                            : "bg-white border-black/10 shadow-black/10"
                    }
                `}
            >
                {/* Profile Header */}
                <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <div
                        className="
                            w-24
                            h-24
                            rounded-full
                            flex
                            items-center
                            justify-center
                            text-4xl
                            font-bold
                            bg-gradient-to-br
                            from-orange-500
                            to-red-500
                            text-white
                            shadow-lg
                            shadow-orange-500/20
                        "
                    >
                        U
                    </div>

                    <h1 className="mt-5 text-3xl font-bold">
                        Welcome, {userId} 👋
                    </h1>

                    <p
                        className={`
                            mt-2
                            text-sm
                            ${
                                darkMode
                                    ? "text-gray-400"
                                    : "text-gray-500"
                            }
                        `}
                    >
                        Here's your account information
                    </p>
                </div>

                {/* User Information */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div
                        className={`
                            rounded-2xl
                            p-5
                            ${
                                darkMode
                                    ? "bg-white/5"
                                    : "bg-gray-50"
                            }
                        `}
                    >
                        <p className="text-sm text-gray-500">
                            User ID
                        </p>

                        <p className="mt-2 font-semibold break-all">
                            {userId}
                        </p>
                    </div>

                    <div
                        className={`
                            rounded-2xl
                            p-5
                            ${
                                darkMode
                                    ? "bg-white/5"
                                    : "bg-gray-50"
                            }
                        `}
                    >
                        <p className="text-sm text-gray-500">
                            Account Status
                        </p>

                        <p className="mt-2 font-semibold text-green-500">
                            ● Active
                        </p>
                    </div>
                </div>

                {/* Protected API */}
                <div
                    className={`
                        mt-4
                        rounded-2xl
                        p-5
                        border
                        ${
                            darkMode
                                ? "border-orange-500/20 bg-orange-500/5"
                                : "border-orange-500/20 bg-orange-50"
                        }
                    `}
                >
                    <p className="text-sm text-gray-500">
                        Authentication
                    </p>

                    <p className="mt-2 font-semibold">
                        🔐 Protected User Area
                    </p>

                    <p
                        className={`
                            mt-1
                            text-sm
                            ${
                                darkMode
                                    ? "text-gray-400"
                                    : "text-gray-600"
                            }
                        `}
                    >
                        Your session is authenticated and protected.
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    {/* <p
                        className={`
                            text-sm
                            ${ 
                                darkMode
                                    ? "text-gray-500"
                                    : "text-gray-400"
                            }
                        `}
                    >
                        User ID: {userId}
                    </p> */}
                </div>
            </div>
        </div>
    );
}

export default User;