import React from "react";

const trainersData = [
  {
    id: 1,
    name: "Evelyn Fox",
    title: "Yoga Trainer",
    image: "Resimler/trainer1.jpg",
  },
  {
    id: 2,
    name: "John Jones",
    title: "Fitness Coach",
    image: "Resimler/trainer2.jpg",
  },
  {
    id: 3,
    name: "Jane Doe",
    title: "Cardio Trainer",
    image: "Resimler/trainer3.jpg",
  },
];

function Trainers() {
  const TrainerHeader = () => (
    <div id="classes-div" className="col-12 text-center">
      <h2 className="title-h2">OUR BEST TRAINERS</h2>
      <div className="title-underline"></div>
      <p className="title-p mb-5">
        Lorem Ipsum is not simply random text. It has roots in a piece of
        classical at Hampden-Sydney Collage.
      </p>
    </div>
  );

  const TrainerCard = ({ trainer }) => (
    <div className="t-card col-lg-3 col-sm-12">
      <img className="trainers" src={trainer.image} alt={trainer.name} />
      <div className="line-top"></div>
      <div className="line-right"></div>
      <div className="line-bottom"></div>
      <div className="line-left"></div>
      <div className="trainer-info">
        <span className="card-title h5">{trainer.name}</span>
        <span className="card-desc">{trainer.title}</span>
      </div>
    </div>
  );

  const TrainerGrid = () => (
    <div className="row justify-content-between g-4 ">
      {trainersData.map((trainer) => (
        <TrainerCard key={trainer.id} trainer={trainer} />
      ))}
    </div>
  );

  return (
    <section id="trainer-sec">
      <div className="bmi-container">
        <div className="row justify-content-between g-4 ">
          <TrainerHeader />
          <TrainerGrid />
        </div>
      </div>
    </section>
  );
}

export default Trainers;
