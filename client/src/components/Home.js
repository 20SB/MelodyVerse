import React from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import useAuthRedirect from "./useAuthRedirect";

const Home = () => {
    const navigate = useNavigate();
    const token = useAuthRedirect();

    if (!token) return null;

    const user = jwtDecode(token);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-4xl font-bold mb-4">Welcome to MelodyVerse, {user.email}</h1>
            <p className="mb-6">Enjoy streaming your favorite music with us!</p>
            <button
                onClick={handleLogout}
                className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
            >
                Logout
            </button>
        </div>
    );
};

export default Home;
