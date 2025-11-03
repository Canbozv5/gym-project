import React from "react";

function Footer() {
  const informationLinks = ["About Us", "Classes", "Blog", "Contact"];
  const helpfulLinks = [
    "Services",
    "Supports",
    "Terms & Condition",
    "Privacy Policy",
  ];

  const FooterLinkBlock = ({ title, links }) => (
    <div className="col-4 col-sm-6">
      <span className="foot-h1 h2 ml-5"> {title} </span>
      <ul className="list-s ml-2 mt-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer id="footer-web">
      <div className="bmi-container">
        <img src="Resimler/logo.png" alt="Logo" />

        <div>
          <p className="foot-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quod, quae, voluptate, voluptas quia quibusdam
            voluptatibus quos doloribus quidem fugiat. Quisquam voluptatum, quod
            quae, voluptate, voluptas quia quibusdam voluptatibus quos doloribus
            quidem fugiat.
          </p>
        </div>

        <div className="row justify-content-around">
          <FooterLinkBlock title="Information" links={informationLinks} />
          <FooterLinkBlock title="Helpful Links" links={helpfulLinks} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
