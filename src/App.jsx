import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/Skills";

const App = () => (
  <>
    <NavBar></NavBar>

    <HomePage></HomePage>

    <AboutPage></AboutPage>

    <SkillsPage></SkillsPage>

    <ProjectPage></ProjectPage>

    <ContactPage></ContactPage>
  </>
);

export { App };
