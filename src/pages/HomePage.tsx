import Carousel from "components/Carousel/Carousel";
import style from "./HomePage.module.css"

const HomePage = () =>{
    return (
        <main>
            <Carousel />
            <button className={`${style.btn} ${style.custom_btn}`}>Découvrir</button>
            <img className={`${style.image}`} src="/image/icons/zeus.png" alt="" />
        </main>
    );
}

export default HomePage;