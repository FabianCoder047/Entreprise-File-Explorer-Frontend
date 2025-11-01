import React from "react"
const Aside = () => {
    return (
        <aside className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Informations</h3>
            <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">
                        📢 Votre profil est à 65% complet
                    </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                        ⭐ Vous avez 3 nouvelles notifications
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default Aside;