import React from "react";

function Hero() {
  return (
    <section id="hero" className="Classes">
      <div className="hero-content bmi-container">
        <div className="row">
          <div className="col-2 col-sm-12">
            <span className="spn-power px-3 py-1 rounded font-weight-bold text-light">
              POWERFULL
            </span>
            <h1 id="hero-h1" className="text-light">
              Group Practice With Trainer
            </h1>
          </div>
          <div className="col-10 col-sm-12">
            <p className="hero-p font-weight-bold text-light px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus odit aut iste. Velit porro rerum, unde modi ipsam
              exercitationem laudantium illum. Id, laborum? Totam, dicta nisi.
              Voluptates, vero id. Perferendis.
            </p>
            <div className="container col-sm-12 ml-1">
              <button
                id="btn-sign"
                className="btn text-light px-3"
                type="button"
              >
                Sign Up
              </button>
              <button
                id="btn-sign2"
                className="btn btn-outline-light px-4"
                type="button"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
