import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://api.escuelajs.co/api/v1/products"
                );
                setProducts(response.data);
            } catch (err) {
                setError("Ошибка при загрузке продуктов");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { products, loading, error };
};

export default useProducts;
