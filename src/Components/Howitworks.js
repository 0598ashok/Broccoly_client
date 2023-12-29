import React from "react";
import "../css/Howitworks.css";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Link } from "react-router-dom";
import { LiaDownloadSolid } from "react-icons/lia";
//images

import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";
import work1 from "../images/work-1.png";
import work2 from "../images/work-2.png";
import work3 from "../images/work-3.png";

const Howitworks = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className="container how_it_works">
        <h1 className="head">What is Broccoly</h1>

        <div class="grid_container">
          <div class="grid_item">
            <h1>It’s easy</h1>
            <div className="text-center">
              <img src={avatar1} className="img-fluid" />
            </div>
            <p>
              <RiDoubleQuotesL />
              Broccoly is simple to follow, just heat in the microwave and
              you’re ready to eat. There’s so much variety that I’m never bored
              <RiDoubleQuotesR />
            </p>

            <ul>
              <div className="d-flex">
                <i class="fa-solid fa-check"></i>
                <li>
                  {" "}
                  No counting calories, no measuring ingredients, no prepping
                  meals
                </li>
              </div>
              <div className="d-flex">
                <i class="fa-solid fa-check"></i>
                <li>
                  {" "}
                  All calorie counting and portion control is done for you
                </li>
              </div>
              <div className="d-flex">
                <i class="fa-solid fa-check"></i>
                <li> Just heat and eat</li>
              </div>
            </ul>

            <div></div>
          </div>
          <div class="grid_item">
            <h1>It’s tasty</h1>
            <div className="text-center">
              <img src={avatar2} className="img-fluid" />
            </div>
            <p>
              <RiDoubleQuotesL /> I never once felt like I was on a diet or
              being deprived as the food is so tasty and surprisingly filling
              <RiDoubleQuotesR />
            </p>
            <ul>
              <div className="d-flex">
                <i class="fa-solid fa-check"></i>
                <li>
                  {" "}
                  Delicious chef-prepared weight loss meals, delivered each
                  month
                </li>
              </div>
              <div className="d-flex">
                <i class="fa-solid fa-check"></i>
                <li>
                  {" "}
                  Enjoy the foods you love; meatballs, curry and pasta are all
                  onthe menu
                </li>
              </div>
              <div className="d-flex">
                <i class="fa-solid fa-check"></i>
                <li> Just add fresh fruit and vegetables</li>
              </div>
            </ul>
          </div>
          <div class="grid_item">
            <h1>It’s effective</h1>
            <div className="text-center">
              <img src={avatar3} className="img-fluid" />
            </div>
            <p>
              <RiDoubleQuotesL /> I lost 7lbs in the first two weeks. My husband
              and I have lost over 98lbs between us *
              <RiDoubleQuotesR />
            </p>
            <ul>
              <div className="d-flex">
                <i class="fa-solid fa-check"></i>
                <li> Avoid cravings with satisfying meals</li>
              </div>
              <div className="d-flex">
                <i class="fa-solid fa-check"></i>
                <li> Achieve healthy and sustainable weight loss</li>
              </div>
              <div className="d-flex">
                <i class="fa-solid fa-check"></i>
                <li> Rated 4 stars from over 9500 reviews</li>
              </div>
            </ul>
          </div>
        </div>

        <div className="start_my_journey">
          <Link to="">
            <button>Start my journey</button>
          </Link>
        </div>

        <section className="home_broccoly_works">
          <div className="container home_works mt-5">
            <div className="text-center mb-5">
              <h1 style={{ fontWeight: "100" }}>How Broccoly works</h1>
            </div>
            <div className="row">
              <div className="col-md-4 text-left">
                <div className="text-center">
                  {" "}
                  <img src={work1} className="img-fluid" />
                </div>

                <div className="mt-4">
                  <h5>1. Choose your plan</h5>
                  <p>
                    {" "}
                    Tailor-make your diet plan; choose only the foods you love
                  </p>
                  <p> Choose from our extensive range of chef-prepared meals</p>
                  <p>
                    {" "}
                    Just add dairy, fresh fruit and vegetables to complete your
                    meals
                  </p>
                </div>
              </div>
              <div className="col-md-4 text-left">
                <div className="text-center">
                  {" "}
                  <img src={work2} className="img-fluid" />
                </div>
                <div className="mt-4">
                  <h5>2. We deliver your food for free</h5>
                  <p>
                    {" "}
                    Receive your large, unbranded box the next working day**
                  </p>
                  <p> Delivered straight to your home or office</p>
                  <p>
                    {" "}
                    You’ll always have a nutritious, calorie controlled meal to
                    hand.
                  </p>
                </div>
              </div>
              <div className="col-md-4 text-left">
                <div className="text-center">
                  {" "}
                  <img src={work3} className="img-fluid" />
                </div>
                <div className="mt-4 text-center">
                  <h5>3. You start your weight loss journey</h5>
                  <p>
                    {" "}
                    Wide choice of meals makes slimming easier than you ever
                    thought possible!
                  </p>
                  <p> Lose up to 2lbs per week *</p>
                  <p> Join over 250,000 other Diet Chef dieters</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <button>Start my journey</button>
            </div>
          </div>
        </section>
      </div>

      <section className="container-fluid mt-5">
        <div className="row home_sec3">
          <div className="col-md-12 col-lg-6 home_sec3_content">
            <h1>Find out more</h1>
            <p>
              In a clinical study a Diet Chef delivered meal plan was shown to
              be 3 times more likely to be successful than a self-devised plan.
              To see the results of the study or our information for Health
              Professionals use the links below.
            </p>
            <ul>
              <li>
                {" "}
                <i class="fas fa-thin fa-download pr-3"></i>
                Diet Guide
              </li>
              <li>
                {" "}
                <i class="fa-solid fa-download  pr-3"></i>
                Clinical study
              </li>
              <li>
                {" "}
                <i class="fa-solid fa-download  pr-3"></i>
                Info for health Professionals
              </li>
            </ul>
            <p>
              If you are looking for any other info please{" "}
              <Link to="">contact us.</Link>
            </p>
            <p>
              ** Order by 3.30p.m Monday – Thursday and receive your food the
              next day. Saturday delivery is also available for an extra fee.
            </p>
          </div>
          <div className="col-md-12 col-lg-6 home_banner2"></div>
        </div>
      </section>
    </div>
  );
};

export default Howitworks;
