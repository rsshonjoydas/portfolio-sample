import { Link } from "react-router-dom";
import items from "../adapters/socialAuth.data";
import styles from "../styles/SocialAuth.module.css";

const SocialAuth = () => {
  return (
    <>
      <p className={styles.socialText}>Or Sign up with social platforms</p>
      <div className={styles.socialMedia}>
        {items.map((item) => (
          <button type="button" className={styles.socialIcon}>
            <i className={item.icon} />
          </button>
        ))}
      </div>
      <div className={styles.link}>
        <Link to="{#}">Forgot password?</Link> or
        <Link to="/signup"> Sign Up</Link>
      </div>
    </>
  );
};

export default SocialAuth;
