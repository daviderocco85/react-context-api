import "./Navbar.css";
import { NavLink } from "react-router";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export const Navbar = () => {

    const { maxPrice, setMaxPrice } = useContext(BudgetContext);

    return (

        <nav className="navbar">
            <NavLink to='/'>Homepage</NavLink>
            <NavLink to='/about-us'>Chi siamo</NavLink>
            <NavLink to='/products'>Prodotti</NavLink>
            <input
                type="number"
                step="any"
                placeholder="Prezzo massimo"
                value={maxPrice ?? ""}
                onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : null)}
            />
        </nav>
    );
}