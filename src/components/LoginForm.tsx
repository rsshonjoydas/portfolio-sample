import { Link } from "react-router-dom";
import classes from "../styles/login.module.css";
import SocialAuth from "./SocialAuth";

const LoginForm = () => {
  return (
    <div className={`section ${classes.loginForm}`}>
      <div className={classes.loginBox}>
        <h2 className="section-title">Login</h2>
        <form>
          {/* //? input box */}
          <div className={classes.userBox}>
            <input type="text" name="" required />
            <label>Username</label>
          </div>
          <div className={classes.userBox}>
            <input type="password" name="" required />
            <label>Password</label>
          </div>
          <div className={classes.link}>
            {/*//? forget password */}
            <Link className={classes.forgetPass} to="{#}">
              Forget your password?
            </Link>
            {/* //? social sign up login */}
            <p className={classes.socialText}>
              Or Sign In with social platforms
            </p>
            <SocialAuth />
            {/* //? sign up link */}
            <Link to="{#}">Don't have an account?</Link>{" "}
            <span className={classes.or}>Or </span>
            <Link to="/signup" className={classes.signupText}>
              Sign Up
            </Link>
          </div>
          {/* //? submit button */}
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
