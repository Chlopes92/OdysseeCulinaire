import ProductCard from "components/ProductCard/ProductCard";
import { useCartContext } from "contexts/Cart.context";
import { Link } from "react-router-dom";
import style from "./CartPage.module.css";

const CartPage = () => {
    const {getTotalPrice, resetCart} = useCartContext();
    const totalPrice = getTotalPrice();
    const reset = () => resetCart();
    return(
        <main>
            <h1>L'odyssée Culinaire</h1>
            <div className={style.flex}>
            <p>Panier</p>
            <button onClick={reset} >Vider le panier</button>
            </div>
            <ProductCard />
            <p>Total: {totalPrice}€ </p>

            <button><Link to="/payment">Payer la commande</Link></button>
        </main>
    )
}

export default CartPage;