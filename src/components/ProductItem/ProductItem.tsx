import { IProduct } from "mocks/products";
import style from "./ProductItem.module.css";
import { useCartContext } from "contexts/Cart.context";
import { Link } from "react-router-dom";


interface ProductItemProps {
  product: IProduct;
}

const ButtonCart = (props: ProductItemProps) => {
  const { product } = props;
  const { products } = useCartContext();
  if (!products.some(p => {
    return p.product.id === product.id
  })) {
    return (
      <Link to={`/products/${product.id}`}>
        <button className={`${style.buttonAddToCart} ${style.position_button}`}>
          <img src="/image/icons/plus.png" alt="ajouter un produit au panier" />
        </button>
      </Link>
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
    <div style={{ position: "relative" }}>
      <Link to={`/products/${product.id}`}>
        <img className={style.size} src={img.src} alt={img.alt} />
      </Link>
      <article className={style.article}>
        <p className={style.text}>{title}</p>
        <p className={style.text}>{price}€</p>
      </article>
      <ButtonCart product={product} />
    </div>
  );
};

export default ProductItem;
