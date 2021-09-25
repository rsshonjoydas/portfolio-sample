import classes from "../styles/skill.module.css";

const Skills = () => {
  return (
    <div className={classes.skills}>
      <div className={classes.skill}>
        <div className={classes.skillName}>HTML</div>
        <div className={classes.skillBar}>
          <div
            className={classes.skillPer}
            per="90%"
            style={{ maxWidth: "90%" }}
          ></div>
        </div>
      </div>

      <div className={classes.skill}>
        <div className={classes.skillName}>CSS</div>
        <div className={classes.skillBar}>
          <div
            className={classes.skillPer}
            per="70%"
            style={{ maxWidth: "70%" }}
          ></div>
        </div>
      </div>

      <div className={classes.skill}>
        <div className={classes.skillName}>Javascript</div>
        <div className={classes.skillBar}>
          <div
            className={classes.skillPer}
            per="60%"
            style={{ maxWidth: "60%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
