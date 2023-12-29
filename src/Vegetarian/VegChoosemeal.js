import React, { useState } from "react";
import "../css/CoreChoosemeal.css";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import CoreBreakfastMeal from "./CoreBreakfastMeal";
// import CoreLunchMeal from "./CoreLunchMeal"
// import CoreDinnerMeal from "./CoreDinnerMeal";
// import CoreSnackMeal from "./CoreSnackMeal";
import VegBreakfastMeal from "./VegBreakfastMeal";
import VegLunchMeal from "./VegLunchMeal";
import VegDinnerMeal from "./VegDinnerMeal";
import VegSnackMeal from "./VegSnackMeal";

function VegChoosemeal() {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const steps = [
    "Choose your plan",
    "Choose your meals",
    "Delivery",
    "Payment",
  ];

  return (
    <>
      <div className="pt-5 meal_grid">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-4">
              <h4>Men's Core 24 Week Plan</h4>
              <p>
                We've filled your plan with our most popular meals. You can edit
                this below to tailor your menu.
              </p>
            </div>
            <div className="col-md-8">
              <Box sx={{ width: "100%" }}>
                <Stepper activeStep={1} alternativeLabel className="step_label">
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </div>
          </div>
        </div>
        <MDBTabs className=" container mb-3 grid-container meal_grid_container">
          <MDBTabsLink
            onClick={() => handleBasicClick("tab1")}
            active={basicActive === "tab1"}
            className="meal_grid_item "
          >
            Breakfast <b>28/28</b>
          </MDBTabsLink>

          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
              className="meal_grid_item"
            >
              Lunch <b>28/28</b>
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab3")}
              active={basicActive === "tab3"}
              className="meal_grid_item"
            >
              Dinner <b>28/28</b>
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab4")}
              active={basicActive === "tab4"}
              className="meal_grid_item"
            >
              Snack <b>28/28</b>
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane open={basicActive === "tab1"}>
            <VegBreakfastMeal/>
          </MDBTabsPane>
          <MDBTabsPane open={basicActive === "tab2"}>
          <VegLunchMeal/>
          </MDBTabsPane>
          <MDBTabsPane open={basicActive === "tab3"}> <VegDinnerMeal/></MDBTabsPane>
          <MDBTabsPane open={basicActive === "tab4"}> <VegSnackMeal/></MDBTabsPane>
        </MDBTabsContent>

        <div className="meal_footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6  text-center m-auto">
                <h4 className="meal_footer_sub">Subtotal : <span>£349.00</span></h4>
              </div>
              <div className="col-lg-4 col-md-6  d-flex mb-3 mt-2">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    style={{ height: "auto", marginRight: "10px" }}
                    placeholder="Enter discount code"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text promo_apply_btn">
                      Apply promo
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 text-center">
                <button className="order_this_plan_btn">Order this plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default VegChoosemeal;
