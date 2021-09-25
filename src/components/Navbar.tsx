import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <section className="navbar-bg l-header">
        <nav className="navbar navbar-expand-lg navbar-light nav-bd-grid">
          <div className="container">
            <NavLink className="navbar-brand nav__logo" to="/">
              RS
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse ${showMenu ? "show" : ""}`}
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav__list">
                <li className="nav-item nav__item">
                  <NavLink
                    className="nav-link active nav__link"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item nav__item">
                  <NavLink className="nav-link nav__link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item nav__item">
                  <NavLink className="nav-link nav__link" to="/skills">
                    Skills
                  </NavLink>
                </li>
                <li className="nav-item nav__item">
                  <NavLink className="nav-link nav__link" to="/service">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item nav__item">
                  <NavLink className="nav-link nav__link" to="/testimonials">
                    Testimonials
                  </NavLink>
                </li>
                <li className="nav-item nav__item">
                  <NavLink className="nav-link nav__link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>

              <ButtonGroup
                variant="text"
                aria-label="text medium primary button group"
              >
                <Button>Sign UP</Button>
                <Button>Log In</Button>
              </ButtonGroup>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
