// import React from "react";
import Frame1 from "../assets/Frame (2).png";
import Frame2 from "../assets/Frame (3).png";
import Frame3 from "../assets/Frame (5).png";

const Swiper = () => {
  return (
    <div>
      <div className="swiper">
        {/* <!-- Additional required wrapper --> */}
        <div className="swiper-wrapper">
          {/* <!-- Slides --> */}
          <div className="swiper-slide">
            <img
              className="w-12 mx-auto mt-[-3rem] bg-white"
              src={Frame1}
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              className="w-12 mx-auto mt-[-3rem] bg-white"
              src={Frame2}
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              className="w-12 mx-auto mt-[-3rem] bg-white"
              src={Frame3}
              alt=""
            />
          </div>
          ...
        </div>
        {/* <!-- If we need pagination --> */}
        <div className="swiper-pagination"></div>

        {/* <!-- If we need navigation buttons --> */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        {/* <!-- If we need scrollbar --> */}
        {/* <div className="swiper-scrollbar"></div> */}
      </div>
    </div>
  );
};

export default Swiper;
