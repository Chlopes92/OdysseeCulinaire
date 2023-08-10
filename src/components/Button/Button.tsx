import style from './Button.module.css';

interface ButtonProps  {
    title: string;
    onclick? : () => void;
}

const Button = (props: ButtonProps) => {
    const {title} = props;

    return (
        <button className={style.button}>{title}</button>
    )
}

export default Button;