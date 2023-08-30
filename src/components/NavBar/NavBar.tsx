import { NavLink, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = ({ customClass = "", customActiveClass = "" }) => {

    const location = useLocation();
    console.log(location.pathname);

    const navLinks = [
        {
            id: 1,
            text: "La Carte",
            url: "/products"
        },
        {
            id: 2,
            text: "Entrées",
            url: "/products/category/entrees"
        },
        {
            id: 3,
            text: "Plats",
            url: "/products/category/plats"
        },
        {
            id: 4,
            text: "Desserts",
            url: "/products/category/desserts"
        },
        {
            id: 5,
            text: "Boissons",
            url: "/products/category/boissons"
        },
    ];

    return (
        <nav>
            <ul className={`${style.list} ${style.navBar} ${customClass}`}>
                {navLinks.map((link) => (
                    <li key={link.id}  className={ location.pathname === link.url ? customActiveClass : ""}>
                        <NavLink to={link.url} className={style.link}>{link.text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;