import ProductCard from "components/ProductCard/ProductCard";
import { useCartContext } from "contexts/Cart.context";
import style from "./OrderPage.module.css";

const OrderPage = () => {
    const { getTotalPrice, getTotalProduct } = useCartContext();
    const totalPrice = getTotalPrice();
    const totalQuantity = getTotalProduct();
    return (
        <main className={style.orderPage}>
            <h1 className={style.title}>Votre commande est en cours de préparation</h1>

            <div>
                <p>Table n°{totalQuantity + 2} </p>
                <p>Commande n°{totalQuantity * 3} </p>
            </div>
            <ProductCard />

            <div className={style.total}>

                <p>Articles ({totalQuantity})</p>
                <p>Total: {totalPrice}€ </p>
            </div>

        </main>
    )
}

export default OrderPage;