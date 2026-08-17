import './Products.css';
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Products = () => {
    const [products, setProducts] = useState([]);
    const { maxPrice } = useContext(BudgetContext);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data));
    }, []);


    const filteredProducts = maxPrice
        ? products.filter(product => product.price <= maxPrice)
        : products;

    return (
        <div className="products page">
            <h1>Prodotti</h1>
            <ul className="products-list">
                {filteredProducts.map(p => (
                    <li key={p.id} className="product-card">
                        <Link to={`/products/${p.id}`}>
                            <img src={p.image} alt={p.title} />
                            {p.title}
                            <p>Prezzo: {p.price} €</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


