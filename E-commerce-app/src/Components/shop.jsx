import React from "react";
import "../App.css";

function Shop() {
  return (
    <>
      {/* Hero Section */}
      <section id="page-header">
        <h2>#stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>

      {/* Products Section */}
      <section id="product1" className="section-p1">
        <div className="pro-contianer">
          {/* Example Product - Copy this block for more */}
          <div
            className="pro"
            onClick={() => (window.location.href = "/sproduct")}
          >
            <img src="/products/f1.jpg" alt="" />
            <div className="des">
              <span>adiddas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <h4>₹599</h4>
            </div>
            <a href="#" className="cart">
              <i className="fa-solid fa-cart-shopping"></i>
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

          {/* Repeat other product blocks here similarly, fixing JSX tags */}
        </div>
      </section>

      {/* Pagination */}
      <section id="pagintion" className="section-p1">
        <a href="">1</a>
        <a href="">2</a>
        <a href="">
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </section>
    </>
  );
}

export default Shop;
