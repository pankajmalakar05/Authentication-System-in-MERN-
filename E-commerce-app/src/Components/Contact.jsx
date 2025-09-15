import React from 'react';
import '../App.css'

function Contact() {
  return (
    <>
      {/* -------------------- Hero Section -------------------- */}
      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      {/* -------------------- Contact Details -------------------- */}
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <ul>
            <li>
              <i className="fa-solid fa-map-location-dot"></i>
              <p>Malhar Mega Mall, Indore</p>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <p>mrpankajmalakar@gmail.com</p>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <p>+91 7089828175</p>
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              <p>Monday to Saturday: 9.00am to 4.00pm</p>
            </li>
          </ul>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.94958660434!2d75.69903442009262!3d22.724204998424973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1740744519357!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </section>

      {/* -------------------- Contact Form -------------------- */}
      <section id="form-details" className="section-p1">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="normal">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src="/pepople/1.png" alt="John Doe" />
            <p>
              <span>John Doe</span> – Senior Marketing Manager <br />
              Phone: +91 000123000123 <br />
              Email: john.doe@gmail.com
            </p>
          </div>
          <div>
            <img src="/pepople/2.png" alt="William Smith" />
            <p>
              <span>William Smith</span> – Senior Marketing Manager <br />
              Phone: +91 000123000123 <br />
              Email: william.smith@gmail.com
            </p>
          </div>
          <div>
            <img src="/pepople/3.png" alt="Emma Stone" />
            <p>
              <span>Emma Stone</span> – Senior Marketing Manager <br />
              Phone: +91 000123000123 <br />
              Email: emma.stone@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* -------------------- Newsletter -------------------- */}
      <section id="newletter" className="section-p1 section-m1">
        <div className="newtext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and <span>special offers</span>
          </p>
        </div>
        <div className="form">
          <input type="email" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </>
  );
}

export default Contact;
