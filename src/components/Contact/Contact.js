import React from "react";
import "./Contact.css";
const Contact = () => {
  document.title = "Contact Us"
  return (
    <div className="contact-section py-4">
      <div className="container">
        <h6 className="text-center font-bold mb-0">Contact</h6>
        <h5 className="text-center font-bold">
          Let us handle your project, professionally.
        </h5>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <form
              action="https://formspree.io/fr7199732@gmail.com"
              method="post"
              className="form-container py-3"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  className="form-control"
                  placeholder="Enter Your Username"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Enter Your Phone Number"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="Message"
                  id="message"
                  className="form-control"
                  placeholder="Enter Your Message"
                  autoComplete="off"
                ></textarea>
              </div>
              <button className="bg-pink-700 px-6 text-white py-2 rounded-sm mt-3 d-block mx-auto">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
