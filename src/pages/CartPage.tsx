import ProductCard from "components/ProductCard/ProductCard";
import { useCartContext } from "contexts/Cart.context";
import style from "./CartPage.module.css";
import Button from "components/Button/Button";
import { Link, NavLink } from "react-router-dom";
import { getTotalPriceWithExtra } from "../../src/contexts/TotalExtraPrice";

const CartPage = () => {
    const { resetCart, products } = useCartContext();
    const reset = () => resetCart();

    const total = () => {
        let totalPrice = 0;
        products.forEach((p) => {
            totalPrice += (getTotalPriceWithExtra(p.product) * p.quantity)
        })
        return totalPrice
    }

    return (
        <div>
            <section className={style.cartPage}>

                <div className={style.flex}>
                    <p>Panier</p>
            <a className={style.retour}><Link to='/products' > <span>&lsaquo;</span> Revenir à la carte </Link> </a>
                    {total() !== 0 && <button onClick={reset}>Vider le panier</button>}
                </div>

                {/* Condition pour afficher votre panier est vide */}
                {total() == 0 ? (
                    <div>
                        <p className={style.emptyCart}>Votre panier est vide !</p>
                        <NavLink to="/products">
                            <Button title="Retour à la carte" />
                        </NavLink>
                    </div>
                ) : (
                    <div>
                        <ProductCard />
                        <p className={style.total}>Total: {total()}€ </p>
                        <NavLink to="/payment">
                            <Button title="Payer la commande" />
                        </NavLink>
                    </div>
                )}
            </section>
        </div>
    );
};

export default CartPage;

