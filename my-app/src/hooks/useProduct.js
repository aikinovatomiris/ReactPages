import { useState, useEffect } from "react";
import axios from "axios";

const useProduct = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `https://api.escuelajs.co/api/v1/products/${id}`
                );
                setProduct(response.data);
            } catch (err) {
                setError("Ошибка при загрузке продукта");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    return { product, loading, error };
};

export default useProduct;
