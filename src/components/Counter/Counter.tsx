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
            <button onClick={remove}> - </button>
            <p>{quantity}</p>
            <button onClick={add}> + </button>
        </div>
    )
}

export default Counter;