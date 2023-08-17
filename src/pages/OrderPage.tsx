import ProductCard from "components/ProductCard/ProductCard";
import { useCartContext } from "contexts/Cart.context";
import style from "./OrderPage.module.css";
import Button from "components/Button/Button";
import { NavLink } from "react-router-dom";

const OrderPage = () => {
    const { getTotalPrice, getTotalProduct, resetCart } = useCartContext();
    const totalPrice = getTotalPrice();
    const totalQuantity = getTotalProduct();
    const reset = () => resetCart();
    return (
        <main className={style.orderPage}>
            <h1 className={style.title}>Votre commande est en cours de préparation</h1>

            <div className={style.infos}>
                <p>Table n°{totalQuantity + 2} </p>
                <p>Commande n°{totalQuantity * 3} </p>
            </div>



            <ProductCard />

            <div className={style.total}>

                <p>Articles ({totalQuantity})</p>
                <p>Total: {totalPrice}€ </p>
            </div>
            <NavLink to="/products">
                <Button title="Revenir à l'accueil" callBack={reset} />
            </NavLink>

        </main>
    )
}

export default OrderPage;