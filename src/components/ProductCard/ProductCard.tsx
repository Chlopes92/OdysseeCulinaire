import Counter from "components/Counter/Counter";
import { useCartContext } from "contexts/Cart.context";
import { Link } from "react-router-dom";


const ProductCard = () => {
    const { products, removeProduct, removeOne, addOne } = useCartContext();
    return (
        <main>
            <ul>
                {products.map((p) =>
                    <li key={p.id}>
                        <div>
                            <img src="p.product.img" alt="p.product.title" />
                        </div>
                        <div>
                            <p>{p.product.title}</p>
                            <p>{p.product.price * p.quantity}€</p>
                            <p>Inclus</p>
                            <p>Extras</p>
                        </div>
                        <div>
                            <Counter quantity={p.quantity} add={() => addOne(p.product, p.quantity)} remove={() => removeOne(p.product)} />
                            <Link to="/product/{p.id}"><img src="public/image/icons/delete.png" alt="supprimer le produit" /></Link>
                            <button onClick={() => removeProduct(p.product)}><img src="public/image/icons/delete.png" alt="supprimer le produit" /></button>
                        </div>
                    </li>
                )}
            </ul>
        </main >
    )
}

export default ProductCard;