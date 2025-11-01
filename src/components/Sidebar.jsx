import React from "react";

const Sidebar = ({ items, isOpen = true, onClose }) => {
    return (
        <>
            {/* Overlay pour mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                {/* En-tête avec bouton fermer pour mobile */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">D</span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
                    </div>

                    {/* Bouton fermer pour mobile */}
                    <button
                        onClick={onClose}
                        className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navigation */}
                <nav className="mt-6">
                    <div className="px-4 mb-4">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Navigation
                        </p>
                    </div>

                    {items.map(item => {
                        const IconComponent = item.icon;
                        return (
                            <a
                                key={item.id}
                                href={item.path}
                                className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group relative"
                            >
                                {/* Indicateur de sélection */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <span className="text-lg mr-3 group-hover:scale-110 transition-transform">
                                    <IconComponent size={20} />
                                </span>
                                <span className="font-medium">{item.label}</span>

                                {/* Badge pour notifications */}
                                {item.notifications && (
                                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {item.notifications}
                                    </span>
                                )}
                            </a>
                        );
                    })}
                </nav>

                {/* Section supplémentaire pour informations */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
                    <div className="text-center">
                        <p className="text-xs text-gray-600">
                            © 2025 Entreprise File Explorer
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                            Version 1.0.0
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;