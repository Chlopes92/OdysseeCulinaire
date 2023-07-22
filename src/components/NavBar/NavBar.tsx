import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {

    const navLinks = [
        {
            id: 1,
            text: "La Carte",
            url: "/products"
        },
        {
            id: 2,
            text: "Entrées",
            url: "/entrees"
        },
        {
            id: 3,
            text: "Plats",
            url: "/plats"
        },
        {
            id: 4,
            text: "Desserts",
            url: "/desserts"
        },
        {
            id: 5,
            text: "Boissons",
            url: "/boissons"
        },
    ];

    return (
        <nav>
            <ul className={style.list}>
                {navLinks.map((link) => (
                    <li key={link.id}>
                         <NavLink to={link.url}>{link.text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;