import ProductCard from "components/ProductCard/ProductCard";
import { useCartContext } from "contexts/Cart.context";
import style from "./OrderPage.module.css";
import Button from "components/Button/Button";
import { NavLink } from "react-router-dom";
import { getTotalPriceWithExtra } from "../../src/contexts/TotalExtraPrice";

const OrderPage = () => {
    const { products, getTotalProduct, resetCart, myChoice } = useCartContext();
    const totalQuantity = getTotalProduct();
    const reset = () => resetCart();

    console.log("myyyyyyCHHHHHH", myChoice);

    const total = () => {
        let totalPrice = 0; products.forEach((p) => {
            totalPrice += (getTotalPriceWithExtra(p.product) * p.quantity)
        })
        return totalPrice
    }

    return (
        <div className={style.orderPage}>
            <h1 className={style.title}>Votre commande est en cours de préparation !</h1>

            <div className={style.infos}>
                {myChoice === 1 && <p>Table n°{totalQuantity + 2} </p>}
                <p>Commande n°{totalQuantity * 3} </p>
            </div>

            <ProductCard />

            <div className={style.total}>

                <p>Articles ({totalQuantity})</p>
                <p>Total: {total()}€ </p>
            </div>
            <NavLink to="/products">
                <Button title="Revenir à l'accueil" callBack={reset} />
            </NavLink>

        </div>
    )
}

export default OrderPage;