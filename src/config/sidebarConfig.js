import { LayoutDashboard, Users, Folder, FolderArchive, Trash } from "lucide-react";

export const sidebarConfig = {
    Directeur: [
        { id: 1, label: "Tableau de bord", icon: LayoutDashboard , path: "/dashboard" },
        { id: 2, label: "Personnel", icon: Users , path: "/users" },
        { id: 3, label: "Documents", icon: Folder , path: "/documents" },
        { id: 4, label: "Archives", icon: FolderArchive , path: "/archives" },
        { id: 5, label: "Corbeille", icon: Trash , path: "/trash" }
    ],
    Responsable: [
        { id: 1, label: "Tableau de bord", icon: LayoutDashboard, path: "/dashboard" },
        { id: 2, label: "Mes documents", icon: Folder , path: "/documents" },
        { id: 3, label: "Mes archives", icon: FolderArchive, path: "/archives" },
        { id: 4, label: "Ma corbeille", icon: Trash , path: "/trash" }
    ]
};

