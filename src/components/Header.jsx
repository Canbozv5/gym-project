import React, { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      id="main-navbar"
      className="sticky-top bmi-container navbar-dark font-weight-bold"
    >
      <nav
        className={`sticky-top container navbar navbar-expand-lg ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <img src="Resimler/logo.png" alt="Logo" />
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse d-lg-flex justify-content-end ${
            isNavOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="mx-2 nav-link" href="#hero">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="mx-2 nav-link" href="#classes-our">
                Classes
              </a>
            </li>
            <li className="nav-item active">
              <a className="mx-2 nav-link" href="#trainer-sec">
                Trainer{" "}
              </a>
            </li>
            <li className="nav-item active">
              <a className="mx-2 nav-link" href="#review-sec">
                Review
              </a>
            </li>
            <li className="nav-item active">
              <a className="mx-2 nav-link" href="#contact-sec">
                Contact
              </a>
            </li>
          </ul>
          <button
            id="nav-btn"
            className="mr-5 btn btn-warning btn-sm text-light rounded border-0 font-weight-bold"
            type="button"
          >
            JOIN US
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
