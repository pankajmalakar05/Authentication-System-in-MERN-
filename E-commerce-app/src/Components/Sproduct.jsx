import React from 'react';
import '../App.css'

function Sproduct() {
  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src="images/products/f1.jpg" width="100%" id="mainImg" alt="Main Product" />
          <div className="small-img-group">
            <div className="small-img-col">
              <img src="/products/f1.jpg" width="100%" className="small-img" alt="Thumbnail 1" />
            </div>
            <div className="small-img-col">
              <img src="/products/f2.jpg" width="100%" className="small-img" alt="Thumbnail 2" />
            </div>
            <div className="small-img-col">
              <img src="/products/f3.jpg" width="100%" className="small-img" alt="Thumbnail 3" />
            </div>
            <div className="small-img-col">
              <img src="/products/f4.jpg" width="100%" className="small-img" alt="Thumbnail 4" />
            </div>
          </div>
        </div>
        <div className="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <h4>Men's Fashion T-Shirt</h4>
          <h2>₹599.00</h2>
          <select>
            <option>Select Size</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
            <option>XXXL</option>
          </select>
          <input type="number" defaultValue="1" />
          <button className="normal">Add to Cart</button>
          <h4>Product Details</h4>
          <span>
            The Gildan Ultra Cotton T-shirt is made from a substantial 9.0 oz per sq yd fabric,
            constructed from 100% cotton. This classic fit pre-shrunk jersey knit provides unmatched
            comfort with each wear. Featuring a taped neck and shoulders and a seamless double-needle
            collar. Available in a range of colors, it offers an all-in ultimate head-turning package.
          </span>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection - New Modern Design</p>
        <div className="pro-container">
          {[
            { img: 'n1.jpg', price: 599 },
            { img: 'n2.jpg', price: 499 },
            { img: 'n3.jpg', price: 699 },
            { img: 'n4.jpg', price: 550 },
          ].map((item, index) => (
            <div className="pro" key={index}>
              <img src={`/products/${item.img}`} alt={`Product ${index + 1}`} />
              <div className="des">
                <span>Adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <h4>₹{item.price}</h4>
              </div>
              <a href="#" className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newtext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and <span>special offers</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </>
  );
}

export default Sproduct;
