import { IProduct, PRODUCTS } from "mocks/products";
import style from './ProductItem.module.css';
import { useCartContext } from "contexts/Cart.context";
import { useState } from "react";
import Carousel from "components/Carousel/Carousel";

interface ProductItemProps {
    product: IProduct;
}

const ProductItem = (props: ProductItemProps) => {
    const { product } = props;
    const { title, img, price } = product;
    const { addOne } = useCartContext();


    return (
        <main>
            <Carousel />
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