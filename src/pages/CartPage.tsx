import ProductCard from "components/ProductCard/ProductCard";
import { useCartContext } from "contexts/Cart.context";
import style from "./CartPage.module.css";
import Button from "components/Button/Button";
import { NavLink } from "react-router-dom";
import Modal from "components/Modal/Modal";
import { useState } from "react";

const CartPage = () => {
  const { getTotalPrice, resetCart } = useCartContext();
  const totalPrice = getTotalPrice();
  const reset = () => resetCart();

  return (
      <section className={style.cartPage}>
        <h1 className={style.title}>L'Odyssée Culinaire</h1>

        <div className={style.flex}>
          <p>Panier</p>
          {totalPrice !== 0 && <button onClick={reset}>Vider le panier</button>}
        </div>

        {/* Condition pour afficher votre panier est vide */}
        {totalPrice == 0 ? (
          <div>
            <p className={style.emptyCart}>Votre panier est vide !</p>
            <NavLink to="/products">
              <Button title="Retour à la carte" />
            </NavLink>
          </div>
        ) : (
          <div>
            <ProductCard />
            <p className={style.total}>Total: {totalPrice}€ </p>
            <NavLink to="/payment">
              <Button title="Payer la commande" />
            </NavLink>
          </div>
        )}
      </section>
  );
};

export default CartPage;
