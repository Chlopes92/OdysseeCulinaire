import Counter from "components/Counter/Counter";
import { useCartContext } from "contexts/Cart.context";
import { Link, useLocation } from "react-router-dom";
import style from "./ProductCard.module.css";

const ProductCard = () => {

    const { products, removeProduct, removeOne, addOne } = useCartContext();
    const location = useLocation();
 
      
    
    return (
        <main className={style.productCard}>
            <ul className={style.sizecard}>
                {products.map((p) =>
                    <li className={style.flex} key={p.id}>
                        <img className={style.img} src={p.product.img.src} alt={p.product.title} />
                        <section>
                            <div className={style.title}>
                                <h3>{p.product.title}</h3>
                                <p>{p.product.price}€</p>
                            </div>
                            <div className={style.custom}>
                          
                          {/* Affiche les ingrédients inclus */}
                                <div className={style.ingredient}>
                                    <p><strong>Inclus :</strong></p> {p.product.includedIngredients.map((ii)=>
                                    <p> {ii.isSelected &&  `${ii.ingredient.title} `} / </p>
                                    )} 
                                </div>

                        {/* Affiche les extras choisis */}
                                <div className={style.ingredient}>
                                    <p><strong>Extras :</strong></p> {p.product.extras.map((extra)=>
                                    <p> {extra.isSelected &&  `${extra.ingredient.title} (+ ${extra.additionalPrice}€)`}</p>
                                    )} 
                                </div>
                            </div>
                        </section>
                        <div >
                            { /* condition ternaire pour affiche du quantity picker selon la page */ }
                            {location.pathname == "/cart" ? <div className={style.icons}>


  return (
    <main className={style.productCard}>
      <ul className={style.sizecard}>
        {products.map((p) => (
          <li className={style.flex} key={p.id}>
            <img className={style.img} src={p.product.img.src} alt={p.product.title} />
            <section>
              <div className={style.title}>
                <h3>{p.product.title}</h3>
                <p>{p.product.price}€</p>
              </div>
              <div className={style.custom}>
                {/* Affiche les ingrédients inclus */}
                <div className={style.ingredient}>
                  <p><strong>Inclus :</strong></p>
                  {p.product.includedIngredients.map((ii) => (
                    <p>{ii.isSelected && `${ii.ingredient.title} `}</p>
                  ))}
                </div>
                {/* Affiche les extras choisis */}
                <div className={style.ingredient}>
                  <p><strong>Extras :</strong></p>
                  {p.product.extras.map((extra) => (
                    <p>{extra.isSelected && `${extra.ingredient.title} (+ ${extra.additionalPrice}€)`}</p>
                  ))}
                </div>
              </div>
            </section>
            <div>
              {/* condition ternaire pour affiche du quantity picker selon la page */}
              {location.pathname === "/cart" ? (
                <div className={style.icons}>
                  <Counter
                    quantity={p.quantity}
                    add={() => addOne(p.product, p.quantity)}
                    remove={() => removeOne(p.product)}
                  />
                  <Link to={`/product/${p.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                      {/* ... SVG path data ... */}
                    </svg>
                  </Link>
                  <button onClick={() => removeProduct(p.product)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="71" viewBox="0 0 61 71" fill="none">
                      {/* ... SVG path data ... */}
                    </svg>
                  </button>
                </div>
              ) : (
                <div>
                  <p> Quantité:</p>
                  <p className={style.borderQuantity}>{p.quantity}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProductCard;
