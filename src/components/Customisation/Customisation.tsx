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
  fullSelectedTrueId: number[]; 
  
}


class Customisation extends Component<CustomisationProps, CustomisationState> {
  constructor(props: CustomisationProps) {
    super(props);
    this.state = {
      selectedIngredients: {},
      selectedExtras: {},
      fullSelectedTrueId: [], 
    };
    console.log("Initially selected ingredient IDs:", this.getSelectedIngredientIdsWithStatus());
  }
  getSelectedIngredientIdsWithStatus = () => {
    const selectedIngredientsWithStatus = this.props.product.includedIngredients.map(item => ({
      id: item.ingredient.id,
      isSelected: this.state.selectedIngredients[item.ingredient.id] || false,
    }));
  
    return selectedIngredientsWithStatus;
  };

  getExtrasIngredientIds = () => {
    return this.props.product.extras
      .filter(item => this.state.selectedExtras[item.ingredient.id])
      .map(item => item.ingredient.id);
  };

  handleIngredientClick = (ingredientId: number) => {
    this.setState((prevState) => {
      const updatedSelectedIngredients = {
        ...prevState.selectedIngredients,
        [ingredientId]: !prevState.selectedIngredients[ingredientId],
      };

      const selectedIngredientsWithStatus = this.getSelectedIngredientIdsWithStatus().map(
        (item) => ({
          id: item.id,
          isSelected: updatedSelectedIngredients[item.id] || item.isSelected,
        })
      );

      console.log("Updated selected ingredient IDs:", selectedIngredientsWithStatus);

      // Add the ID to fullSelectedTrueId list if it becomes true
      const newFullSelectedTrueId = prevState.fullSelectedTrueId;
      if (updatedSelectedIngredients[ingredientId]) {
        newFullSelectedTrueId.push(ingredientId);
      }

      console.log("Updated fullSelectedTrueId:", newFullSelectedTrueId);

      return {
        selectedIngredients: updatedSelectedIngredients,
        fullSelectedTrueId: newFullSelectedTrueId,
      };
    });
  };
  
  

  handleExtraClick = (extraId: number) => {
    this.setState((prevState) => {
      const selectedExtras = {
        ...prevState.selectedExtras,
        [extraId]: !prevState.selectedExtras[extraId],
      };

      console.log("Updated selected extras:", selectedExtras);

      return {
        selectedExtras,
      };
    });
  };
  

  render() {
    const { product } = this.props;
    const { selectedIngredients, selectedExtras } = this.state;

    return (
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
                <span
                  className={`${style.checkboxIconWrapper}`}
                  onClick={() => this.handleExtraClick(item.ingredient.id)}
                >
                  {selectedExtras[item.ingredient.id] ? (
                    <SelectedProduct />
                    
                  ) : (
                    <img
                      src="/image/icons/checkbox.png"
                      alt="ajouter un produit au panier"
                      
                    />
                  )}
                  {item.ingredient.title} (+{item.additionalPrice} €)
                </span>
              </li>
            ))}
          </ul>
        
        </div>
      </div>
    );
  }
}

export default Customisation;







