import ProductCard from "components/ProductCard/ProductCard";
import { useCartContext } from "contexts/Cart.context";
import { Link } from "react-router-dom";
import style from "./CartPage.module.css";
import Button from "components/Button/Button";

const CartPage = () => {
    const {getTotalPrice, resetCart} = useCartContext();
    const totalPrice = getTotalPrice();
    const reset = () => resetCart();
    return(
        <main className={style.cartPage}>
            <h1 className={style.title}>L'Odyssée Culinaire</h1>

            <div className={style.flex}>
            <p>Panier</p>
            <button onClick={reset} >Vider le panier</button>
            </div>
            <ProductCard />

            <p>Total: {totalPrice}€ </p>

<Button title="Payer la commande"/>
        </main>
    )
}

export default CartPage;