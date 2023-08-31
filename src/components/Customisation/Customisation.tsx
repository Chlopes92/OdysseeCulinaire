import { IProduct } from "mocks/products";
import style from "./Customisation.module.css";
import SelectedProduct from "components/SelectedProduct/SelectedProduct";
import CustomScrollbar from '../Scroll/scroll'; 


interface CustomisationProps {
  p: IProduct,
  setP: (p: IProduct) => void;
}


const Customisation = (props: CustomisationProps) => {

  const { p, setP } = props;
  

const setInclusIsSelected = (id : number) => {
 const foundInclus = p.includedIngredients.find((inclus) => inclus.ingredient.id === id)
 if (foundInclus) {
   foundInclus.isSelected = !foundInclus.isSelected
   // spread operator permet de déconstruire l'objet pour voir le changement des éléments
   setP({...p});
}
}

const setExtraIsSelected = (id : number) => {
  const foundExtra = p.extras.find((extra) => extra.ingredient.id === id)
  if (foundExtra) {
    foundExtra.isSelected = !foundExtra.isSelected
    setP({...p});
 }
 }


  // utiliser le context
  //const { addOne } = useCartContext();

  return (
    <section>
      <div className={style.container}>
      <CustomScrollbar>
          <h2 className={style.title}>{p.title} *</h2>
     
          <p className={style.description}>{p.description}</p>
          <p className={style.prix}>{p.price} €</p>
          <p className={style.mythologie} >{p.mythologie}</p>
          <hr className={style.customHr} />
          <p className={style.category}>Inclus :</p>
          <div className={style.select}></div>
           <div>
             
           <ul>
           {p.includedIngredients.map((item) => (
           <li key={item.ingredient.id} 
               onClick={() => setInclusIsSelected(item.ingredient.id)}>
           <div className={style.itemContainer}>
           <span className={style.ingredientTitle}>{item.ingredient.title}</span>
           <div className={style.checkboxContainer}>
           {item.isSelected ? <SelectedProduct /> 
                            : <img src="/image/icons/checkbox.png" alt="ajouter un produit au panier" 
                            />}
                     </div>
                </div>
            </li>
         ))}
     </ul>
  </div>
    <hr className={style.customHr} />
      <div>
        <p className={style.category}>Extras:</p>
        <ul>
         {p.extras.map((item) => (
          <li key={item.ingredient.id} onClick={() => setExtraIsSelected(item.ingredient.id)}>
            <div className={style.itemContainer}>
             <span className={style.ingredientTitle}>{item.ingredient.title} (+ {item.additionalPrice} €)</span>
            <div className={style.checkboxContainer}>
            {item.isSelected ? <SelectedProduct /> : <img src="/image/icons/checkbox.png" alt="ajouter un produit au panier" />}
           </div>
          </div>
        </li>
       ))}
     </ul>
   </div> 
   </CustomScrollbar>
 </div >
</section >
)
}


export default Customisation;