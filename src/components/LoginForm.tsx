import classes from "../styles/login.module.css";
import SocialAuth from "./SocialAuth";

const LoginForm = () => {
  return (
    <div className={`section ${classes.loginForm}`}>
      <div className={classes.loginBox}>
        <h2 className="section-title">Login</h2>
        <form>
          <div className={classes.userBox}>
            <input type="text" name="" required />
            <label>Username</label>
          </div>
          <div className={classes.userBox}>
            <input type="password" name="" required />
            <label>Password</label>
          </div>
          <SocialAuth />
          <a className={classes.submit} href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
