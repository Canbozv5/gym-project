import React from "react";

const statsData = [
  { id: 1, value: "325", label: "Course" },
  { id: 2, value: "405", label: "Work Out" },
  { id: 3, value: "305", label: "Working Hour" },
  { id: 4, value: "705", label: "Happy Client" },
];

function Stats() {
  const StatCard = ({ value, label }) => {
    return (
      <div className="col-12 col-md-3 mb-4">
        <div className="p-4 bg-white h-100 mb-4">
          <span className="h4 text-center font-monospace"> {value} </span>
          <br />
          <span className="h3">{label}</span>
        </div>
      </div>
    );
  };

  const StatsGrid = () => {
    return (
      <div className="row text-center d-flex">
        {statsData.map((stat) => (
          <StatCard key={stat.id} value={stat.value} label={stat.label} />
        ))}
      </div>
    );
  };

  const StatsSection = () => {
    return (
      <div id="stats" className="container pt-5">
        <StatsGrid />
      </div>
    );
  };
  return (
    <section id="example">
      <StatsSection />
    </section>
  );
}

export default Stats;
