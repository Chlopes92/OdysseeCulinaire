// import React, { useState } from "react";
import style from "./Header.module.css";
import NavBar from "components/NavBar/NavBar";
import { useCartContext } from "contexts/Cart.context";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuBurger = ({ burgerClass = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <section>
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
        className={`${style.menuContent} ${
          isMenuOpen ? style.open : style.closed
        }`}
      >
        <NavBar customClass={`${style.navBurger}`} />
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
      <Link to="/">
        <img className={style.logo} src="/image/icons/logo.png" alt="Retour accueil" />
      </Link>
      <NavBar customClass={style.navBar} />
      {location.pathname !== "/order" && 
      (<Link to="/cart">
        <div className={style.flex}>
        <img className={style.panier} src="/image/icons/shopping-cart.png" alt="Panier" />
        <div className={style.borderQuantity} >
          <p className={style.quantity}>{totalQuantity}</p>
          </div>
        </div>
      </Link>)}
      <MenuBurger burgerClass={style.customBurger}/>
    </section>
  );
};

export default Header;
