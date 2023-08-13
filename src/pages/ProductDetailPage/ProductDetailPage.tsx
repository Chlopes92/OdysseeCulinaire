
import Customisation from 'components/Customisation/Customisation';
import style from './ProductDetailsPage.module.css';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from 'mocks/products';
import Counter from '../../components/Counter/Counter'; 


const ProductDetailPage = () => {
  const { id } = useParams();
  
  // Gérer le cas où l'ID n'est pas un nombre valide
  if (!id) {
    return <div>Id non valide</div>;
  }

  // Convertir l'ID de string à number
  const productId = parseInt(id);

  // Trouver le produit correspondant par son ID
  const product = PRODUCTS.find(product => product.id === productId);
  
  if (!product) {
    return <div>Produit introuvable</div>;
  }
  const quantity = 1; 
  const add = () => {
    // logic
  };
  const remove = () => {
    //logic 
  };

 return (
    <section>
      <div className={style.container}>
        <img className={style.productImage} src={product.img.src} alt={product.img.alt} />
         <Customisation product={product} /> 
      </div> 
      <Counter quantity={quantity} add={add} remove={remove} />
     
    </section>
  );
};

export default ProductDetailPage;
