// import React, { useState } from "react";
import NavBar from "components/NavBar/NavBar";
import style from "./Header.module.css";
import { useCartContext } from "contexts/Cart.context";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const MenuBurger = ({ burgerClass = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <section className={`${style.burger}`}>
      <button className={`${style.menuBurger} ${burgerClass}`} onClick={toggleMenu}>
        {isMenuOpen ? (
          <img src="/image/icons/close.png" alt="Close" />
        ) : (
          <span className={`${style.burgerIcon}`}>
            <span className={`${style.line}`}></span>
            <span className={`${style.line}`}></span>
            <span className={`${style.line}`}></span>
          </span>
        )}
      </button>
      <div
        className={`${style.menuContent} ${isMenuOpen ? style.open : style.closed
          }`}
      >
        {/* <NavBurger  /> */}
        <ul>
          <li><NavLink to="/products">La Carte</NavLink></li>
          <li><NavLink to="/products/category/entrees">Entrées</NavLink></li>
          <li><NavLink to="/products/category/plats">Plats</NavLink></li>
          <li><NavLink to="/products">Desserts</NavLink></li>
          <li><NavLink to="/products/category/desserts">Boissons</NavLink></li>
        </ul>
      </div>
    </section>
  );
};


const Header = () => {
  const { getTotalProduct } = useCartContext();
  const totalQuantity = getTotalProduct();
  const location = useLocation();

  return (
    <section className={style.header}>
      {location.pathname === "/order"
      ? <img className={style.logo} src="/image/icons/logo.png" alt="Retour accueil" />
     : <Link to="/">
        <img className={style.logo} src="/image/icons/logo.png" alt="Retour accueil" />

      </Link>}
      {/* <NavBar customActiveClass={style.isActive} /> */}
      <h1 className={style.titlePrincipal}>L’Odyssée Culinaire</h1>
      <div  className={style.containerPanier}>
      {location.pathname !== "/order" &&
        (<Link to="/cart">
          <div className={style.flex}>
            <img className={style.panier} src="/image/icons/shopping-cart.png" alt="Panier" />
            {totalQuantity > 0 && <div className={style.borderQuantity} >
                <p className={style.quantity}>{totalQuantity}</p> 
            </div> }
          </div>
        </Link>)}
        <div>
      <MenuBurger burgerClass={style.customBurger} />
      </div>
      </div>
    </section>
  );
};

export default Header;
