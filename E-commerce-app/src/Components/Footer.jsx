import React from "react";
import "../App.css";

function Footer() {
  return (
    <>
      {/* <!---------------------- footer------------- --> */}

      <footer class="section-p1">
        <div class="col">
          <img class="logo" src="/logo (1).png" alt="" />
          <h4>Content</h4>
          <p>
            <strong>Address: </strong> malhar mega mall indore
          </p>
          <p>
            <strong>Phone No.: </strong> +91 7089828175
          </p>
          <p>
            <strong>Hours: </strong> 10:00 - 18:00, mon - sat
          </p>
          <div class="follow">
            <h4>Follow us</h4>
            <div class="icon">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-pinterest"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div class="col">
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery Informtion</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Content Us</a>
        </div>

        <div class="col">
          <h4> My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        <div class="col install">
          <h4>Install App</h4>
          <p> Form App Store or Google play</p>
          <div class="row">
            <img src="./images/pay/app.jpg" alt="" />
            <img src="./images/pay/play.jpg" alt="" />
          </div>
          <p>Secured paymant Gateways</p>
          <img src="./images/pay/pay.png" alt="" />
        </div>
        <div class="copyright">
          <p>@ 2025, pankaj malakar - HTML CSS Ecommerce Template</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
