import React from "react";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

const HomeCarousel = () => {
  return (
    <div className="carousel-box">
      <Carousel
        showThumbs={false}
        showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/25/8ac985bc-263e-4195-93c9-7dc569ed0c331653501479931-Formal-Footwear_Desk.jpg" />
          <p
            className="legend"
            style={{ width: "10%", backgroundColor: "#fbc02d", color: "black" }}
          >
            Visit Ad{" "}
            <i className="fa fa-external-link link-icon" aria-hidden="true" />
          </p>
        </div>
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/25/8ac985bc-263e-4195-93c9-7dc569ed0c331653501479931-Formal-Footwear_Desk.jpg" />
          <p
            className="legend"
            style={{ width: "10%", backgroundColor: "#fbc02d", color: "black" }}
          >
            Visit Ad{" "}
            <i className="fa fa-external-link link-icon" aria-hidden="true" />
          </p>
        </div>
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/25/8ac985bc-263e-4195-93c9-7dc569ed0c331653501479931-Formal-Footwear_Desk.jpg" />
          <p
            className="legend"
            style={{ width: "10%", backgroundColor: "#fbc02d", color: "black" }}
          >
            Visit Ad{" "}
            <i className="fa fa-external-link link-icon" aria-hidden="true" />
          </p>
        </div>
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/25/8ac985bc-263e-4195-93c9-7dc569ed0c331653501479931-Formal-Footwear_Desk.jpg" />
          <p
            className="legend"
            style={{ width: "10%", backgroundColor: "#fbc02d", color: "black" }}
          >
            Visit Ad{" "}
            <i className="fa fa-external-link link-icon" aria-hidden="true" />
          </p>
        </div>
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/25/8ac985bc-263e-4195-93c9-7dc569ed0c331653501479931-Formal-Footwear_Desk.jpg" />
          <p
            className="legend"
            style={{ width: "10%", backgroundColor: "#fbc02d", color: "black" }}
          >
            Visit Ad{" "}
            <i className="fa fa-external-link link-icon" aria-hidden="true" />
          </p>
        </div>
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/25/8ac985bc-263e-4195-93c9-7dc569ed0c331653501479931-Formal-Footwear_Desk.jpg" />
          <p
            className="legend"
            style={{ width: "10%", backgroundColor: "#fbc02d", color: "black" }}
          >
            Visit Ad{" "}
            <i className="fa fa-external-link link-icon" aria-hidden="true" />
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export { HomeCarousel };
