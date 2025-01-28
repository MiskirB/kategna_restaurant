import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          We're in the business of Restaurant & Bar. A banquet in KATEGNA will
          let you experience the Ethiopian way of life, where dining is
          characterized by sharing food from a common plate, signifying the
          bonds of loyalty, family, love and friendship. The dishes are prepared
          with a variety of unique spices, which lend an unforgettable
          outstanding aspect to it's out of the ordinary cuisine.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          All of our foods are prepared with fresh spices blended daily and our
          sauces are prepared as ordered. The friendly staff and warm decor
          makes KATEGNA the perfect place to relax with family and friends.
          While we offer many traditional Ethiopian meat dishes, we are
          sensitive to the needs of our vegan customers. Traditionally we
          prepare many authentic Ethiopian dishes that are vegan, without the
          use of any animal products.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
