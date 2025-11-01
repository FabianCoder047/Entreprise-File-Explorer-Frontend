import React from "react";
import { LogIn } from "lucide-react";
import homeImage from "../assets/homeImage.png";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-blue-100 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between p-10 max-w-6xl w-full">
                <div className="md:w-full space-y-4">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900">
                        Entreprise File Explorer
                    </h1>
                    <h2 className="text-[18px] md:text-3xl font-semibold text-blue-600 flex items-center gap-2">
                        Système de Gestion Electronique des Documents
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Optimisez la gestion des navires, des conteneurs et des partenaires
                        du port de Bujumbura grâce à une plateforme moderne, sécurisée et
                        efficace.
                    </p>
                    <button
                        onClick={() => navigate("/login")}
                        className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
                    >
                        <LogIn /> Veuillez vous connecter
                    </button>
                </div>

                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <img
                        src={homeImage}
                        alt="Chargement de conteneur"
                        className="rounded-lg w-96 h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
