import React from "react";
import "../styles/FooterBottom.css";
import { FooterBottom_1, FooterBottom_2 } from "./SvgIcons";
import { Link } from "react-router-dom";
import { BsInstagram, BsPinterest, BsYoutube } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
export default function FooterBottom() {
  return (
    <div className="footer_bottom_parent">
      <div className="footer_bottom_main">
        <div className="footer_main_left">
          <div className="footer_left_links">
            <div>
              <ul className="footer_links_heading">
                <li>
                  <h5>Help</h5>
                </li>
                <li>Customer Service</li>
                <li>Track Order</li>
                <li>Return & Exchanges</li>
                <li>Shipping</li>
                <li>International Orders</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <ul className="footer_links_heading">
                <li>
                  <h5>Quick Links</h5>
                </li>
                <li>Find a Store</li>
                <li>Size Charts</li>
                <li>Offers & Promotions</li>
              </ul>
            </div>
            <div>
              <ul className="footer_links_heading">
                <li>
                  <h5>About J.CREW</h5>
                </li>
                <li>Our Story</li>
                <li>Careers</li>
                <li>Social Responsibility</li>

                <li>California Tranparency </li>
                <li>Investor Relations</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>California Do Not Sell </li>
                <li>Diversity, Equity & Inlusion </li>
                <li className="california">California Tranparency</li>
                <li>Investor Relations</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>California Do Not Sell My </li>
                <li>Diversity, Equity & Inlusion</li>

              </ul>
            </div>
          </div>
          <div className="footer_socialIcons">
            <a href="http://instagram.com/jcrew" >
              <i className=" fa-instagram">
                <BsInstagram />
              </i>
            </a>
            <a href="https://www.facebook.com/jcrew" target="_blank">
              <i className="fa-brands fa-facebook-f">
                <BsFacebook />
              </i>
            </a>
            <a href="https://twitter.com/jcrew" target="_blank">
              <i className="fa-brands fa-twitter">
                <BsTwitter />
              </i>
            </a>
            <a href="https://www.linkedin.com/company/j-crew" target="_blank">
              <i className="fa-brands fa-linkedin">
                <BsLinkedin />
              </i>
            </a>
            <a href="http://pinterest.com/jcrew/" target="_blank">
              <i className="fa-brands fa-pinterest">
                <BsPinterest />
              </i>
            </a>
            <a href="http://www.youtube.com/user/jcrewinsider" target="_blank">
              <i className="fa-brands fa-youtube">
                <BsYoutube />
              </i>
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 25,
            }}
          >
            <p
              style={{
                textDecoration: "underline",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              India
            </p>
            {/* <img className="footer_flag" src={xyz} alt="" /> */}
          </div>

          <div className="footerSvgIcons" style={{ display: "flex", gap: 20 }}>
            <FooterBottom_1 />
            <FooterBottom_2 />

            <div className="footerSvgIcon" >
              {/* <FooterBottom_1/>
            
            <FooterBottom_2 /> */}
              <p className="madewell">Madewell C.Aura</p>


            </div>
            <div className="footer_copyRight" style={{ marginLeft: "-770px" }}>© 2022 J.Crew</div>
          </div>

          <div className="footer_main_right">
            <h3 className="footer_main_right_head" style={{ marginLeft: "-270px" }}>Like Being First?</h3>
            <div className="footer_main_right_des" style={{ marginLeft: "-70px" }}>
              Get can't miss style news, before everybody else.
            </div>
            <div>
              <input
                className="footer_sign_upInput"
                type="text"
                placeholder="Enter your Email"
              />
              <button className="footer_sign_upBtn">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
