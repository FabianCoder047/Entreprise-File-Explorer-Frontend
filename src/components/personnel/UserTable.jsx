import React from 'react';

export default function UserTable({  users, loading, onRefresh }) {
    const handleEdit = (user) => {

    };

    const handleToggleStatus = (user) => {

    };

    const handleDelete = (user) => {

    };

    const handleAssignRights = (user) => {

    };
    if (loading) {
        return (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="animate-pulse">
                    {/* En-tête du tableau en état de chargement */}
                    <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                        {[...Array(7)].map((_, i) => (
                            <div key={i} className="h-4 bg-gray-200 rounded hidden lg:block"></div>
                        ))}
                        {/* Version mobile - moins de colonnes visibles */}
                        <div className="h-4 bg-gray-200 rounded lg:hidden"></div>
                        <div className="h-4 bg-gray-200 rounded lg:hidden"></div>
                        <div className="h-4 bg-gray-200 rounded lg:hidden"></div>
                    </div>
                    {/* Lignes en état de chargement */}
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                            {[...Array(7)].map((_, j) => (
                                <div key={j} className={`h-4 bg-gray-100 rounded ${j > 2 ? 'hidden lg:block' : ''}`}></div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Liste des utilisateurs</h3>
                <button
                    onClick={onRefresh}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 flex items-center"
                >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Rafraîchir
                </button>
            </div>

            {/* Version desktop - Tableau complet */}
            <div className="hidden lg:block overflow-x-auto">
                <table className="w-full min-w-full">
                    <thead className="bg-gray-50 border-b border-gray-200 whitespace-nowrap">
                    <tr>
                        {['Nom', 'Prénom', 'Email', 'Rôle', 'Statut', 'Date création', 'Actions'].map((header) => (
                            <th
                                key={header}
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan={7} className="px-6 py-12 text-center">
                                <div className="flex flex-col items-center justify-center text-gray-500">
                                    <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2" />
                                    </svg>
                                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                                        Aucun utilisateur trouvé
                                    </h3>
                                    <p>Commencez par ajouter un nouvel utilisateur</p>
                                </div>
                            </td>
                        </tr>
                    ) : (
                        users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {user.nom}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.prenom}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                            {user.role}
                                        </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                            user.is_active 
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}>
                                            {user.is_active  ? 'Actif' : 'Inactif'}
                                        </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex space-x-2">
                                        {/* Modifier */}
                                        <button
                                            onClick={() => handleEdit(user)}
                                            className="text-blue-600 hover:text-blue-900"
                                            title="Modifier"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>

                                        {/* Activer/Désactiver */}
                                        <button
                                            onClick={() => handleToggleStatus(user)}
                                            className={user.is_active
                                                ? "text-orange-600 hover:text-orange-900"
                                                : "text-green-600 hover:text-green-900"
                                            }
                                            title={user.is_active ? "Désactiver" : "Activer"}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {user.is_active ? (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                ) : (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                                )}
                                            </svg>
                                        </button>

                                        {/* Attribuer des droits */}
                                        <button
                                            onClick={() => handleAssignRights(user)}
                                            className="text-purple-600 hover:text-purple-900"
                                            title="Attribuer des droits"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </button>

                                        {/* Supprimer */}
                                        <button
                                            onClick={() => handleDelete(user)}
                                            className="text-red-600 hover:text-red-900"
                                            title="Supprimer"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>

            {/* Version mobile - Cartes */}
            <div className="lg:hidden">
                {users.length === 0 ? (
                    <div className="p-6 text-center">
                        <div className="flex flex-col items-center justify-center text-gray-500">
                            <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2" />
                            </svg>
                            <h3 className="text-base font-medium text-gray-900 mb-1">
                                Aucun utilisateur
                            </h3>
                            <p className="text-sm">Ajoutez un nouvel utilisateur</p>
                        </div>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-200">
                        {users.map((user) => (
                            <div key={user.id} className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-medium text-gray-900">
                                            {user.nom} {user.prenom}
                                        </h4>
                                        <p className="text-sm text-gray-500">{user.email}</p>
                                    </div>
                                    <div className="flex space-x-1">
                                        {/* Boutons d'actions version mobile */}
                                        <button
                                            onClick={() => handleEdit(user)}
                                            className="text-blue-600 hover:text-blue-800 p-1"
                                            title="Modifier"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => handleToggleStatus(user)}
                                            className={user.is_active
                                                ? "text-orange-600 hover:text-orange-800 p-1"
                                                : "text-green-600 hover:text-green-800 p-1"
                                            }
                                            title={user.is_active ? "Désactiver" : "Activer"}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {user.is_active ? (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                ) : (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                                )}
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => handleAssignRights(user)}
                                            className="text-purple-600 hover:text-purple-800 p-1"
                                            title="Attribuer des droits"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user)}
                                            className="text-red-600 hover:text-red-800 p-1"
                                            title="Supprimer"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 text-xs">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                                        {user.role}
                                    </span>
                                    <span className={`px-2 py-1 rounded-full ${
                                        user.is_active
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                        {user.is_active ? 'Actif' : 'Inactif'}
                                    </span>
                                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                                        {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}