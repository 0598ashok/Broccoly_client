import React from "react";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../css/About.css";

const About = () => {
  return (
    <div>
        <div className="about_banner">
            <div className="container">
                <h1>About Us</h1>
            </div>
        </div>
      <section className="container-fluid">
        <div className="row home_sec3" style={{ backgroundColor: "#ffffff" }}>
          <div className="col-md-12 col-lg-6 home_sec3_content">
            <h4 style={{ color: "#603", fontWeight: "500" }} className="pb-4">
              Wouldn’t it be simpler to lose weight if you had someone to
              prepare your food, control your portion size and count your
              calories? Just like a celebrity’s personal chef.
            </h4>
            <p style={{ color: "#603" }}>
              <RiDoubleQuotesL />I started Diet Chef because I wanted everyone
              to be able to have that same advantage. No more labour intensive
              cooking, no more worrying about calories, no more counting points
              or struggling with portion size
              <RiDoubleQuotesR />
            </p>

            <p style={{ color: "#000" }}>Kevin Dorren - Founder & Head Chef</p>
            <button>start my journey</button>
          </div>
          <div className="col-md-12 col-lg-6 home_banner2"></div>
        </div>
      </section>

      <section className="jumbotron mb-0">
        <div className="container">
          <div className="text-center pb-5">
            <h1 style={{ color: "#603" }}>Our journey</h1>
          </div>
          <p>
            I am originally a chef by training and incredibly passionate about
            food so it’s important to me that everything you eat on Diet Chef is
            delicious and healthy with no nasty ingredients.
          </p>
          <p>
            I work to ensure you have a great range of food to choose from with
            lots of new dishes and innovations.
          </p>
          <p>
            Diet Chef has grown a lot in the last 10 years and we are now the
            UK's largest delivered diet company with over 250,000 customers,
            it’s been a brilliant journey.
          </p>
        </div>
      </section>
      

      <div style={{backgroundColor:"#fff"}} className="about_us">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1>Get in touch</h1>
              <p>
                I am so proud of everyone who has followed the Diet Chef plan
                and I love hearing your weight loss stories – it’s amazing the
                difference losing weight can make to someone’s life!
              </p>
              <p>
                If you have any questions or you want to tell me your story
                email me <Link to="">info@broccoly.com</Link>
              </p>
              <p>Good Luck!</p>
              <div>
                <img
                  src="https://www.dietchef.co.uk/static/img/kevin-signature.jpg"
                  style={{ width: "100px" }}
                />
              </div>
              <h5>Kevin Dorren</h5>
              <p>Founder & Head Chef</p>
            </div>
            <div className="col-md-5 text-center" style={{backgroundColor:"#f6f5f4",borderRadius:"5px"}} >
              <img
                src="https://www.dietchef.co.uk/static/img/testimonials/testimonial-box-background.png"
                className="img-fluid"
              />
              <Link to="">
                <div className="text-center">
                  <button className="about_review_btn">View reviews</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default About;
