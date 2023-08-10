import Modal from "components/Modal/Modal";
import { useState } from "react";
import style from './PaymentPage.module.css'
import { NavLink, useNavigate } from "react-router-dom";

const PaymentPage = () => {

    const [isOpen, setModal] = useState(true);
    const [paymentModal, setPaymentModal] = useState(false);

    const toggleDeliveryModal = () => {
        setModal(!isOpen);
        setPaymentModal(!paymentModal);
    }

    const navigate = useNavigate();

    const togglePaymentModal = ()=> {
        setPaymentModal(!paymentModal);
        navigate(-1);
    }

    const closeModal = () => {
        setModal(!isOpen);
        navigate(-1); 
    }

    
  
   

    return (
        <main>

            {/* Modal pour choisir le mode de commande */}
            {isOpen && 
            <Modal>
                <button className={style.btnClose} onClick={closeModal}>X</button>

                <h3>Choisissez votre mode de commande</h3>
            <p>Paris - 18eme - 33 rue du Simplon</p>
            <ul className={style.list}>
                <li>Click & Collect (jusqu'à 23h30)</li>
                <li>Service en salle (jusqu'à 00h00)</li>
                <li>Livraison (jusqu'à 23h30)</li>
            </ul>

            <div className={style.link}>
                <button onClick={toggleDeliveryModal}><img src="image\icons\emporter.png" alt="emporter"/>Emporté</button>
                <button onClick={toggleDeliveryModal}><img src="image\icons\sur-place.png" alt="sur-place"/>Sur place</button>
                <button><img src="image\icons\livraison.png" alt="livraison"/><NavLink to='/form'>Livraison</NavLink></button>
            </div>
            </Modal>
            }

            {/* Modal pour choisir le mode de paiement */}
            {paymentModal && 
            <Modal>
                <button className={style.btnClose} onClick={togglePaymentModal}>X</button>
                <h3>Choisissez votre mode de paiement</h3>
                <div className={style.icons}>
                <button><NavLink to='/order'><img src="image\icons\card.png" alt="carte bleue"/>Carte</NavLink></button>
                <button><NavLink to='/order'><img src="image\icons\cash.png" alt="especes"/>Especes</NavLink></button>
                </div>
            </Modal>
            }

        </main>

    );
}

export default PaymentPage;