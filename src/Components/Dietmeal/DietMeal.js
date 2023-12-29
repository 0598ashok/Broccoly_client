import React from "react";
import construct from "../../images/construct.png";

const DietMeal = () => {
    const headingStyle = {
        color: '#603',
        fontSize: '45px',
        fontFamily: 'cursive',
      };
  return (
    <div>
      <div className="container text-center mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6 m-auto">
          <div>
            <img src={construct} className="img-fluid" />
          </div>
        </div>
        <div className="col-md-3"></div>
        <h1 style={headingStyle}>Coming soon...</h1>
      </div>
    </div>
  );
};

export default DietMeal;
