import Counter from "components/Counter/Counter";
import { useCartContext } from "contexts/Cart.context";
import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";


const ProductCard = () => {
    const { products, removeProduct, removeOne, addOne } = useCartContext();
    return (
        <main className={style.productCard}>
            <ul className={style.sizecard}>
                {products.map((p) =>
                    <li className={style.flex} key={p.id}>
                        <img className={style.img} src={p.product.img.src} alt={p.product.title} />
                        <section>
                            <div>
                                <h3>{p.product.title}</h3>
                                <p>{p.product.price}€</p>
                            </div>
                            <div>
                                <p>Inclus</p>
                                <p>Extras</p>
                            </div>
                        </section>
                        <div className={style.icons}>
                            <Counter quantity={p.quantity} add={() => addOne(p.product, p.quantity)} remove={() => removeOne(p.product)} />
                            <div>
                                <Link to="/product/{p.id}"><img src="image/icons/edit.png" alt="modifier le produit" /></Link>
                                {/* <button onClick={() => removeProduct(p.product)}><img src="image/icons/Delete.svg" alt="supprimer le produit" /></button> */}
                                <button onClick={() => removeProduct(p.product)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="71" viewBox="0 0 61 71" fill="none">
                                        <path d="M29.9959 0.000365934C29.2012 0.0127872 28.444 0.339967 27.8903 0.910099C27.3367 1.48023 27.0318 2.24673 27.0427 3.04138V4.54138H10.5427C10.1453 4.53599 9.75083 4.6096 9.38213 4.75795C9.01342 4.90629 8.67786 5.12641 8.39493 5.40552C8.11201 5.68463 7.88735 6.01717 7.73401 6.38383C7.58068 6.75048 7.50172 7.14395 7.50171 7.54138H3.04273C2.64519 7.53576 2.2505 7.6092 1.8816 7.75744C1.51269 7.90569 1.17693 8.12577 0.893822 8.4049C0.610713 8.68403 0.385904 9.01665 0.232461 9.38342C0.0790178 9.7502 0 10.1438 0 10.5414C0 10.939 0.0790178 11.3326 0.232461 11.6993C0.385904 12.0661 0.610713 12.3987 0.893822 12.6779C1.17693 12.957 1.51269 13.1771 1.8816 13.3253C2.2505 13.4736 2.64519 13.547 3.04273 13.5414H57.0427C57.4403 13.547 57.835 13.4736 58.2039 13.3253C58.5728 13.1771 58.9085 12.957 59.1916 12.6779C59.4747 12.3987 59.6996 12.0661 59.853 11.6993C60.0064 11.3326 60.0855 10.939 60.0855 10.5414C60.0855 10.1438 60.0064 9.7502 59.853 9.38342C59.6996 9.01665 59.4747 8.68403 59.1916 8.4049C58.9085 8.12577 58.5728 7.90569 58.2039 7.75744C57.835 7.6092 57.4403 7.53576 57.0427 7.54138H52.5837C52.5837 7.14395 52.5048 6.75048 52.3514 6.38383C52.1981 6.01717 51.9734 5.68463 51.6905 5.40552C51.4076 5.12641 51.072 4.90629 50.7033 4.75795C50.3346 4.6096 49.9401 4.53599 49.5427 4.54138H33.0427V3.04138C33.0482 2.64001 32.9731 2.24162 32.8219 1.8698C32.6706 1.49798 32.4463 1.16029 32.1622 0.876727C31.8781 0.593163 31.54 0.369493 31.1679 0.218961C30.7957 0.0684292 30.3972 -0.0059029 29.9959 0.000365934ZM3.04273 19.5414L8.42163 65.2445C8.77563 68.2655 11.3328 70.5414 14.3748 70.5414H45.7107C48.7527 70.5414 51.3068 68.2655 51.6638 65.2445L57.0427 19.5414H3.04273Z" fill="#DF0071" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </main >
    )
}

export default ProductCard;