// import React, { useState } from "react";
import style from "./Header.module.css";
import NavBar from "components/NavBar/NavBar";
import { useCartContext } from "contexts/Cart.context";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { getTotalProduct } = useCartContext();
  const totalQuantity = getTotalProduct();
  const location = useLocation();

  return (
    <section className={style.header}>
      <Link to="/">
        <img className={style.logo} src="/image/icons/logo.png" alt="Retour accueil" />
      </Link>
      <NavBar />
      {location.pathname != "/order" && 
      (<Link to="/cart">
        <div className={style.flex}>
        <img className={style.panier} src="/image/icons/shopping-cart.png" alt="Panier" />
        <div className={style.borderQuantity} >
          <p className={style.quantity}>{totalQuantity}</p>
          </div>
        </div>
      </Link>)}
    </section>
  );
};

export default Header;
