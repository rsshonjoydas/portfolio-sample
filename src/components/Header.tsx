import { Button } from "@mui/material";
import profile from "../images/profile.png";

const Header = () => {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi,
          <br />
          I'am <span className="home__title-color">Marlon</span>
          <br />
          Web Designer
        </h1>

        <Button variant="contained" size="large" href="#" className="button">
          Contact
        </Button>
      </div>

      <div className="home__social">
        <a href="" className="home__social-icon">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="" className="home__social-icon">
          <i className="bx bxl-behance"></i>
        </a>
        <a href="" className="home__social-icon">
          <i className="bx bxl-github"></i>
        </a>
      </div>

      <div className="home__img">
        <img src={profile} alt="" />
      </div>
    </section>
  );
};

export default Header;
