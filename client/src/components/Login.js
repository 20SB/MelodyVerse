import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import useAuthRedirect from "./useAuthRedirect";
import CryptoJS from "crypto-js";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const SECRET_KEY = "your-secret-key";

const encrypt = (data) => {
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

const decrypt = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};

const Login = () => {
    useAuthRedirect(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const encryptedEmail = localStorage.getItem("encryptedEmail");
        const encryptedPassword = localStorage.getItem("encryptedPassword");

        if (encryptedEmail && encryptedPassword) {
            const email = decrypt(encryptedEmail);
            const password = decrypt(encryptedPassword);
            setEmail(email);
            setPassword(password);
            console.log("Decrypted Email:", email);
            console.log("Decrypted Password:", password);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/login", {
                email,
                password,
            });
            const token = response.data.token;
            localStorage.setItem("token", token);

            if (rememberMe) {
                localStorage.setItem("encryptedEmail", encrypt(email));
                localStorage.setItem("encryptedPassword", encrypt(password));
            }
            navigate("/");
        } catch (err) {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login to MelodyVerse</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full px-3 py-2 border rounded pr-10"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="absolute right-3 top-9"
                        >
                            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="mr-2"
                        />
                        <label className="text-gray-700">Remember Me</label>
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {/* <div className="text-center">
                        <Link to="/forgot-password" className="text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div> */}
                </form>
                <p className="mt-4 text-center">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-500 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
