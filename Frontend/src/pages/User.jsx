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

                const response =
                    await axiosInstance.get("/api/user/hello");

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
                px-[8%]
                py-25
                flex
                items-center
                transition-all
                duration-300
                max-[800px]:px-6.25
                max-[800px]:py-17.5

                ${
                    darkMode
                        ? "bg-[#080808] text-white"
                        : "bg-[#f5f5f5] text-black"
                }
            `}
        >
            User: {userId}
        </div>
    );
}

export default User;