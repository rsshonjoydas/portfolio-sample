import Skills from "../components/Skills";
import work from "../images/work3.jpg";

const Skill = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Profesional Skills</h2>
          <p className="skills__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            optio id vero amet, alias architecto consectetur error eum eaque
            sit.
          </p>
          <Skills />
        </div>

        <div>
          <img src={work} alt="" className="skills__img" />
        </div>
      </div>
    </section>
  );
};

export default Skill;
