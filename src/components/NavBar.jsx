import "./Navbar.css";
import { NavLink } from "react-router";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export const Navbar = () => {
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);

    return (

        <nav className="navbar">
            <NavLink to='/'>Homepage</NavLink>
            <NavLink to='/about-us'>Chi siamo</NavLink>
            <NavLink to='/products'>Prodotti</NavLink>
            <button onClick={() => setBudgetMode(!budgetMode)}>
                {budgetMode
                    ? "Disattiva Modalità Budget"
                    : "Attiva Modalità Budget"}
            </button>
        </nav>
    );
}