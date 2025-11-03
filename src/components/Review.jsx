import React from "react";

const reviewsData = [
  {
    id: 1,
    image: "Resimler/client1.jpg",
    name: "Diet Expert",
    title: "CFO",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequi quia, libero voluptatibus ducimus earum quidem minus eveniet, ex esse rem sed numquam. Error magnam in vero molestiae tempora nostrum.",
    className: "client1",
  },
  {
    id: 2,
    image: "Resimler/client2.jpg",
    name: "Cardio Trainer",
    title: "CEO",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequi quia, libero voluptatibus ducimus earum quidem minus eveniet, ex esse rem sed numquam. Error magnam in vero molestiae tempora nostrum.",
    className: "client2",
  },
];

function Review() {
  const ReviewHeader = () => (
    <div id="classes-div" className="col-12 text-center">
      <h2 className="title-h2">REVIEW CLIENT</h2>
      <div className="title-underline"></div>
      <p className="title-p mb-5">
        Lorem Ipsum is not simply random text. It has roots in a piece of
        classical at Hampden-Sydney Collage.
      </p>
    </div>
  );

  const ReviewCard = ({ reviewData }) => (
    <div className={`${reviewData.className} col-lg-6 col-sm-12`}>
      <div className="d-flex mb-3">
        <img
          className="rounded-circle mr-4"
          src={reviewData.image}
          alt={reviewData.title}
        />
        <div>
          <h5 className="font-weight-bold mb-3 pt-3">{reviewData.name}</h5>
          <span className="">{reviewData.title}</span>
        </div>
      </div>
      <div className="kurdele">{reviewData.review}</div>
    </div>
  );

  const ReviewGrid = () => (
    <>
      {reviewsData.map((review) => (
        <ReviewCard key={review.id} reviewData={review} />
      ))}
    </>
  );

  return (
    <section id="review-sec">
      <div className="container">
        <div className="row justify-content-between">
          <ReviewHeader />
          <ReviewGrid />
        </div>
      </div>
    </section>
  );
}

export default Review;
