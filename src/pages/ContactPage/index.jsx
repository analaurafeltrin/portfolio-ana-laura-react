import EmailIcon from "../../assets/icon/e-mail.png";
import WhatsappIcon from "../../assets/icon/whatsapp.png";
import LinkedinIcon from "../../assets/icon/linkedin.png";
import gitHubIcon from "../../assets/icon/github.png";
import InstagramIcon from "../../assets/icon/instagram.png";
import Button from "../../components/Button";
import "./styles.css";

const ContactPage = () => (
  <section id="contactSection">
    <div
      id="contactPhoto"
      role="img"
      aria-label="Foto de Ana Laura sorrindo para a câmera, sentada no chão, escrevendo uma palavra em um cartaz"
    ></div>
    <div id="contactTextsContainer">
      <h1 className="title">Contato</h1>
      <p>
        Se tiver interesse em conhecer um pouco mais do meu trabalho, vou deixar
        minhas formas de contato e redes sociais listadas abaixo.
      </p>

      <div id="contactTextsChild">
        <address className="emailAndPhone">
          <div className="contactItem">
            <img src={EmailIcon} alt="" />
            <p>psianafeltrin@gmail.com</p>
          </div>
          <div className="contactItem">
            <img src={WhatsappIcon} alt="" />
            <p>+55 (16) 99263-0023</p>
          </div>
        </address>
        <div className="socialWrapper">
          <Button buttonType="social" />
        </div>
      </div>
    </div>
  </section>
);

export default ContactPage;
