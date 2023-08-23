import React, { Component } from 'react';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import style from './Customisation.module.css';

interface CustomisationProps {
  product: {
    title: string;
    description:string;
    mythologie?: string | null;
    price: number;
    includedIngredients: { ingredient: { id: number; title: string }; isSelected: boolean }[];
    extras: { ingredient: { id: number; title: string }; additionalPrice: number; isSelected: boolean }[];
  };
}

interface CustomisationState {
  selectedIngredients: { [key: number]: boolean };
  selectedExtras: { [key: number]: boolean };
}

class Customisation extends Component<CustomisationProps, CustomisationState> {
  constructor(props: CustomisationProps) {
    super(props);
    this.state = {
      selectedIngredients: {},
      selectedExtras: {},
    };
  }

  handleIngredientClick = (ingredientId: number) => {
    this.setState((prevState) => ({
      selectedIngredients: {
        ...prevState.selectedIngredients,
        [ingredientId]: !prevState.selectedIngredients[ingredientId],
      },
    }));
  };

  handleExtraClick = (extraId: number) => {
    this.setState((prevState) => ({
      selectedExtras: {
        ...prevState.selectedExtras,
        [extraId]: !prevState.selectedExtras[extraId],
      },
    }));
  };

  render() {
    const { product } = this.props;
    const { selectedIngredients, selectedExtras } = this.state;

    return (
      <div className={style.container}>
        <h2 className={style.title}>{product.title} *</h2>
        <p>{product.description}</p>
        <p>{product.price} €</p>
        <p>{product.mythologie} </p>
        <hr className={style.customHr} />
        <p className={style.inclus}>Inclus : </p>
        <div className={style.select}>
      </div>
        <div>
        
        <ul>
            {product.includedIngredients.map((item) => (
              <li
                key={item.ingredient.id}
                onClick={() => this.handleIngredientClick(item.ingredient.id)}
              >
                 <span className={`${style.checkboxIconWrapper}`}>
                {selectedIngredients[item.ingredient.id] ? (
                  <img
                    src="/image/icons/checkbox.png"
                    alt="ajouter un produit au panier"
                  />
                ) : (
                  <SelectedProduct />
                )}
                {item.ingredient.title}
                </span>
              </li>
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




