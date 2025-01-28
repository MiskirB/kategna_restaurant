import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Bole A.A Ethiopia</p>
        <p className="p__opensans">+251 912-344-1230</p>
        <p className="p__opensans">+251 912-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.kategna} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>

      <div className="app__footer-links_map">
        <h1 className="app__footer-headtext">Find Us</h1>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.422865094405!2d38.820221979536406!3d9.025133767923085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b64fd5b8dc5%3A0x9995133cdfe50609!2sKategna%20Restaurant!5e0!3m2!1sen!2set!4v1738083706249!5m2!1sen!2set"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        {new Date().getFullYear()} Kategna. ©All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
