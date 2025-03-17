import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<CatalogPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
