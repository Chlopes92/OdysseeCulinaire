import { useState } from 'react';
import style from './Modal.module.css';
import { NavLink } from 'react-router-dom';


const Modal = () => {
    const [modal, setModal] = useState(true);

    const toggleModal = () => {
        setModal(!modal);
    }

return (
    <div>
       {modal && 
        (<section>
        <div  className={style.overlay}></div>
        <div className={style.modalContent}>
        <button className={style.btnClose} onClick={toggleModal}>X</button>
            <h3>Choisissez votre mode de commande</h3>
            <p>Paris - 18eme - 33 rue du Simplon</p>
            <ul className={style.list}>
                <li>Click & Collect (jusqu'à 23h30)</li>
                <li>Service en salle (jusqu'à 00h00)</li>
                <li>Livraison (jusqu'à 23h30)</li>
            </ul>



            <div className={style.link}>
                <button><img src="image\icons\emporter.png" alt="emporter"/>Emporté</button>
                <button><img src="image\icons\sur-place.png" alt="sur-place"/>Sur place</button>
                <button><img src="image\icons\livraison.png" alt="livraison"/><NavLink to='/form'>Livraison</NavLink></button>
            </div>
        </div>
        </section>)
       }
</div>
)}
     


export default Modal;