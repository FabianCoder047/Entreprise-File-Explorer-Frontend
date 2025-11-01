import React from "react";
import { useState, useRef, useEffect } from 'react';
import {authService} from "../services/authService.js";
import {useNavigate} from "react-router-dom";

const Navbar = ({ user, onToggleSidebar }) => {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const handleLogout = async () =>{
        try{
            await authService.logout();
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="bg-white shadow-sm z-10">
            <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
                {/* Partie gauche avec menu hamburger et titre */}
                <div className="flex items-center space-x-4">
                    {/* Bouton menu hamburger pour mobile */}
                    <button
                        onClick={onToggleSidebar}
                        className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Titre */}
                    <div className="flex items-center">
                        <h1 className="text-lg font-medium uppercase">
                            Tableau de bord
                            <span className="inline"> {user.role}</span>
                        </h1>
                    </div>
                </div>

                {/* Partie droite avec profil */}
                <div className="flex items-center space-x-4">
                    {/* Dropdown profil */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center space-x-2 sm:space-x-3 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {/* Avatar - caché sur très petits écrans */}
                            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 text-gray-700 font-semibold uppercase">
                                {user.nom && user.prenom
                                    ? `${user.prenom.charAt(0)}${user.nom.charAt(0)}`
                                    : "?"}
                            </div>

                            {/* Nom - caché sur mobile */}
                            <span className="hidden sm:block text-gray-700">{user.name}</span>
                            {/* Icône flèche */}
                            <svg
                                className={`h-4 w-4 text-gray-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 sm:w-56 bg-white rounded-md shadow-lg py-1 border border-gray-200">
                                <div className="px-4 py-2 border-b border-gray-100 sm:hidden">
                                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                                    <p className="text-xs text-gray-500">{user.role}</p>
                                </div>
                                <a
                                    href="/profile"
                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Voir le profil
                                </a>
                                <a
                                    href="/edit-profile"
                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Modifier mon profil
                                </a>
                                <div className="border-t border-gray-100 my-1"></div>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                >
                                    <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Déconnexion
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;