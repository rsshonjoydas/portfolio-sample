import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/Button";
import classes from "../styles/login.module.css";
import SocialAuth from "./SocialAuth";

const LoginForm = () => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const history = useHistory();

  const signInWithEmailAndPassword2 = () => {
    if (error !== "") setError("");

    setAuthenticating(true);

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((result: any) => {
        // logging.info(result);
        history.push("/");
      })
      .catch((error: { message: React.SetStateAction<string> }) => {
        // logging.error(error);
        setAuthenticating(false);
        setError(error.message);
      });
  };

  return (
    <div className={`section ${classes.loginForm}`}>
      <div className={classes.loginBox}>
        <h2 className="section-title">Login</h2>
        <form>
          {/* //? input box */}
          <div className={classes.userBox}>
            <input
              type="text"
              name=""
              required
              onChange={(event) => setEmail(event.target.value)}
            />
            <label>Username</label>
          </div>
          <div className={classes.userBox}>
            <input
              type="password"
              name=""
              required
              onChange={(event) => setPassword(event.target.value)}
            />
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
          <Button type="submit" onClick={() => signInWithEmailAndPassword2()}>
            <span>Submit</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
