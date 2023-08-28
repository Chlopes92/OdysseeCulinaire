import { useCartContext } from "contexts/Cart.context";
import { IProduct } from "mocks/products";
import { useState } from "react";
import style from "./Customisation.module.css";
import SelectedProduct from "components/SelectedProduct/SelectedProduct";

interface CustomisationProps {
  product: IProduct
}


const Customisation = (props: CustomisationProps) => {

  const { product } = props;

  // useState pour passer de true a false
 const [inclus, setInclus] = useState(true)
 const [extra, setExtra] = useState(false)

  

const setInclusIsSelected = (id : number) => {
 const foundInclus = product.includedIngredients.find((inclus) => inclus.ingredient.id === id)
 if (foundInclus) {
   foundInclus.isSelected = !foundInclus.isSelected
   console.log("foundInclus", foundInclus)
   setInclus(!inclus);
}
}

const setExtraIsSelected = (id : number) => {
  const foundExtra = product.extras.find((extra) => extra.ingredient.id === id)
  if (foundExtra) {
    foundExtra.isSelected = !foundExtra.isSelected
    console.log("foundExtra", foundExtra)
    setExtra(!extra);
 }
 }


  // utiliser le context
  const { addOne } = useCartContext();

  return (
    <div>
      <div className={style.container}>
        <h2 className={style.title}>{product.title} *</h2>
        <p>{product.description}</p>
        <p>{product.price} €</p>
        <p>{product.mythologie}</p>
        <hr className={style.customHr} />
        <p className={style.inclus}>Inclus :</p>
        <div className={style.select}></div>
        <div>
          <ul>
            {product.includedIngredients.map((item) => (
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
          {product.extras.map((item) => (
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