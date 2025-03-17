import React from "react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import HeaderComponent from "../components/HeaderComponent";

const ProductPage = () => {
    const { id } = useParams();
    const { product, loading, error } = useProduct(id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>Product not found</p>;

    return (
        <>
        <HeaderComponent />
        <div className="product-detail-container">
            <img src={product.images[0]} alt={product.title} className="product-detail-image" />
            <div className="product-detail-info">
                <h1 className="product-detail-title">{product.title}</h1>
                <p className="product-detail-description">{product.description}</p>
                <p className="product-detail-price">Price: ${product.price}</p>
            </div>
        </div>
        </>
    );
};

export default ProductPage;

