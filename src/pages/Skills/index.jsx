import Button from "../../components/Button";
import "./styles.css";

const SkillsPage = () => (
  <section id="skillsSection">
    <div className="overlay">
      <h1 id="titleSkills">Skills</h1>
      <ul>
        <li>Inglês intermediário</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>ReactJS</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Vercel</li>
      </ul>
      <Button buttonType="downloadCompleteResume" />
    </div>
  </section>
);

export default SkillsPage;
