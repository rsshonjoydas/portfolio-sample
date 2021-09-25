import { Link } from "react-router-dom";
import classes from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <div id="scene" className={classes.scene} data-hover-only="false">
          <div className={classes.circle} data-depth="1.2"></div>

          <div className={classes.one} data-depth="0.9">
            <div className={classes.content}>
              <span className={classes.piece}></span>
              <span className={classes.piece}></span>
              <span className={classes.piece}></span>
            </div>
          </div>

          <div className={classes.two} data-depth="0.6">
            <div className={classes.content}>
              <span className={classes.piece}></span>
              <span className={classes.piece}></span>
              <span className={classes.piece}></span>
            </div>
          </div>
          <div className={classes.three} data-depth="0.4">
            <div className={classes.content}>
              <span className={classes.piece}></span>
              <span className={classes.piece}></span>
              <span className={classes.piece}></span>
            </div>
          </div>

          <p className={classes.p404} data-depth="0.50">
            404
          </p>
          <p className={classes.p404} data-depth="0.10">
            404
          </p>
        </div>

        <div className={classes.text}>
          <article>
            <p>
              Uh oh! Looks like you got lost. <br />
              Go back to the homepage if you dare!
            </p>
            <button>
              <Link to="/">Back Home</Link>
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
