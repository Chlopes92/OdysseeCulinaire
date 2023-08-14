import { useForm } from "react-hook-form"; // npm i react-hook-form

type FormValues = {
    email: string;
    nom: string;
    prenom: string;
    pays: string;
    adresse: string;
    etage:string;
    codePostal: number;
    ville: string;
    telephone: string;
    cartNumber: number;
    titulaire: string;
    expirationDate: Date;
    cryptogramme: number;
}


const PaymentForm = () => {

    const {register} = useForm<FormValues>();
 

    


    return (<>
        {/* Coordonnées */}
     
            <h2>1.Coordonnées</h2>
            <p> Veuillez saisir votre adresse e-mail pour continuer en tant que nouveau client ou vous connecter à votre compte personnel.</p>
        <form action="">
                <label htmlFor="email">*Email:</label>
                <input name="email" id="email"/>
                <button type="submit">Envoyer</button>
            
       

        {/* Expedition et Livraison */}
        
            <h2>2.Expédition et Livraison</h2>
            <p> Tous les champs(*)sont obligatoires.</p>
           
                <div>
                    <label htmlFor="nom">*Nom:</label>
                    <input name="nom" id="nom" />
                    <label htmlFor="prenom">*Prénom:</label>
                    <input name="prenom" id="prenom" />
                </div>
                <label htmlFor="pays">*Pays / Région :</label>
                <input name="pays" id="pays" />

                <label htmlFor="adresse">*Adresse :</label>
                <input name="adresse" id="adresse" />

                <label htmlFor="etage">Etage,esc,bat :</label>
                <input name="etage" id="etage" />

                <div>
                    <label htmlFor="codePostal">*Code postal:</label>
                    <input name="codePostal" id="codePostal"/>
                    <label htmlFor="ville">*Ville:</label>
                    <input name="ville" id="ville" />
                </div>

                <label htmlFor="telephone">*Téléphone :</label>
                <input name="telephone" id="telephone" />

                <button type="submit">Livraison</button>
           


            {/* Facturation et paiement */}
           
                <h2>3.Facturation et Paiement</h2>
                <p>MODE DE PAIEMENT</p>
                <p>Paiement 100% sécurisé</p>
                <p>Les données de votre carte bancaire sont envoyées de manière sécurisée. Toutes les informations sont protégées à l'aide de la technologie Secure Sockets Layer(SSL).</p>

               
                    <label htmlFor="cartNumber">*Numéro de la carte:</label>
                    <input name="cartNumber" id="cartNumber" />

                    <label htmlFor="titulaire">*Titulaire de la carte:</label>
                    <input name="titulaire" id="titulaire" />

                    <div>
                        <label htmlFor="expirationDate">*Date d'expiration:</label>
                        <input name="expirationDate" id="expirationDate" />

                        <label htmlFor="cryptogramme">*Cryptogramme:</label>
                        <input name="cryptogramme" id="cryptogramme" />
                    </div>

                    <button type="submit">Payer et passer commande</button>
            </form>
           

            <p>En cliquant sur «Payer», je confirme avoir lu et accepté les conditions générales de vente et j'accepte le traitement de mes données personnelles par LOdyssée Culinaire dans les thermes énoncés des conditions générales de vente, dans les objectifs détaillés de votre Déclaration de Confidentialité et dans la gestion de ma commande. Si j'ai moins de 16 ans, je confirme avoir le consentement parental pour divulguer mes données personnelles. Conformément aux lois et réglementations en vigueur, vous avez le droit d'accéder, de corriger et de supprimer toutes les données qui peuvent vous concerner. Vous pouvez également nous demander de ne pas vous envoyer de communications personnalisées sur nos produits et services. Ce droit peut être exercé à tout moment en nous envoyant un avis à notre section Contact dans notre Déclaration de Confidentialité.</p>

        
    </>
    )
}

export default PaymentForm;