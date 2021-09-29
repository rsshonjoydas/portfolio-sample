import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../firebase";
import classes from "../styles/login.module.css";
import SocialAuth from "./SocialAuth";

const SignUpForm = () => {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const signUpWithEmailAndPassword = () => {
    if (password !== confirm)
      setError("Please make sure your passwords match.");

    if (error !== "") setError("");

    setRegister(true);

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // logging.info(result);
        history.push("/login");
      })
      .catch((error) => {
        // logging.error(error);

        if (error.code.includes("auth/weak-password")) {
          setError("Please enter a stronger password.");
        } else if (error.code.includes("auth/email-already-in-use")) {
          setError("Email already in use.");
        } else {
          setError("Unable to register.  Please try again later.");
        }

        setRegister(false);
      });
  };

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
            <input
              type="email"
              name=""
              required
              onChange={(event) => setEmail(event.target.value)}
            />
            <label>Email</label>
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
          <div className={classes.userBox}>
            <input
              type="password"
              name=""
              required
              onChange={(event) => setConfirm(event.target.value)}
            />
            <label>Confirm Password</label>
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
          <Button type="submit" onClick={() => signUpWithEmailAndPassword()}>
            <span>Submit</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
