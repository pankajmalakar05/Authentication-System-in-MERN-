import React from "react";

function About() {
  return (
    <>
      {/*-------------Hero Section-----------*/}
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Lorem ipsum dolor sit amet,consectetur</p>
      </section>

      {/* -------------------- About Section -------------------- */}
      <section id="about-head" className="section-pi">
        <img src="/about/a6.jpg" alt="About Us" />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quod
            exercitationem consectetur quos beatae nemo quibusdam rem suscipit
            expedita distinctio minima, facilis officiis, labore adipisci
            voluptatem maiores quia, dignissimos culpa. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cum laboriosam error, commodi,
            harum sequi nemo fugiat quia laborum eligendi voluptatem eius vitae
            reprehenderit atque debitis velit rerum sed nostrum dicta.
          </p>

          <abbr title="">
            Lorem ipsum dolor, sit amet consectetur adipisicing Nam at eaque
            fugit maxime quod assumenda, sed quaerat temporibus praesentium,
            voluptate tempore?
          </abbr>
          <br />
          <br />
          <marquee behavior="#ccc" loop="-1" scrollAmount="5" width="100%">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam at
            eaque fugit maxime quod assumenda, sed quaerat temporibus
            praesentium?
          </marquee>
        </div>
      </section>
      {/* -------------------- App Download Section -------------------- */}
      <section id="about-app" className="section-p1">
        <h1>Download Our <a href="#">App</a></h1>
        <div className="video">
          <video autoPlay muted loop src="/about/1 (1).mp4"></video>
        </div>
      </section>

      {/* -------------------- Features Section -------------------- */}
      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="/features/f1.png" alt="Free Shipping" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src="/features/f2.png" alt="Online Order" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src="/features/f3.png" alt="Save Money" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src="/features/f4.png" alt="Promotions" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src="/features/f5.png" alt="Happy Sell" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src="/features/f6.png" alt="24/7 Support" />
          <h6>24/7 Support</h6>
        </div>
      </section>
    </>
  );
}


export default About;
