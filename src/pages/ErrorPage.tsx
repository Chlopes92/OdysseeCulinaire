import Header from 'components/Header/Header';
import style from './ErrorPage.module.css'
const ErrorPage = () => {
  return (
    <main>
    <Header />
    <div className={style.background_image}>
        <button className={`${style.btn} ${style.custom_btn}`}>Retour Accueil</button>
    </div>
    </main>
  );
};

export default ErrorPage;
