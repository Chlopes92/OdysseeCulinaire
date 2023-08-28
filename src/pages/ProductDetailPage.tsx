import Customisation from 'components/Customisation/Customisation';
import { NavLink } from 'react-router-dom';
import { PRODUCTS } from 'mocks/products';
import {  useState } from 'react';
import Counter from 'components/Counter/Counter';
import style from '../pages/ProductDetailPage.module.css'
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import { useParams} from 'react-router-dom';
import { useCartContext } from 'contexts/Cart.context';


const ProductDetailPage = () => {
  
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams(); 
  const { addOne } = useCartContext();
  //const [priceExtra, setTotalPriceExtra] = useState(0)
 
 
const AphroditeImage = '/image/icons/aphrodite.png';
 
  
const add = () => {
    setQuantity(quantity+1);
  }
  const remove = () => {
    if(quantity > 0)
    setQuantity(quantity-1);
  }
 
  
  
  // Gérer le cas où l'ID n'est pas un nombre valide
  if (!id) {
    return <div>Id non valide</div>;
  }

  // Convertir l'ID de string à number
  const productId = parseInt(id);

  // Trouver le produit correspondant par son ID
  const product = PRODUCTS.find(product => product.id === productId);

  let extraPrice = 0;
  product?.extras.forEach((extra)=> {
    if (extra.isSelected) {
     extraPrice += extra.additionalPrice
     console.log("extraPrice", extraPrice)
    }
  })
  
  if (!product) {
    return <div>Produit introuvable</div>;
  }


  const getTotalPriceWithExtra = () => {
    let extraPrice = 0;
    product?.extras.forEach((extra)=> {
      if (extra.isSelected) {
       extraPrice += extra.additionalPrice
       console.log("extraPrice", extraPrice)
      }
    })
  }

    const totalPriceWithExtra = ((product.price + extraPrice) * quantity).toFixed(2); 


  
 return (
    <section>
      <div className={style.containerText}>
      <Link to="/products">
        <p>&lt; Revenir à la carte</p>
      </Link>
      <div className={style.container}>
      <div className={style.containerImg}>
        <img className={style.imageResponsive} src={product.img.src} alt={product.img.alt} />
        
         <img className={style.aphroditeImage} src={AphroditeImage} alt={AphroditeImage} />
      </div>
      
      <Customisation  product={product} /> 
     
      </div>
      </div>
      
      <div className={style.containeurBas}>
      
      <Counter quantity= {quantity}
      add = {() => add()}
      remove = {() => remove()}
       />
       <div className={style.buttonAdd}>
      <NavLink to="/cart">
      <Button 
    title={`Ajouter au Panier - ${totalPriceWithExtra} €`}
    onClick={() => addOne(product, quantity)}
  />

<Button 
    title={`ExtraPrice - ${totalPriceWithExtra} €`}
    onClick={() => {getTotalPriceWithExtra()}}
  />
      </NavLink>
      </div>
    </div>
   
 </section>
  );
};

export default ProductDetailPage;