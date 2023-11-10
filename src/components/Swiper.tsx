// import React from "react";

const Swiper = () => {
  return (
    <div>
      <div className="swiper">
        {/* <!-- Additional required wrapper --> */}
        <div className="swiper-wrapper">
          {/* <!-- Slides --> */}
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          ...
        </div>
        {/* <!-- If we need pagination --> */}
        <div className="swiper-pagination"></div>

        {/* <!-- If we need navigation buttons --> */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        {/* <!-- If we need scrollbar --> */}
        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  );
};

export default Swiper;
