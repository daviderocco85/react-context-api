import './Products.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data));
    }, []);

    return (
        <div className="products page">
            <h1>Prodotti</h1>
            <ul className="products-list">
                {products.map(p => (
                    <li key={p.id} className="product-card">
                        <Link to={`/products/${p.id}`}>
                            <img src={p.image} alt={p.title} />
                            {p.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


