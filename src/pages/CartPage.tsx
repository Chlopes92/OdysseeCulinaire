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
        <main className={style.cartPage}>
            <h1 className={style.title}>L'Odyssée Culinaire</h1>

            <div className={style.flex}>
                <p>Panier</p>
                <button onClick={reset} >Vider le panier</button>
            </div>

            {/* Condition pour afficher votre panier est vide */}
            {totalPrice == 0
                ? <p className={style.emptyCart}>Votre panier est vide !</p>
                : <div><ProductCard /> <p className={style.total}>Total: {totalPrice}€ </p></div>
            }

            <NavLink to="/payment">
                <Button title="Payer la commande"/>
            
            </NavLink>
            
                
        </main>
    )
}

export default CartPage;