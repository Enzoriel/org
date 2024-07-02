import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}>
      <div className="footer__container">
        <div className="footer__logo">
          <img src="/img/logo.png" alt="Logo" />
        </div>
        <div className="footer__social">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="/img/instagram.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="/img/twitter.png" alt="Twitter" />
          </a>
        </div>
        <p className="footer__text" style={{ color: "#FFFFFF" }}>
          Desarrollado por Alura
        </p>
      </div>
    </footer>
  );
};

export default Footer;
