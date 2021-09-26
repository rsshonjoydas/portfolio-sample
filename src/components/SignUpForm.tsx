import { Link } from "react-router-dom";
import classes from "../styles/login.module.css";
import SocialAuth from "./SocialAuth";

const SignUpForm = () => {
  return (
    <div className={`section ${classes.loginForm}`}>
      <div className={classes.loginBox}>
        <h2 className="section-title">Sign Up</h2>
        <form>
          {/* //? input box */}
          <div className={classes.userBox}>
            <input type="text" name="" required />
            <label>Name</label>
          </div>
          <div className={classes.userBox}>
            <input type="email" name="" required />
            <label>Email</label>
          </div>
          <div className={classes.userBox}>
            <input type="password" name="" required />
            <label>Password</label>
          </div>
          <div className={classes.link}>
            {/* //? social sign up login */}
            <p className={classes.socialText}>
              Or Sign Up with social platforms
            </p>
            <SocialAuth />
            {/* //? sign up link */}
            <Link to="{#}">Already have an account?</Link>{" "}
            <span className={classes.or}>Or </span>
            <Link to="/login" className={classes.signupText}>
              Sign In
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

export default SignUpForm;
