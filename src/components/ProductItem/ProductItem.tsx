import { IProduct, PRODUCTS } from "mocks/products";
import style from './ProductItem.module.css';
import { useCartContext } from "contexts/Cart.context";
import { useState } from "react";

interface ProductItemProps {
    product: IProduct;
}

const ProductItem = (props: ProductItemProps) => {
    const { product } = props;
    const { title, img, price } = product;
    const { addOne } = useCartContext();


    return (
        <main>
            <img className={style.size} src={img.src} alt={img.alt} />
            <p>{title}</p>
            <p>{price}€</p>
            <button onClick={() => addOne(product, 1)}>
                <img src="image/icons/toselect.png" alt="ajouter un produit au panier" />
            </button>
        </main>
    )
}

export default ProductItem;