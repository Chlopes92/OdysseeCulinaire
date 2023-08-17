import React, { Component } from 'react';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import style from './Customisation.module.css';

interface CustomisationProps {
  product: {
    title: string;
    price: number;
    includedIngredients: { ingredient: { id: number; title: string }; isSelected: boolean }[];
    extras: { ingredient: { id: number; title: string }; additionalPrice: number; isSelected: boolean }[];
  };
}

class Customisation extends Component<CustomisationProps> {
  render() {
    const { product } = this.props;
    return (
      <div className={style.container}>
        <h2>{product.title}</h2>
        <p>{product.price} €</p>
        <hr className={style.customHr} />
        <div className={style.select}>
        <SelectedProduct />
        <img src="/image/icons/checkbox.png" alt="ajouter un produit au panier" />
        </div>
        <div>
          <p>Included Ingredients:</p>
          <ul>
            {product.includedIngredients.map((item) => (
              <li key={item.ingredient.id}>{item.ingredient.title}</li>
            ))}
          </ul>
        </div>
        <hr className={style.customHr} />
        <div>
          <p>Extras:</p>
          <ul>
            {product.extras.map((item) => (
              <li key={item.ingredient.id}>
                {item.ingredient.title} (+{item.additionalPrice} €)
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    );
  }
}

export default Customisation;




