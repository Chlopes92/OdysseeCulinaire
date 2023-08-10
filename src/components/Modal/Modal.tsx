import style from './Modal.module.css';

interface IModalProps {
    children: JSX.Element | JSX.Element[];
}

const Modal = (props: IModalProps) => {
    const { children } = props;

    return (
        (<section className={style.overlay}>
            <div className={style.modalContent}>
                {children}
            </div>
        </section>)
    )
}

export default Modal;