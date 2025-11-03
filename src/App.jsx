import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import OurClasses from "./components/OurClasses";
import BMICalculator from "./components/BMICalculator";
import Trainers from "./components/Trainers";
import Purchase from "./components/Purchase";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <Stats />
        <OurClasses />
        <BMICalculator />
        <Trainers />
        <Purchase />
        <Review />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
