import Customisation from "components/Customisation/Customisation";
import { Link, NavLink, redirect, useParams } from "react-router-dom";
import style from "./ProductDetailPageCustom.module.css"
import { useEffect, useState } from "react";
import { getTotalPriceWithExtra } from "../../src/contexts/TotalExtraPrice";
import { IProduct } from "mocks/products";
import Button from "components/Button/Button";
import { useCartContext } from "contexts/Cart.context";


const ProductDetailPageCustom = () => {
    const { id } = useParams();

    // utiliser useState pour pouvoir accéder à la modification d'un élément d'un objet
    const [p, setP] = useState<IProduct | undefined>();
    const [totalPrice, setTotalPrice] = useState(0);
    const { modify, products } = useCartContext();

    const product = products.find(product => product.idP === id);
    const custom = () => modify(product!);

    useEffect(() => {
        if (!product) {
            redirect("/*");
        } else {
            setP(product.product);
        }
    }, [])

    useEffect(() => {
        if (p) {
            setTotalPrice(getTotalPriceWithExtra(p))
        }
    }, [p])

    // Image de la page
    const AphroditeImage = '/image/icons/aphrodite.png';

    return (
        <section>
            {p && (
                <>
                    <div className={style.containerText}>
                        <Link to="/products">
                            <p>&lt; Revenir à la carte</p>
                        </Link>
                        <div className={style.container}>
                            <div className={style.containerImg}>
                                <img className={style.imageResponsive} src={p!.img.src} alt={p!.img.alt} />
                                <img className={style.aphroditeImage} src={AphroditeImage} alt={AphroditeImage} />
                            </div>
                            <Customisation p={p!} setP={setP} />
                        </div>
                    </div>

                    <div className={style.containeurBas}>
                        <div className={style.buttonAdd}>
                            <NavLink to="/cart">
                                <Button
                                    title={`Modifier le produit - ${totalPrice} €`}
                                    onClick={() => custom()}
                                />
                            </NavLink>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};


export default ProductDetailPageCustom;