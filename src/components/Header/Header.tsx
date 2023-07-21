// import React, { useState } from "react";
import style from "./Header.module.css";
import NavBar from "components/NavBar/NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className={style.background}>
      <Link to="/">
        <img className={style.logo} src="/image/icons/logo.png" alt="Retour accueil" />
      </Link>
      <NavBar />
      <Link to="/">
        <img className={style.panier} src="/image/icons/shopping-cart.png" alt="Panier" />
      </Link>
    </section>
  );
};

export default Header;
