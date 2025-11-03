import React from "react";

const productsData = [
  {
    id: 1,
    name: "Kettlebell / 5kg",
    priceDel: "89,99$",
    price: "59,99$",
    image: "Resimler/purchase1.jpg",
  },
  {
    id: 2,
    name: "Treadmill",
    priceDel: "899,99$",
    price: "599,99$",
    image: "Resimler/purchase2.jpg",
  },
  {
    id: 3,
    name: "Adjustable Dumbell",
    priceDel: "89,99$",
    price: "59,99$",
    image: "Resimler/purchase3.jpg",
  },
  {
    id: 4,
    name: "Kettlebell / 3kg",
    priceDel: "89,99$",
    price: "59,99$",
    image: "Resimler/purchase4.jpg",
  },
];

function Purchase() {
  const PricingHeader = () => (
    <div id="classes-div" className="col-12 text-center">
      <h2 className="title-h2">PURCHASE FROM US</h2>
      <div className="title-underline"></div>
      <p className="title-p mb-5">
        Lorem Ipsum is not simply random text. It has roots in a piece of
        classical at Hampden-Sydney Collage.
      </p>
    </div>
  );

  const PricingCard = ({ product }) => (
    <div className="col-lg-3 mb-4">
      <div className="purch-card card border-0">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h6 className="card-title text-body font-weight-bold text-center mt-n3">
            {product.name}
          </h6>
          <p className="card-text text-body text-center">
            <del>{product.priceDel}</del> / {product.price}
          </p>

          <p className="card-text card-i text-body ml-3">
            <i className="fa-solid fa-cart-shopping mr-5"></i>
            Add To Cart
          </p>
        </div>
      </div>
    </div>
  );

  const PricingGrid = () => (
    <>
      {productsData.map((product) => (
        <PricingCard key={product.id} product={product} />
      ))}
    </>
  );

  return (
    <section id="purchase-sec">
      <div className="bmi-container pb-2">
        <div className="row justify-content-between">
          <PricingHeader />
          <PricingGrid />
        </div>
      </div>
    </section>
  );
}

export default Purchase;
