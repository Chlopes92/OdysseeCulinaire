import { useCartContext } from "contexts/Cart.context";
import { IProduct } from "mocks/products";
import { useState } from "react";
import style from "./Customisation.module.css";
import SelectedProduct from "components/SelectedProduct/SelectedProduct";

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
  const { addOne } = useCartContext();

  return (
    <div>
      <div className={style.container}>
        <h2 className={style.title}>{p.title} *</h2>
        <p>{p.description}</p>
        <p>{p.price} €</p>
        <p>{p.mythologie}</p>
        <hr className={style.customHr} />
        <p className={style.inclus}>Inclus :</p>
        <div className={style.select}></div>
        <div>
          <ul>
            {p.includedIngredients.map((item) => (
              <li key={item.ingredient.id}
              onClick={() =>(setInclusIsSelected(item.ingredient.id))} >
                
                { item.isSelected
                ? 
                <SelectedProduct />
                :<img
                    src="/image/icons/checkbox.png"
                    alt="ajouter un produit au panier"
                />
              
}
                {item.ingredient.title}
              </li>
  ))}
          </ul>
      </div>
      <hr className={style.customHr} />
      <div>
        <p>Extras:</p>
        <ul>
          {p.extras.map((item) => (
            <li key={item.ingredient.id}
            onClick={() =>(setExtraIsSelected(item.ingredient.id))} >
                          
              {item.isSelected
              ? (
                <SelectedProduct />
              ) 
              : (
                <img
                  src="/image/icons/checkbox.png"
                  alt="ajouter un produit au panier"
                />
              )}
              {item.ingredient.title} (+ {item.additionalPrice} €)
              </li>
            ))}
      </ul>
    </div>
  </div >
</div >
)
}


export default Customisation;