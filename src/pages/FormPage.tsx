import PaymentForm from "components/PaymentForm/PaymentForm";
import { useForm } from "react-hook-form"; // npm i react-hook-form



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

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    console.log('errors', errors);

    return (
        <div>
            {/* Coordonnées */}
            <h2>1.Coordonnées</h2>
            <p> Veuillez saisir votre adresse e-mail pour continuer en tant que nouveau client ou vous connecter à votre compte personnel.</p>

            <PaymentForm onSubmit={handleSubmit((data) => {
                console.log("data", data)
            })}>
                <div>
                    <label htmlFor="email">*Email:</label>
                    {/* {required : "Ce champ est obligatoire"} permet d'avoir le focus sur l'input et rend le champ obligatoire */}
                    <input {...register("email", { required: "Ce champ est obligatoire" })} id="email" placeholder="odyssee@culinaire.com" />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <button type="submit">Envoyer</button>
            </PaymentForm>


            {/* Expedition et Livraison */}
            <h2>2.Expédition et Livraison</h2>
            <p> Tous les champs(*)sont obligatoires.</p>

            <PaymentForm onSubmit={handleSubmit((data) => {
                console.log("data", data)
            })}>
                <div>
                    {/* Nom */}
                    <label htmlFor="nom">*Nom:</label>
                    <input {...register("nom", { required: "Ce champ est obligatoire" })} id="nom" />
                    {errors.nom && <p>{errors.nom.message}</p>}

                    {/* Prenom */}
                    <label htmlFor="prenom">*Prénom:</label>
                    <input {...register("prenom", { required: "Ce champ est obligatoire" })} id="prenom" />
                    {errors.prenom && <p>{errors.prenom.message}</p>}

                    {/* Pays */}
                    <label htmlFor="pays">*Pays / Région :</label>
                    <input {...register("pays", { required: "Ce champ est obligatoire" })} id="pays" />
                    {errors.pays && <p>{errors.pays.message}</p>}

                    {/* Adresse */}
                    <label htmlFor="adresse">*Adresse :</label>
                    <input {...register("adresse", { required: "Ce champ est obligatoire" })} id="adresse" />
                    {errors.adresse && <p>{errors.adresse.message}</p>}


                    {/* Compléments d'adresse */}
                    <label htmlFor="etage">Etage,esc,bat :</label>
                    <input {...register("etage")} id="etage" />
                {/* </div>

                <div> */}
                    {/* Code Postal */}
                    <label htmlFor="codePostal">*Code postal:</label>
                    <input {...register("codePostal", { required: "Ce champ est obligatoire", maxLength: { value: 6, message: "Vous avez renseigné plus de 5 caractères pour le code postal" } })} id="codePostal" placeholder="75000" />
                    {errors.codePostal && <p>{errors.codePostal.message}</p>}

                    {/* Ville */}
                    <label htmlFor="ville">*Ville:</label>
                    <input {...register("ville", { required: "Ce champ est obligatoire" })} id="ville" />
                    {errors.ville && <p>{errors.ville.message}</p>}


                    {/* Téléphone */}
                    <label htmlFor="telephone">*Téléphone :</label>
                    <input {...register("telephone", { required: "Ce champ est obligatoire" })} id="telephone" placeholder="+33612345678" />
                    {errors.telephone && <p>{errors.telephone.message}</p>}
                </div>

                <button type="submit">Livraison</button>
            </PaymentForm>

            {/* Facturation et paiement */}
            <h2>3.Facturation et Paiement</h2>
            <p>MODE DE PAIEMENT</p>
            <p>Paiement 100% sécurisé</p>
            <p>Les données de votre carte bancaire sont envoyées de manière sécurisée. Toutes les informations sont protégées à l'aide de la technologie Secure Sockets Layer(SSL).</p>


            <PaymentForm onSubmit={handleSubmit((data) => {
                console.log("data", data)
            })}>
                <div>

                    {/* Numéro de carte */}
                    <label htmlFor="cartNumber">*Numéro de la carte:</label>
                    <input {...register("cartNumber", { required: "Ce champ est obligatoire", maxLength: { value: 17, message: "Veuillez renseigner les 16 chiffres figurant sur votre carte" }})} id="cartNumber" placeholder="1234 5678 1234 5678" />
                    {errors.cartNumber && <p>{errors.cartNumber.message}</p>}

                    {/* Titulaire de la carte */}
                    <label htmlFor="titulaire">*Titulaire de la carte:</label>
                    <input {...register("titulaire", { required: "Ce champ est obligatoire" })} id="titulaire" />
                    {errors.titulaire && <p>{errors.titulaire.message}</p>}

                    {/* Date d'expiration de la carte */}
                    <label htmlFor="expirationDate">*Date d'expiration:</label>
                    <input {...register("expirationDate", { valueAsDate: true, required: "Ce champ est obligatoire" })} id="expirationDate" />
                    {errors.expirationDate && <p>{errors.expirationDate.message}</p>}

                    {/* Cryptogramme */}
                    <label htmlFor="cryptogramme">*Cryptogramme:</label>
                    <input {...register("cryptogramme", { required: "Ce champ est obligatoire", maxLength: { value: 4, message: "Veuillez renseigner les 3 chiffres figurant au verso de votre carte"}})} id="cryptogramme" placeholder="123" />
                    {errors.cryptogramme && <p>{errors.cryptogramme.message}</p>}

                </div>

                <button type="submit">Payer et passer commande</button>
            </PaymentForm>

            <p>En cliquant sur «Payer», je confirme avoir lu et accepté les conditions générales de vente et j'accepte le traitement de mes données personnelles par LOdyssée Culinaire dans les thermes énoncés des conditions générales de vente, dans les objectifs détaillés de votre Déclaration de Confidentialité et dans la gestion de ma commande. Si j'ai moins de 16 ans, je confirme avoir le consentement parental pour divulguer mes données personnelles. Conformément aux lois et réglementations en vigueur, vous avez le droit d'accéder, de corriger et de supprimer toutes les données qui peuvent vous concerner. Vous pouvez également nous demander de ne pas vous envoyer de communications personnalisées sur nos produits et services. Ce droit peut être exercé à tout moment en nous envoyant un avis à notre section Contact dans notre Déclaration de Confidentialité.</p>
        </div>
    )
}
export default FormPage;