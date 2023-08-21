import style from './Button.module.css';


interface ButtonProps  {
    title: string;
    callBack?: () => void;

}

const Button = (props: ButtonProps) => {
    const {title, callBack} = props;

    return (
        <button onClick={callBack} className={`${style.btn} ${style.custom_btn}`}>{title}</button>
    )
}

export default Button;