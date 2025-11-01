import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import Personnel from "./pages/Personnel";
import Documents from "./pages/Documents";
import Archives from "./pages/Archives";
import Trash from "./pages/Trash";
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            }
            />
            <Route path="/profile" element={
                <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            } />
            <Route path="/update-profile" element={
                <ProtectedRoute>
                    <UpdateProfile />
                </ProtectedRoute>
            } />
            <Route path="/users" element={
                <ProtectedRoute>
                    <Personnel />
                </ProtectedRoute>
            } />
            <Route path="/documents" element={
                <ProtectedRoute>
                    <Documents />
                </ProtectedRoute>
            } />
            <Route path="/archives" element={
                <ProtectedRoute>
                    <Archives />
                </ProtectedRoute>
            } />
            <Route path="/trash" element={
                <ProtectedRoute>
                    <Trash />
                </ProtectedRoute>
            } />
        </Routes>
    );
}
