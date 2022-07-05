import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <div>
          <h3>ABOUT THE SHOP</h3>
          <p>
            After being frustrated with being unable to find fitted high quality
            essentials at a fair price, we decided to take matters in to our own
            hands.
          </p>
        </div>
        <div>
          <h3>HELP</h3>
          <ul>
            <li>FAQ</li>
            <li>Returns</li>
            <li>Care Instructions</li>
            <li>Email Support</li>
            <li>Changing ot Modifying Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>International Shipping Policy</li>
          </ul>
        </div>
        <div>
          <h3>NEWSLETTER</h3>
          <p>
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <input type="email" placeholder="Enter your email address" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <p>Copyright &#169; Ozkar Alvarez</p>
    </footer>
  );
}
