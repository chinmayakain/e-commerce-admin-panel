import React from "react";
import { Routes, Route } from "react-router-dom";

import {
    Analytics,
    Customers,
    Dashboard,
    Messages,
    Orders,
    Products,
    Reports,
    Settings,
} from "./modules";
import { Sidebar } from "./components";

const App = () => {
    return (
        <Routes>
            <Route path="*" element={<Sidebar />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/products" element={<Products />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    );
};

export default App;
