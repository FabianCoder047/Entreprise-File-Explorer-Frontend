import React, { useState, useEffect } from 'react';
import DashboardLayout from "../components/DashboardLayout";
import SFA from "../components/personnel/SFA.jsx";
import UserTable from "../components/personnel/UserTable.jsx";
import {userService} from "../services/userService.js";
export default function Personnel() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchUsers = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            const userStr = localStorage.getItem('user');
            const user = JSON.parse(userStr);
            if(user.role === 'Directeur') {
                const usersData = await userService.getAll(token);
                setUsers(usersData);
            }
        } catch (error) {
            console.error('Erreur lors du chargement des utilisateurs:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);
  return (
    <DashboardLayout>
        <SFA onUserCreated={fetchUsers}/>
        <UserTable
            users={users}
            loading={loading}
            onRefresh={fetchUsers}
            onUserUpdated={fetchUsers}
            onUserStatusToggle={fetchUsers}
            onUserDeleted={fetchUsers}/>
    </DashboardLayout>
  )
}
