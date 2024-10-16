import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuthRedirect from "./useAuthRedirect";

const Signup = () => {
    useAuthRedirect(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        if (!termsAccepted) {
            setError("You must accept the terms and conditions");
            return;
        }
        try {
            const response = await axios.post("http://localhost:5000/api/signup", {
                email,
                password,
                name,
                profilePicture,
            });
            setSuccess("Signup successful! Welcome email sent.");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (err) {
            setError("Signup failed");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500 p-4">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Signup for MelodyVerse</h1>
                <form onSubmit={handleSignup}>
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
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    {/* <div className="mb-4">
                        <label className="block text-gray-700">Name (optional)</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Profile Picture (optional)</label>
                        <input
                            type="file"
                            onChange={(e) => setProfilePicture(e.target.files[0])}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div> */}
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            className="mr-2"
                        />
                        <label className="text-gray-700">I accept the terms and conditions (Dummy T&C)</label>
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition duration-300"
                        >
                            Signup
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-center">{success}</p>}
                </form>
                <p className="mt-4 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
