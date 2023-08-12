import Customisation from "components/Customisation/Customisation";
import Counter from "components/Counter/Counter";
import style from "./ProductDetailsPage.module.css"
import { useParams } from 'react-router-dom';
import { PRODUCTS } from "mocks/products"; 


const ProductDetailPage = () =>{
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
return (
        <section>
            <div className={style.container}>
            <img className={style.productImage} src={product.img.src} alt={product.img.alt} />
        <Customisation/>
        </div> 
        <Counter
        quantity={0} // Passer la quantité appropriée ici
        add={() => {}} // Passer la fonction pour ajouter
        remove={() => {}} // Passer la fonction pour supprimer
      />
     
        </section>
    )
}

export default ProductDetailPage;