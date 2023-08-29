import Customisation from 'components/Customisation/Customisation';
import { NavLink } from 'react-router-dom';
import { IProduct, PRODUCTS } from 'mocks/products';
import { useEffect, useState } from 'react';
import Counter from 'components/Counter/Counter';
import style from '../pages/ProductDetailPage.module.css'
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import { useParams } from 'react-router-dom';
import { useCartContext } from 'contexts/Cart.context';
import { redirect } from "react-router-dom";


const ProductDetailPage = () => {

  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { addOne } = useCartContext();

  const [totalPrice, setTotalPrice] = useState(0);

  // utiliser useState pour pouvoir accéder à la modification d'un élément d'un objet
  const [p, setP] = useState<IProduct | undefined>();

  useEffect(() => {
    // // Convertir l'ID de string à number
    const productId = parseInt(id!);

    // // Trouver le produit correspondant par son ID
    const product = PRODUCTS.find(product => product.id === productId);
    console.log(product)
    if (!product) {
      redirect("/*");
    } else {
      setP(product);
    }
  }, [])


  // on peut exporter cette fonction dans un fichier pour pouvoir l'utiliser partout 
  const getTotalPriceWithExtra = (product: IProduct) => {
    const total = product.extras.reduce((acc, curr) => {
      return !curr.isSelected ? acc : acc += curr.additionalPrice
    }, product.price);
    return total;
  }

  useEffect(() => {
    if (p) {
      setTotalPrice(getTotalPriceWithExtra(p))
    }
    // console.log("priceExtra de use state", priceExtra)
  }, [p])

  // Image de la page
  const AphroditeImage = '/image/icons/aphrodite.png';


  const add = () => {
    setQuantity(quantity + 1);
  }
  const remove = () => {
    if (quantity > 1)
      setQuantity(quantity - 1);
  }


  // const totalPriceWithExtra = ((p!.price + priceExtra) * quantity).toFixed(2);





  return (
    <section>
      {p && (
        <>
          <div className={style.containerText}>
            <Link to="/products">
              <p>&lt; Revenir à la carte</p>
            </Link>
            <div className={style.container}>
              <div className={style.containerImg}>
                <img className={style.imageResponsive} src={p!.img.src} alt={p!.img.alt} />

                <img className={style.aphroditeImage} src={AphroditeImage} alt={AphroditeImage} />
              </div>

              <Customisation p={p!} setP={setP} />

            </div>
          </div>

          <div className={style.containeurBas}>

            <Counter quantity={quantity}
              add={() => add()}
              remove={() => remove()}
            />
            <div className={style.buttonAdd}>
              <NavLink to="/cart">
                <Button
                  title={`Ajouter au Panier - ${totalPrice * quantity} €`}
                  onClick={() => addOne(p!, quantity)}
                />
              </NavLink>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetailPage;