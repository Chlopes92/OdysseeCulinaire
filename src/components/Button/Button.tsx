import style from './Button.module.css';


interface ButtonProps  {
    title: string;
    callBack?: () => void;
    onClick?: () => void;

}

const Button = (props: ButtonProps) => {
    const { title, callBack, onClick } = props;

    return (
        <button onClick={callBack || onClick} className={`${style.btn} ${style.custom_btn}`}>
          {title}
        </button>
    );
}

export default Button;