import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Randevu Talebi Gönderildi:", formData);
    alert("Randevu talebiniz alındı! Konsolu kontrol edebilirsiniz.");
    // Formu temizle
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const ContactHeader = () => (
    <div id="classes-div" className="col-12 text-center">
      <h2 className="title-h2">CONTACT US</h2>
      <div className="title-underline"></div>
      <p className="contact-p mb-5">
        Lorem Ipsum is not simply random text. It has roots in a piece of
        classical at Hampden-Sydney Collage.
      </p>
    </div>
  );

  const ContactFormArea = () => (
    <div className="col-lg-6 mt-4 col-sm-12">
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <span className="con-span h2">Mobile Number </span>
          <br />
          <span className="h5">+135 773 321 4442</span>
        </div>
        <div className="col-lg-6 col-sm-6">
          <span className="con-span h2">Email Address </span>
          <span className="h5">demo@demo.com </span>
        </div>
      </div>

      <div className="h2 mt-3">
        <span>Make An Appoinment</span>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mt-4"
          type="text"
          name="name"
          placeholder=" Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mt-5"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="textarea1 mt-5"
          name="message"
          placeholder="   Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="btn btn-warning btn-block mt-4 text-white font-weight-bold"
        >
          Send Message
        </button>
      </form>
    </div>
  );

  const ContactMap = () => (
    <div className="col-lg-6 mt-5 col-sm-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30089.43128892151!2d28.971550999999997!3d41.036030999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9f01037682f%3A0xe135402094c4d5d9!2zSGlzdG9yeXJlIEhvdGVsIC0gQmF5YXrEsXQsIEVtaW5cdTAwZTZuYywgRmF0aWgsIMSwc3RhbmJ1bA!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );

  return (
    <section id="contact-sec">
      <div className="bmi-container pb-2">
        <div className="row justify-content-between">
          <ContactHeader />
          <ContactFormArea />
          <ContactMap />
        </div>
      </div>
    </section>
  );
}

export default Contact;
