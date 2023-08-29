import Slider from "react-slick"; // npm install react-slick slick-carousel
import style from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

  };

  // Tableau des noms de fichiers d'images
  const imageNames = ["picture1.png", "picture2.png", "picture3.png", "picture4.png", "picture5.png", "picture6.png"];

  return (
    <Slider {...settings}>
      {/* Utilisation de la méthode map pour créer dynamiquement les éléments du carrousel */}
      {imageNames.map((imageName, index) => (
        <div className={style.div} key={index}>
          <img src={`/image/carousel/${imageName}`} alt="" />
        </div>
      ))}
    </Slider>

  );
}

export default Carousel;