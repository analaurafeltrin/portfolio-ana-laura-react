import portfolioIcon from "../../assets/icon/portfolio.png";
import "./styles.css";

const NavBar = () => (
  <nav>
    <img src={portfolioIcon} alt="" />
    <ul id="navBarLinks">
      <li>
        <a href="#aboutMeSection">Sobre mim</a>
      </li>
      <li>
        <a href="#skillsSection">Skills</a>
      </li>
      <li>
        <a href="#projectsSection">Projetos</a>
      </li>
      <li>
        <a href="#contactSection">Contato</a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
