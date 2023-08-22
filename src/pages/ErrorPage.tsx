import Header from "components/Header/Header";
import style from "./ErrorPage.module.css";
import { NavLink } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className={style.background_image}>
        <NavLink to="/">
          <button className={`${style.btn} ${style.custom_btn}`}>
            Retour Accueil
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default ErrorPage;
