import style from './Modal.module.css';

interface IModalProps {
    children: JSX.Element | JSX.Element[];
}

const Modal = (props: IModalProps) => {
    const { children } = props;

    return (
        (<section>
            <div className={style.overlay}></div>
            <div className={style.modalContent}>
                {children}
            </div>
        </section>)
    )
}

export default Modal;