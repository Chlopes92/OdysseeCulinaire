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
                <li>Click & Collect</li>
                <li>Service en salle</li>
                <li>Livraison possible</li>
            </ul>



            <div className={style.link}>
                <button>Emporté</button>
                <button>Sur place</button>
                <button><NavLink to='/form'>Livraison</NavLink></button>
            </div>
        </div>
        </section>)
       }
</div>
)}
     


export default Modal;