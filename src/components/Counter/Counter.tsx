import style from "./Counter.module.css";

interface QuantityPickerProps {
    quantity: number;
    add: () => void;
    remove: () => void
}


const Counter = (props: QuantityPickerProps) => {
    const { quantity, add, remove } = props;

    return (
        <div className={style.flex}>
            <button onClick={remove}><img src="image/icons/counter-.png" alt="enlever un produit" /></button>
            <p>{quantity}</p>
            <button onClick={add}><img src="image/icons/counter+.png" alt="ajouter un produit" /></button>
        </div>
    )
}

export default Counter; 