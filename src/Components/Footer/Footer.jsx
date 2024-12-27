import React from 'react'
import "./Footer.css"
import logo1 from "../../Assets/logo-1.png"
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer1">
        <div className="part-1">
            <div className="img-foot">
              <img className='foot' src={logo1} alt="" />
            </div>
            <div className="ad">
                <p><h3>Phone:</h3> +4 509 120 6705
                   <h3>Address:</h3> 1418 Riverwood Drive, Suite 3245 <br />
                   Cottonwood, CA 96052, United States</p>
            </div>
            <div className="pay">
                <p>We Accepts:</p>
                <img src="https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/payment-1.png" alt="" />
            </div>
        </div>
        <div className="part-2">
            <div className="ql">
                <h3>Quick Links</h3>
            </div>
            <div className="ql-con">
              <a href="">Delivery Information</a> 
              <a href="">Sale Terms & Conditions</a> 
              <a href="">Returns & Refunds</a> 
              <a href="">Privacy Notice</a> 
              <a href="">Shopping FAQs</a> 
            </div>
        </div> 
        <div className="part-3">
            <div className="pc">
                <h3>Popular Categories</h3>
            </div>
            <div className="pc-con">
                <a href="">Accessories (47)</a> 
                <a href="">Mobile (26)</a> 
                <a href="">Headphone (40)</a> 
                <a href="">Laptop (19)</a> 
                <a href="">Television (32)</a> 
                <a href="">Smartwatch (24)</a> 
                <a href="">Speaker (33)</a> 
                <a href="">Uncategorized (15)</a> 
            </div>
        </div>
        <div className="part-4">
            <div className="sub">
              <h3>Subscription Offer</h3>
            </div>
            <div className="off">
              <input className='email' type="email"  placeholder='Enter Email'/>
              <button className='s-btn'>SEND</button>
            </div>
            <div className="off-con">
              Sign up to receive updates, promotions, and sneak peaks of upcoming products.
            </div>
            <div className="media">
              <p>Follow us on:</p>
            </div>
            <div className="me-ico">
              <div className="ico-me"><FaFacebook /></div>
              <div className="ico-me"><IoLogoTwitter /></div>
              <div className="ico-me"><FaLinkedin /></div>
              <div className="ico-me"><FaYoutube /></div>
              <div className="ico-me"><FaPinterestP /></div>
            </div>
        </div>
      </div>
      </div>

      <hr />
      <div className="last">
        <p>© 2023, Retbo Theme. Made with passion by Theme_Pure.</p>
        <p>All Right Reserved By Theme_pure.</p>
      </div>
    </>
  )
}

export default Footer