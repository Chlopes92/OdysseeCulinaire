import Carousel from "components/Carousel/Carousel";
import style from "./HomePage.module.css"
import { Link } from "react-router-dom";

const HomePage = () =>{
    return (
        <main>
            <Carousel />
            <Link to="/products"><button className={`${style.btn} ${style.custom_btn}`}>Découvrir</button></Link>
            <img className={`${style.image}`} src="/image/icons/zeus.png" alt="" />
        </main>
    );
}

export default HomePage;