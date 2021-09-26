import items from "../adapters/socialAuth.data";
import styles from "../styles/SocialAuth.module.css";

const SocialAuth = () => {
  return (
    <>
      <div className={styles.socialMedia}>
        {items.map((item) => (
          <button key={item.id} type="button" className={styles.socialIcon}>
            <i className={item.icon} />
          </button>
        ))}
      </div>
    </>
  );
};

export default SocialAuth;
