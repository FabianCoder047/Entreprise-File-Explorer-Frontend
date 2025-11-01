// components/DashboardLayout.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { sidebarConfig } from "../config/sidebarConfig";

export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [user, setUser] = useState({
        nom: "",
        prenom: "",
        email: "",
        role: ""
    });
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await authService.logout();
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const getUserProfile = async () => {
        const response = await authService.getProfile();
        setUser({
            nom: response.nom,
            prenom: response.prenom,
            email: response.email,
            role: response.role,
        });
    };

    useEffect(() => {
        getUserProfile();
    }, []);

    // Récupère les items de sidebar selon le rôle
    const sidebarItems = sidebarConfig[user.role] || [];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar responsive */}
            <Sidebar
                items={sidebarItems}
                isOpen={sidebarOpen}
                onClose={closeSidebar}
            />

            {/* Contenu principal */}
            <div className="flex-1 flex flex-col overflow-hidden min-w-0">
                <Navbar
                    user={user}
                    onLogout={handleLogout}
                    onToggleSidebar={toggleSidebar}
                />

                <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 lg:p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-6">
                        {/* Contenu principal - 2/3 de largeur sur desktop */}
                        <div className="lg:col-span-2 space-y-4 lg:space-y-6">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}