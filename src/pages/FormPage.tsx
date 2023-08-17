import PaymentForm from "components/PaymentForm/PaymentForm";
import { useForm } from "react-hook-form"; // npm i react-hook-form
import style from "./FormPage.module.css";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "contexts/Cart.context";
import Button from "components/Button/Button";



type FormValues = {
    email: string;
    nom: string;
    prenom: string;
    pays: string;
    adresse: string;
    etage: string;
    codePostal: string;
    ville: string;
    telephone: string;
    cartNumber: string;
    titulaire: string;
    expirationDate: Date;
    cryptogramme: string;
}

const FormPage = () => {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormValues>();
    const { products, removeProduct, getTotalPrice } = useCartContext();
    const total = getTotalPrice();
    console.log("isValid", isValid);


    return (

        <>
            <a className={style.retour}><Link to='/products' > <span>&lsaquo;</span> Revenir à la carte </Link> </a>

            <div className={style.page} >

                <section className={style.formulaire}>
                    {/* Coordonnées */}
                    <h2>1.Coordonnées</h2>
                    <hr />
                    <p className={style.small}> Veuillez saisir votre adresse e-mail pour continuer en tant que nouveau client ou vous connecter à votre compte personnel.</p>

                    <PaymentForm onSubmit={handleSubmit((data) => {
                        console.log("data", data)
                    })}>
                        <div className={style.flex}>
                            <label htmlFor="email">*Email:</label>
                            {/* {required : "Ce champ est obligatoire"} permet d'avoir le focus sur l'input et rend le champ obligatoire */}
                            <input {...register("email", {
                                required: "Ce champ est obligatoire", pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Veuillez saisir une adresse mail valide',
                                }
                            })} id="email" />
                            {errors.email && <p className={style.errorMessage}>{errors.email.message}</p>}
                        </div>

                        <button type="submit">Envoyer</button>
                    </PaymentForm>


                    {/* Expedition et Livraison */}
                    <h2>2.Expédition et Livraison</h2>
                    <hr />
                    <p className={style.small}> Tous les champs (*) sont obligatoires.</p>

                    <PaymentForm onSubmit={handleSubmit((data) => {
                        console.log("data", data)
                    })}>
                        <div>
                            <div className={style.flex}>

                                {/* Nom */}
                                <label htmlFor="nom">* Nom:</label>
                                <input {...register("nom", { required: "Ce champ est obligatoire" })} id="nom" />
                                {errors.nom && <p className={style.errorMessage}>{errors.nom.message}</p>}

                                {/* Prenom */}
                                <label htmlFor="prenom">* Prénom:</label>
                                <input {...register("prenom", { required: "Ce champ est obligatoire" })} id="prenom" />
                                {errors.prenom && <p className={style.errorMessage}>{errors.prenom.message}</p>}
                            </div>

                            {/* Pays */}
                            <div className={style.flex}>
                                <label htmlFor="pays">* Pays / Région :</label>
                                <input {...register("pays", { required: "Ce champ est obligatoire" })} id="pays" />
                                {errors.pays && <p className={style.errorMessage}>{errors.pays.message}</p>}
                            </div>

                            {/* Adresse */}
                            <div className={style.flex}>
                                <label htmlFor="adresse">* Adresse :</label>
                                <input {...register("adresse", { required: "Ce champ est obligatoire" })} id="adresse" />
                                {errors.adresse && <p className={style.errorMessage}>{errors.adresse.message}</p>}
                            </div>


                            {/* Compléments d'adresse */}
                            <div className={style.flex}>
                                <label htmlFor="etage">Etage,esc,bat :</label>
                                <input {...register("etage")} id="etage" />
                            </div>

                            <div className={style.flex}>
                                {/* Code Postal */}
                                <label htmlFor="codePostal">* Code postal:</label>
                                <input {...register("codePostal", { required: "Ce champ est obligatoire", minLength: { value: 5, message: "Vous avez renseigné moins de 5 caractères pour le code postal" } })} id="codePostal" />
                                {errors.codePostal && <p className={style.errorMessage}>{errors.codePostal.message}</p>}

                                {/* Ville */}
                                <label htmlFor="ville">* Ville:</label>
                                <input {...register("ville", { required: "Ce champ est obligatoire" })} id="ville" />
                                {errors.ville && <p className={style.errorMessage}>{errors.ville.message}</p>}

                            </div>


                            {/* Téléphone */}
                            <div className={style.flex}>
                                <label htmlFor="telephone">* Téléphone :</label>
                                <input {...register("telephone", { required: "Ce champ est obligatoire" })} id="telephone" />
                                {errors.telephone && <p className={style.errorMessage}>{errors.telephone.message}</p>}
                            </div>
                        </div>

                        <button type="submit">Livraison</button>
                    </PaymentForm>

                    {/* Facturation et paiement */}
                    <h2>3.Facturation et Paiement</h2>
                    <hr />
                    <div className={style.infosPayment}>
                        <p>MODE DE PAIEMENT</p>
                        <p><img src="image\icons\credit-card.png" alt="carte bleue" /> Paiement 100% sécurisé</p>
                        <p className={style.small}>Les données de votre carte bancaire sont envoyées de manière sécurisée. Toutes les informations sont protégées à l'aide de la technologie Secure Sockets Layer(SSL).</p>
                    </div>




                    <div className={style.modePaiement}>
                        <div className={style.cb}>

                            <label htmlFor="carte de paiement" className={style.boxcontainer}> Carte de paiement

                                <input type="radio" id="CB" className={style.check} name="card" />
                                <span className={style.box}></span></label>

                        </div>

                        <div className={style.paypal}>

                            <label htmlFor="paypal" className={style.boxcontainer}><img src="image\icons\paypal.png" alt="paypal" />
                                <input type="radio" id="CB" className={style.check} name="card" />
                                <span className={style.box}></span>

                            </label>
                        </div>

                    </div>


                    <hr className={style.trait} />

                    <div className={style.iconsCard}>
                        <img src="image\icons\visa.png" alt="visa" />
                        <img src="image\icons\mastercard.png" alt="mastercard" />
                        <img src="image\icons\amex.png" alt="amex" />
                    </div>



                    <PaymentForm onSubmit={handleSubmit((data) => {
                        console.log("data", data)
                    })}>
                        <div>

                            {/* Numéro de carte */}
                            <div className={style.flex}>
                                <label htmlFor="cartNumber">* Numéro de la carte:</label>
                                <input {...register("cartNumber", {
                                    required: "Ce champ est obligatoire", pattern: {
                                        value: /^[0-9]{16}$/,
                                        message: "Veuillez renseigner les 16 chiffres figurant au recto de votre carte",
                                    }
                                })} id="cartNumber" />
                                {errors.cartNumber && <p className={style.errorMessage}>{errors.cartNumber.message}</p>}
                            </div>

                            {/* Titulaire de la carte */}
                            <div className={style.flex}>
                                <label htmlFor="titulaire">* Titulaire de la carte:</label>
                                <input {...register("titulaire", { required: "Ce champ est obligatoire" })} id="titulaire" />
                                {errors.titulaire && <p className={style.errorMessage}>{errors.titulaire.message}</p>}
                            </div>



                            <div className={style.flex}>

                                {/* Date d'expiration de la carte */}
                                <label htmlFor="expirationDate">* Date d'expiration:</label>
                                <input {...register("expirationDate", {
                                    required: "Ce champ est obligatoire",
                                    pattern: {
                                        value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                                        message: "Veuillez renseigner une date au format 01/01"
                                    }
                                })} id="expirationDate" />
                                {errors.expirationDate && <p className={style.errorMessage}>{errors.expirationDate.message}</p>}

                                {/* Cryptogramme */}
                                <label htmlFor="cryptogramme">* Cryptogramme:</label>
                                <input {...register("cryptogramme", {
                                    required: "Ce champ est obligatoire", pattern: {
                                        value: /^[0-9]{3}$/,
                                        message: "Veuillez renseigner les 3 chiffres figurant au verso de votre carte",
                                    }
                                })} id="cryptogramme" />
                               

                            </div>


                            {errors.cryptogramme && <p className={style.errorMessage}>{errors.cryptogramme.message}</p>}

                        </div>
                        {isValid
                            ? (<NavLink to="/order"><button type="submit">Payer et passer commande</button></NavLink>)
                            : <button type="submit">Payer et passer commande</button>
                        }


                    </PaymentForm>
                    <p className={style.small}>En cliquant sur «Payer», je confirme avoir lu et accepté les conditions générales de vente et j'accepte le traitement de mes données personnelles par LOdyssée Culinaire dans les thermes énoncés des conditions générales de vente, dans les objectifs détaillés de votre Déclaration de Confidentialité et dans la gestion de ma commande. Si j'ai moins de 16 ans, je confirme avoir le consentement parental pour divulguer mes données personnelles. Conformément aux lois et réglementations en vigueur, vous avez le droit d'accéder, de corriger et de supprimer toutes les données qui peuvent vous concerner. Vous pouvez également nous demander de ne pas vous envoyer de communications personnalisées sur nos produits et services. Ce droit peut être exercé à tout moment en nous envoyant un avis à notre section Contact dans notre Déclaration de Confidentialité.
                    </p>
                </section>


                {/* Section recap et prix total */}
                <section className={style.recap}>

                    <article className={style.cart}>
                        <h3>Votre commande</h3>
                        <div className={style.productCard}>
                            {products.map((p) =>
                                <article>
                                    <img src={p.product.img.src} alt={p.product.img.alt} width="150px" />
                                    <div className={style.infosProductCard} >
                                        <h4>{p.product.title}</h4>
                                        <div>

                                            <p>{p.product.price}€</p>
                                            <p>QTE : {p.quantity}</p>
                                        </div>

                                    </div>
                                    <button onClick={() => removeProduct(p.product)}>SUPPRIMER</button>
                                </article>

                            )}


                        </div>
                    </article>

                    <article className={style.totalPrice}>
                        <div className={style.total}>

                            {/* Total correspond au prix du panier + livraison */}
                            <h4>Total</h4>
                            <p><strong>{total + 3}  €</strong></p>
                        </div>
                        <hr />

                        {/* Sous-total correspond au prix du panier */}
                        <div className={style.total}>
                            <p>Sous-total</p>
                            <p>{total} €</p>
                        </div>
                        <hr />

                        {/* Livraison 2€ */}
                        <div className={style.total}>
                            <p>Livraison</p>
                            <p>3 €</p>
                        </div>
                        <hr />

                        {/* Taxes 1,20€ */}
                        <div className={style.total}>
                            <p>Taxes incluses</p>
                            <p>1.50 €</p>
                        </div>

                        {isValid
                            ? (<NavLink to="/order"><Button title="Payer et passer votre commande" /></NavLink>)
                            : <Button title="Payer et passer votre commande" />
                        }



                        <p className={style.small}>En passant votre commande, vous acceptez les conditions d'utilisation
                        </p>

                    </article>
                    <img className={style.dyonisos} src="image\icons\dionysos.png" alt="Dyonisos" />
                </section>
            </div>


        </>
    )
}
export default FormPage;