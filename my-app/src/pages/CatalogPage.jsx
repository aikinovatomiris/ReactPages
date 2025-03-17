import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import HeaderComponent from "../components/HeaderComponent";

const CatalogPage = () => {
    const { products, loading, error } = useProducts();
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
        <HeaderComponent />
        <div className="catalog-container">
            <h1>Каталог товаров</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div 
                        key={product.id} 
                        className="product-card" 
                        onClick={() => navigate(`/product/${product.id}`)}
                    >
                        <img src={product.images[0]} alt={product.title} className="product-image" />
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-price">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default CatalogPage;
