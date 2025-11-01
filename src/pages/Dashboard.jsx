// pages/Dashboard.jsx
import React from 'react';
import DashboardLayout from "../components/DashboardLayout";
import {
    Save,
    UserPlus,
    FileText,
    Archive,
    RotateCcw,
    Users,
    FileDigit,
    Trash2
} from "lucide-react";

export default function Dashboard() {
    // Données statistiques (pour le moment statiques)
    const statsData = {
        Directeur: {
            personnel: 24,
            documents: 156,
            archives: 89,
            supprime: 12
        },
        Responsable: {
            documentsCrees: 45,
            archives: 23,
            supprime: 5
        }
    };

    // Rendu conditionnel du contenu principal
    const renderMainContent = () => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");

        switch(user.role) {
            case 'Directeur':
                return (
                    <>
                        {/* En-tête de section */}
                        <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-200">
                            <h1 className="text-2xl lg:text-3xl font-bold  text-gray-900">
                                TABLEAU DE BORD DIRECTEUR
                            </h1>
                            <p className="text-gray-600 mt-2">
                                Bienvenue sur votre espace de direction
                            </p>
                        </div>

                        {/* Statistiques */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="flex items-center justify-center mb-2">
                                    <Users className="h-8 w-8 text-blue-600" />
                                </div>
                                <div className="text-2xl font-bold text-blue-600">{statsData.Directeur.personnel}</div>
                                <div className="text-gray-600">Personnel</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="flex items-center justify-center mb-2">
                                    <FileText className="h-8 w-8 text-green-600" />
                                </div>
                                <div className="text-2xl font-bold text-green-600">{statsData.Directeur.documents}</div>
                                <div className="text-gray-600">Documents</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="flex items-center justify-center mb-2">
                                    <Archive className="h-8 w-8 text-orange-600" />
                                </div>
                                <div className="text-2xl font-bold text-orange-600">{statsData.Directeur.archives}</div>
                                <div className="text-gray-600">Archivés</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="flex items-center justify-center mb-2">
                                    <Trash2 className="h-8 w-8 text-red-600" />
                                </div>
                                <div className="text-2xl font-bold text-red-600">{statsData.Directeur.supprime}</div>
                                <div className="text-gray-600">Supprimés</div>
                            </div>
                        </div>

                        {/* Actions rapides */}
                        <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Actions Rapides
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
                                <button className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors font-medium">
                                    <UserPlus className="h-5 w-5" />
                                    Ajouter au personnel
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-colors font-medium">
                                    <FileText className="h-5 w-5" />
                                    Créer une ressource
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg transition-colors font-medium">
                                    <Archive className="h-5 w-5" />
                                    Archiver
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors font-medium">
                                    <RotateCcw className="h-5 w-5" />
                                    Restaurer
                                </button>
                            </div>
                        </div>
                    </>
                );

            case 'Responsable':
                return (
                    <>
                        {/* En-tête de section */}
                        <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-200">
                            <h1 className="text-2xl lg:text-3xl uppercase font-bold text-gray-900">
                                TABLEAU DE BORD RESPONSABLE
                            </h1>
                            <p className="text-gray-600 mt-2">
                                Bienvenue sur votre espace de gestion
                            </p>
                        </div>

                        {/* Statistiques */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="flex items-center justify-center mb-2">
                                    <FileDigit className="h-8 w-8 text-green-600" />
                                </div>
                                <div className="text-2xl font-bold text-green-600">{statsData.Responsable.documentsCrees}</div>
                                <div className="text-gray-600">Documents créés</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="flex items-center justify-center mb-2">
                                    <Archive className="h-8 w-8 text-orange-600" />
                                </div>
                                <div className="text-2xl font-bold text-orange-600">{statsData.Responsable.archives}</div>
                                <div className="text-gray-600">Archives faites</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="flex items-center justify-center mb-2">
                                    <Trash2 className="h-8 w-8 text-red-600" />
                                </div>
                                <div className="text-2xl font-bold text-red-600">{statsData.Responsable.supprime}</div>
                                <div className="text-gray-600">Supprimés</div>
                            </div>
                        </div>

                        {/* Actions rapides */}
                        <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Actions Rapides
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                                <button className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors font-medium">
                                    <Save className="h-5 w-5" />
                                    Enregistrer un document
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg transition-colors font-medium">
                                    <Archive className="h-5 w-5" />
                                    Archiver
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors font-medium">
                                    <RotateCcw className="h-5 w-5" />
                                    Restaurer
                                </button>
                            </div>
                        </div>
                    </>
                );

            default:
                return (
                    <>
                        <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-200">
                            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                TABLEAU DE BORD
                            </h1>
                            <p className="text-gray-600 mt-2">
                                Bienvenue sur votre espace personnel
                            </p>
                        </div>

                        <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Contenu Principal
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-gray-600">
                                    Votre contenu principal sera affiché ici. Vous pouvez ajouter des tableaux,
                                    des graphiques, ou tout autre élément nécessaire à votre application.
                                </p>
                            </div>
                        </div>
                    </>
                );
        }
    };

    return (
        <DashboardLayout>
            {renderMainContent()}
        </DashboardLayout>
    );
}