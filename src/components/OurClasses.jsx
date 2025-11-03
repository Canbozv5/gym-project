import React, { useState } from "react";

const classData = [
  {
    id: "yoga",
    title: "Yoga",
    why: "Why are your Yoga?",
    whyTime: "When comes Yoga Your Time.",
    imgSrc: "Resimler/yoga.jpg",
    whyText:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laborioasm sapiente nulla totam neque eum veniam.",
    times: [
      "Saturday-Sunday: 8:00am - 10:00am",
      "Monday-Tuesday: 10:00am - 12:00pm",
      "Wednesday-Friday: 3:00pm - 6:00pm",
    ],
  },
  {
    id: "group",
    title: "Group",
    why: "Why are your Group?",
    whyTime: "When comes Group Your Time.",
    imgSrc: "Resimler/group.webp",
    whyText:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laborioasm sapiente nulla totam neque eum veniam.",
    times: [
      "Saturday-Sunday: 10:00am - 12:00am",
      "Monday-Tuesday: 12:00am - 2:00pm",
      "Wednesday-Friday: 5:00pm - 8:00pm",
    ],
  },
  {
    id: "solo",
    title: "Solo",
    why: "Why are your Solo?",
    whyTime: "When comes Solo Your Time.",
    imgSrc: "Resimler/solo.jpg",
    whyText:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laborioasm sapiente nulla totam neque eum veniam.",
    times: [
      "Saturday-Sunday: 9:00am - 11:00am",
      "Monday-Tuesday: 11:00am - 1:00pm",
      "Wednesday-Friday: 4:00pm - 7:00pm",
    ],
  },
  {
    id: "stretching",
    title: "Stretching",
    why: "Why are your Stretching?",
    whyTime: "When comes Stretching Time.",
    imgSrc: "Resimler/stret.webp",
    whyText:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laborioasm sapiente nulla totam neque eum veniam.",
    times: [
      "Saturday-Sunday: 7:00am - 9:00am",
      "Monday-Tuesday: 9:00am - 11:00am",
      "Wednesday-Friday: 2:00pm - 5:00pm",
    ],
  },
];

function OurClasses() {
  const [activeTab, setActiveTab] = useState("yoga");
  const activeClass = classData.find((c) => c.id === activeTab);

  const SectionHeader = () => (
    <div id="classes-div" className="col-12 text-center">
      <h2 className="title-h2">OUR CLASSSES</h2>
      <div className="title-underline"></div>
      <p className="title-p mb-5">
        Lorem Ipsum is not simply random text. It has roots in a piece of
        classical at Hampden-Sydney Collage.
      </p>
    </div>
  );

  const ClassTabs = () => (
    <div className="row justify-content-between">
      {classData.map((c) => (
        <div key={c.id} className="col-lg-2 mx-4 col-sm-4 mb-3">
          <button
            className={`buton w-100 ${
              activeTab === c.id ? "btn-active-style" : "text-light"
            }`}
            onClick={() => setActiveTab(c.id)}
            data-target={c.id}
          >
            {c.title}
          </button>
        </div>
      ))}
    </div>
  );

  const ContentCard = ({ data }) => (
    <div id={`${data.id}-content`} className="class-section container">
      <div className="row">
        <div className="col-lg-6 mt-5 col-sm-12">
          <h3 className="our-h3">{data.why}</h3>
          <p className="our-p font-weight-bold text-justify">{data.whyText}</p>
          <h3 className="our-h3">{data.whyTime}</h3>
          {data.times.map((time, index) => (
            <React.Fragment key={index}>
              <p className="our-p font-weight-bold">{time}</p>
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="col-lg-6 mt-5 col-sm-12">
          <img
            className="our-img mt-5 ml-5"
            src={data.imgSrc}
            alt={data.title}
          />
        </div>
      </div>
    </div>
  );

  return (
    <section id="classes-our">
      <div className="container">
        <SectionHeader />
        <ClassTabs />
      </div>
      {activeClass && <ContentCard data={activeClass} />}
    </section>
  );
}

export default OurClasses;
