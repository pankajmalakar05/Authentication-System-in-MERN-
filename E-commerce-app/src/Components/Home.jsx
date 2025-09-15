import React from "react";
import "../App.css";

function Home() {
  return (
    <>
      {/* <!--------------------hero----------- --> */}
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupon & up to 70% off!</p>
        <button>Show Now</button>
      </section>

      {/* <!-- -----------------feature----------- --> */}

      <section id="feature" className="section-p1">
        <div class="fe-box">
          <img src="/features/f1.png" alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div class="fe-box">
          <img src="/features/f2.png" alt="" />
          <h6>Online Order</h6>
        </div>
        <div class="fe-box">
          <img src="/features/f3.png" alt="" />
          <h6>Save Money</h6>
        </div>
        <div class="fe-box">
          <img src="/features/f4.png" alt="" />
          <h6>promotions</h6>
        </div>
        <div class="fe-box">
          <img src="/features/f5.png" alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div class="fe-box">
          <img src="/features/f6.png" alt="" />
          <h6>F24/7 Support</h6>
        </div>
      </section>
      {/* <!-------------------- product---------- --> */}
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-contianer">
          <div className="pro">
            <img src="/products/f1.jpg" alt="" />
            <div className="des">
              <span>adiddas</span>
              <h5>Cortoon Astronaut T-Shirts</h5>
              <div className="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <h4>₹599</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/products/f2.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>{" "}
              </div>
              <h4>₹499</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/products/f3.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <h4>₹699</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/products/f4.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>{" "}
              </div>
              <h4>₹550</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/products/f5.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>{" "}
              </div>
              <h4>₹599</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/products/f6.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-solid fa-star-half-stroke"></i>{" "}
              </div>
              <h4>₹899</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/products/f7.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <h4>₹499</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/products/f8.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>{" "}
              </div>
              <h4>₹699</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
        </div>
      </section>

      {/* <!--------------------- banner -------------> */}

      <section id="banner" class="section-m1">
        <h4>Repair Services</h4>
        <h2>
          Up to <span>70% Off </span> -All t-shiers & Accessories
        </h2>
        <button class="normal">Explore More</button>
      </section>

      {/* <!--------------------- products2-------- --> */}

      <section id="product1" class="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Morden Design</p>
        <div class="pro-contianer">
          <div class="pro">
            <img src="/products/n1.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <h4>₹599</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/products/n2.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>{" "}
              </div>
              <h4>₹499</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/products/n3.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <h4>₹699</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/products/n4.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>{" "}
              </div>
              <h4>₹550</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/products/n5.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>{" "}
              </div>
              <h4>₹599</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/products/n6.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-solid fa-star-half-stroke"></i>{" "}
              </div>
              <h4>₹899</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/products/n7.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <h4>₹499</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
          <div class="pro">
            <img src="/products/n8.jpg" alt="" />
            <div class="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>{" "}
              </div>
              <h4>₹699</h4>
            </div>
            <a href="#" class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
        </div>
      </section>
      {/* <!------------------ small banner--------- --> */}

      <section id="sm-bannr" class="section-p1">
        <div className="banner-box">
          <h4>crazy beals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The beat classic dress is on sale at csre </span>
          <button className="white">Laarn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>spring/summer</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Collection</button>
        </div>
      </section>
      <section id="banner3">
        <div class="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>winter Collection -50% OFF</h3>
        </div>
        <div class="banner-box banner-box2">
          <h2>SEASONAL SALE</h2>
          <h3>winter Collection -50% OFF</h3>
        </div>
        <div class="banner-box banner-box3">
          <h2>SEASONAL SALE</h2>
          <h3>winter Collection -50% OFF</h3>
        </div>
      </section>
    </>
  );
}
export default Home;
