import {
  IProduct,
  PRODUCTS,
  ProductAllergyType,
  TagType,
} from "mocks/products";
import style from "./ProductItem.module.css";
import { useCartContext } from "contexts/Cart.context";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ProductItemProps {
  product: IProduct;
}

const ButtonCart = (props: ProductItemProps) => {
const { product } = props;
const { products, addOne } = useCartContext();
  if (! products.some(p => {
    return p.product === product
  })) {
    return (
      <button
        className={`${style.buttonAddToCart} ${style.position_button}`}
        onClick={() => addOne(product, 1)}>
        <img src="/image/icons/plus.png" alt="ajouter un produit au panier" />
      </button>
    );
  } else {
    return (
      <button className={`${style.buttonToSelected} ${style.position_button}`}>
        <img src="/image/icons/check.png" alt="ajouter un produit au panier" />
      </button>
    );
  }
};

const ProductItem = (props: ProductItemProps) => {
  const { product } = props;
  const { title, img, price } = product;

  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <img className={style.size} src={img.src} alt={img.alt} />
      </Link>
      <article>
        <p>{title}</p>
        <p>{price}€</p>
      </article>
      <ButtonCart product={product} />
    </div>
  );
};

export default ProductItem;
