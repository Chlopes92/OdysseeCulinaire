import { IProduct, PRODUCTS, ProductAllergyType, TagType } from "mocks/products";
import style from './ProductItem.module.css';
import { useCartContext } from "contexts/Cart.context";
import { useState } from "react";
import { Link } from 'react-router-dom';


interface ProductItemProps {
    product: IProduct;
}

const ProductItem = (props: ProductItemProps) => {
    const { product } = props;
    const { title, img, price } = product;
    const { addOne } = useCartContext();


    return (
        <main>
             <Link to={`/products/${product.id}`}> 
            <img className={style.size} src={img.src} alt={img.alt} />
            </Link>
            <article>
                <p>{title}</p>
                <p>{price}€</p>
            </article>
            <button className={style.buttonToSelected} onClick={() => addOne(product, 1)}> 
                <img src="/image/icons/plus.png" alt="ajouter un produit au panier" />
            </button>
            <button className={style.buttonAddToCart} onClick={() => addOne(product, 1)}> 
                <img src="/image/icons/check.png" alt="ajouter un produit au panier" />
            </button>
            
        </main>
    )
}

export default ProductItem;