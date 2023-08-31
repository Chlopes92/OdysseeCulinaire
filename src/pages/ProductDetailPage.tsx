import Customisation from 'components/Customisation/Customisation';
import { NavLink } from 'react-router-dom';
import { IProduct, PRODUCTS } from 'mocks/products';
import { useEffect, useState } from 'react';
import Counter from 'components/Counter/Counter';
import style from '../pages/ProductDetailPage.module.css'
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import { useParams } from 'react-router-dom';
import { useCartContext } from 'contexts/Cart.context';
import { redirect } from "react-router-dom";
import { getTotalPriceWithExtra } from "../../src/contexts/TotalExtraPrice";


const ProductDetailPage = () => {

    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { addOne } = useCartContext();

    const [totalPrice, setTotalPrice] = useState(0);

    // utiliser useState pour pouvoir accéder à la modification d'un élément d'un objet
    const [p, setP] = useState<IProduct | undefined>();

    useEffect(() => {
        // Convertir l'ID de string à number
        const productId = parseInt(id!);

        // // Trouver le produit correspondant par son ID
        const product = PRODUCTS.find(product => product.id === productId);
        console.log(product)
        if (!product) {
            redirect("/*");
        } else {
            // ajout de structuredClone pour forcer la création d'une nouvelle référence aux produits sans toucher le mock
            setP(structuredClone(product));
        }
    }, [])



    useEffect(() => {
        if (p) {
            setTotalPrice(getTotalPriceWithExtra(p))
        }
    }, [p])

    // Image de la page
    const AphroditeImage = '/image/icons/aphrodite.png';

    const add = () => {
        setQuantity(quantity + 1);
    }
    const remove = () => {
        if (quantity > 1)
            setQuantity(quantity - 1);
    }

    const addToBasket = () => {
        p!.isAddToCart = true;
        addOne(p!, quantity)
        console.log("produit", p!)
        console.log ("quantity a ajouter", quantity)
    }


    return (
        <section className={style.general} >
            {p && (
                <>
                    <div className={style.containeur}>
                        <Link to="/products">
                            <p>&lt; Revenir à la carte</p>
                        </Link>
                        <div className={style.container2}>
                           <div className={style.containerImage}>
                              <img className={style.image} src={p!.img.src} alt={p!.img.alt} />
                              <img className={style.aphroditeImage}
                                   src={AphroditeImage}
                                   alt={AphroditeImage} />
                           </div>
                            <Customisation p={p!} setP={setP} />
                        </div>
                    </div>
                    <div className={style.containeurBas}>
                        <div className={style.counterContainer}>
                            <Counter
                                quantity={quantity}
                                add={() => add()}
                                remove={() => remove()}
                            />
                        </div>
                        <div className={style.buttonContainer}>
                            <NavLink to="/products">
                                <Button
                                    title={`Ajouter au Panier : ${totalPrice * quantity} €`}
                                    onClick={() => addToBasket()}
                                />
                            </NavLink>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default ProductDetailPage;
