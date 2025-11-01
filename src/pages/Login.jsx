import React, { useState } from "react";
import { Mail, Lock, LogIn, Eye,EyeOff } from "lucide-react";
import { authService } from "../services/authService";
import loginImage from "../assets/loginImage.jpg";
import logo from "../assets/logo.png";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await authService.login(credentials);
            if (response && response.access_token) {
                localStorage.setItem("token", response.access_token);
                localStorage.setItem("user", JSON.stringify(response.user));
                navigate("/dashboard");
            } else {
                setError("Identifiants incorrects");
            }
        } catch(error){
            console.log(error);
            setError("Erreur de connexion");
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-white pt-4">
            <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-lg overflow-hidden bg-white">
                <div className="hidden md:block md:w-1/2">
                    <img
                        src={loginImage}
                        alt="Connexion"
                        className="w-full h-[80vh] object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center p-10">
                    <div className="flex justify-center mb-4">
                        <a href="/">
                            <img src={logo} alt="Logo" height={60} width={60} className="rounded-full"/>
                        </a>
                    </div>

                    <h2 className="text-center text-2xl font-bold text-gray-900 mb-1">
                        Veuillez vous connecter à votre compte
                    </h2>
                    <p className="text-center text-gray-600 mb-8">
                        Veuillez entrer votre email et mot de passe ci-dessous
                    </p>

                    {/* Message d’erreur */}
                    {error && (
                        <p className="text-red-600 bg-red-50 text-center py-2 rounded mb-4 text-sm">
                            {error}
                        </p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="email"
                                name="email"
                                value={credentials.email}
                                onChange={handleChange}
                                placeholder="Adresse email"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                            />
                        </div>

                        {/* Mot de passe */}
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                placeholder="Mot de passe"
                                required
                                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                            />
                            {!showPassword ? (
                                <Eye
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                                    size={20}
                                />
                            ) : (
                                <EyeOff
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                                    size={20}
                                />
                            )}

                        </div>

                        {/* Options */}
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                />
                                <span className="ml-2">Se souvenir de moi</span>
                            </label>
                            <a href="#" className="text-blue-600 hover:underline">
                                Mot de passe oublié?
                            </a>
                        </div>

                        {/* Bouton */}
                        <button
                            type="submit"
                            className="flex justify-center items-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
                        >
                            <LogIn size={18} /> Se connecter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
