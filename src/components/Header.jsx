import { NavLink } from "react-router";
import './Header.css'

export const Header = () => {

    return (
        <header>
            <nav>
                <NavLink to='/'>Homepage</NavLink>
                <NavLink to='/about-us'>Chi siamo</NavLink>
                <NavLink to='/products'>Prodotti</NavLink>
            </nav>
        </header>
    );
};