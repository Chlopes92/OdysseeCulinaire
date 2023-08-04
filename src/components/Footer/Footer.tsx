import style from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.center}>
        <h2>@EclairAuCafé</h2>
        <img src="/image/icons/icon-footer.png" alt="" />
      </div>
    </section>
  );
};

export default Footer;
