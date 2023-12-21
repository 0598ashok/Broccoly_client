import React from "react";
import "../css/DietPlans.css";
import { Link } from "react-router-dom";
//import images
import vegetarian_new from "../images/vegetarian-new.png";
import core from "../images/core.jpg";
import dietplan from "../images/dietplan.jpg";

const DietPlans = () => {
  return (
    <div>
      <div className="container">
        <h5 className="diet_plan_head">
          Take the first step to losing weight today!
        </h5>
        <div className="row diet_plan_cardrow">
          <div className="col-md-6">
            <div className="card diet_plan_plancard">
              <h4 className="diet_plan_plancard_name">Vegetarian Plan</h4>
              <div>
                <img src={vegetarian_new} className="img-fluid" />
              </div>

              <div className="diet_plan_plancard_content">
                <p>A selection of delicious Vegetarian Meals and Snacks</p>
                <h6>
                  From<span> ₹319</span>/4weeks
                </h6>
               <Link to="/diet-plans/vegetarianplan"> <button className="w-100">
                  Plan Details <i class="fa-solid fa-arrow-right arrowIcon"></i>
                </button></Link>
                <p className="diet_plan_icons">
                  <i class="fa-solid fa-check"></i> 50vegetarian-friendly meals
                  and snacks to choose{" "}
                </p>
                <p className="diet_plan_icons">
                  <i class="fa-solid fa-check "></i> Includes your
                  breakfast,lunch,dinner and snacks for each day
                </p>
                <p className="diet_plan_icons">
                  <i class="fa-solid fa-check"></i> select either a 4,8,12,16 or
                  24 week plan
                </p>
                <p className="diet_plan_icons">
                  <i class="fa-solid fa-check"></i> Pause when you want**
                </p>
                <p className="diet_plan_icons">
                  <i class="fa-solid fa-check"></i> FREE standard delivery
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card diet_plan_plancard">
              <h4 className="diet_plan_plancard_name">Core Plan</h4>

              <img src={core} className="img-fluid" />

              <div className="diet_plan_plancard_content">
                <p>
                  Choice of over 70 portion and calorie controlled meals and
                  snacks
                </p>
                <h6>
                  From<span> ₹319</span>/4weeks
                </h6>
                <Link to="/diet-plans/coreplan"> <button className="w-100">
                  Plan Details <i class="fa-solid fa-arrow-right arrowIcon"></i>
                </button></Link>
                <p className="diet_plan_icons">
                  <i class="fa-solid fa-check"></i>Get your breakfast, lunch,
                  dinner and snacks for each day{" "}
                </p>
                <p className="diet_plan_icons">
                  <i class="fa-solid fa-check "></i> Select either a 4, 8, 12,
                  16 or 24-week plan
                </p>
                <p className="diet_plan_icons">
                  <i class="fa-solid fa-check"></i> select either a 4,8,12,16 or
                  24 week plan
                </p>
                <p className="diet_plan_icons">
                  <i class="fa-solid fa-check"></i> Pause when you want**
                </p>
                <p className="diet_plan_icons">
                  <i class="fa-solid fa-check"></i> FREE standard delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#fff" }}>
        <div className="row ">
          <div className="container col-lg-6 dietplan_plan1">
            <h1>Included in all Broccoly plans:</h1>

            <ul style={{ listStyleType: "none" }} className="p-0">
              <li>
                <i class="fa-solid fa-check "></i> 28 days of breakfasts,
                lunches, dinners and snacks, delivered to your door
              </li>
              <li>
                <i class="fa-solid fa-check "></i>Just add your own fresh fruit
                and vegetables
              </li>
              <li>
                <i class="fa-solid fa-check "></i> Personalise your hamper with
                your choice of portion and calorie controlled meals
              </li>
              <li>
                <i class="fa-solid fa-check "></i>Renews automatically**
              </li>
              <li>
                <i class="fa-solid fa-check "></i>FREE standard delivery
              </li>
              <li>
                <i class="fa-solid fa-check "></i>14 day money back guarantee***
              </li>
              <li>
                <i class="fa-solid fa-check "></i>FREE 'All You Need To Know'
                diet guide
              </li>
            </ul>
          </div>

          <div className="col-lg-6 dietplan_plan2 p-0">
            {/* <img src={dietplan} alt="dietplan" className="img-fluid"/> */}
          </div>
        </div>
      </div>



      <div style={{ backgroundColor: "#f6f5f4" }}>
        <div className="container">
          <div className="row dietplan_content">
            <div className="col-6">
              <p>
                ** Please note that all Diet Chef meal plans are an
                auto-renewing subscription service. To make your continued
                weight loss journey as easy as possible, once your minimum
                commitment is finished, you’ll be placed on an ongoing
                subscription, receiving a hamper every 4 weeks charged at the
                standard plan fee. If you don’t wish to receive further
                deliveries contact Customer Services to cancel. An adjustment
                fee applies if you cancel before the end of your minimum plan
                term. Pause your diet plan for up to 1 month at any time by
                contacting Customer Services. Please see{" "}
                <Link to="#" style={{ color: "#603" }}>
                  terms and conditions{" "}
                </Link>
                for full details.
              </p>
            </div>
            <div className="col-6">
              <p>
                *** If you are not totally satisfied with your first order
                contact our Customer Service team within the first 14 days and
                return the remaining food for a full refund. No more than 7 days
                food may be consumed to be eligible for a full refund, available
                on first order only, limit one per customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietPlans;
