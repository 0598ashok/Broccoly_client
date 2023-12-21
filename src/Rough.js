import React, { useEffect, useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Rough = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    autoplayTimeout: 4000,
    smartSpeed: 3000,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  return (
    <div className="container mt-5">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item text-center ">
          <div className="card">
            <div className="m-auto">
                <img src="https://img.freepik.com/free-photo/happy-young-man_1098-20869.jpg?w=996&t=st=1702705218~exp=1702705818~hmac=718787c87db0308919c42b67ef2d5b275b36c65a4cb67ab58586559c5c2b7f09" style={{width:"200px"}}/>
            </div>
            <h1>Hello</h1>
            <h1>Hello</h1>
          </div>
        </div>
        <div className="item text-center testimonial_item">
          <h1>Ashok</h1>
        </div>
        <div className="item text-center testimonial_item">
          <h1>Kumar</h1>
        </div>
        <div className="item text-center testimonial_item">
          <h1>Ramisetty</h1>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Rough;
