import React from 'react';
import '../App.css'

function Cart() {
  return (
    <>
      {/* -------------------- Hero Section -------------------- */}
      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      {/* -------------------- Cart Table -------------------- */}
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <th>Remove</th>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#"><i className="fa-solid fa-circle-xmark"></i></a>
              </td>
              <td><img src="/products/f1.jpg" alt="Product 1" /></td>
              <td>Cartoon Astronaut T-Shirt</td>
              <td>₹599</td>
              <td><input type="number" defaultValue="1" /></td>
              <td>₹599</td>
            </tr>
            <tr>
              <td>
                <a href="#"><i className="fa-solid fa-circle-xmark"></i></a>
              </td>
              <td><img src="/products/f2.jpg" alt="Product 2" /></td>
              <td>Cartoon Astronaut T-Shirt</td>
              <td>₹699</td>
              <td><input type="number" defaultValue="1" /></td>
              <td>₹699</td>
            </tr>
            <tr>
              <td>
                <a href="#"><i className="fa-solid fa-circle-xmark"></i></a>
              </td>
              <td><img src="/products/f3.jpg" alt="Product 3" /></td>
              <td>Cartoon Astronaut T-Shirt</td>
              <td>₹799</td>
              <td><input type="number" defaultValue="1" /></td>
              <td>₹799</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* -------------------- Coupon & Totals -------------------- */}
      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>
        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td>₹2097</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>₹2097</strong></td>
              </tr>
            </tbody>
          </table>
          <button className="normal">Proceed to Checkout</button>
        </div>
      </section>
    </>
  );
}

export default Cart;
