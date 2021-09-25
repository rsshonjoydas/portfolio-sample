import services from "../adapters/service-card";
import classes from "../styles/services.module.css";

const Services = () => {
  return (
    <div className="mb-5 section">
      <h2 className="section-title">Services We Provide</h2>
      <div className={classes.wrapper}>
        {services.map((service) => {
          return (
            <>
              <div className={classes.box}>
                <div className={classes.frontFace}>
                  <div className={classes.icon}>
                    <i className={service.icon}></i>
                  </div>
                  <span>{service.title}</span>
                </div>
                <div className={classes.backFace}>
                  <span>{service.title}</span>
                  <p>{service.label}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
