import downloadIcon from "../../assets/icon/download.png";
import Button from "../../components/Button";
import "./styles.css";

const HomePage = () => (
  <section id="homeSection">
    <div
      id="homePhoto"
      role="img"
      aria-label="Foto de Ana Laura sorrindo para a câmera"
    ></div>
    <div id="homeContent">
      <div id="homeTexts">
        <h1 className="titleH1">Ana Laura Feltrin</h1>
        <h2>Desenvolvedora front-end</h2>
      </div>
      <Button buttonType="downloadResume" />
    </div>
  </section>
);

export default HomePage;
