import classes from "../styles/Button.module.css";

const Button = ({ className, children, ...rest }: any) => {
  return (
    <a className={`${classes.submit} ${className}`} {...rest}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span style={{ textAlign: "center" }}>{children}</span>
    </a>
  );
};
export default Button;
