import Button from "../../components/Button";
import "./styles.css";

const AboutPage = () => (
  <section id="aboutMeSection">
    <div id="aboutMeTextsFlexContainer">
      <div id="aboutMeTextsFlexItem">
        <h1 className="titleH1">Sobre mim</h1>
        <p>
          Olá! Meu nome é Ana Laura. Tenho 25 anos, moro em Ribeirão Preto / SP,
          e sou formada em psicologia. Apesar de atuar na área, venho
          desenvolvendo minhas habilidades com a programação front-end, e tenho
          o desejo de realizar uma transição de carreira.
        </p>
        <Button buttonType="linkedin" />
      </div>
    </div>
    <div id="aboutMePhoto" aria-hidden="true"></div>
  </section>
);

export default AboutPage;
