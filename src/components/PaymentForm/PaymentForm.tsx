import style from "./PaymentForm.module.css";


interface IPaymentProps {
    children : JSX.Element | JSX.Element[];
    onSubmit : () => void;
}

const PaymentForm = (props: IPaymentProps) => {
    const {children, onSubmit} = props;
    
 
    return (<>
        {/* Coordonnées */}
     
        <form onSubmit={onSubmit} className={style.form} >
            {children}
        </form>
           

            

        
    </>
    )
}

export default PaymentForm;