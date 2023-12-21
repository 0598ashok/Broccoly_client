import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../css/Bmicalculator.css";

import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BmiCalculator = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // state
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [degree, setdegree] = useState("");
  const [showResult, setShowResult] = useState(false);

  var e = 0,
    o = 0;

  let calcBmi = (event) => {
    // prevent submitting
    event.preventDefault();
    // if (weight === "" || feet === "" || inches === "") {
    //   alert("Please enter a valid weight and height");
    // }
    if (feet === "" || inches === "") {
      toast.error("Please enter a height");
      return;
    } else if (weight === "") {
      toast.error("Please enter a weight");
      return;
    } else {
      // Convert height to meters
      const heightInMeters = feet * 0.3048 + inches * 0.0254;

      // Calculate BMI
      let bmi = weight / (heightInMeters * heightInMeters);
      const displayingContainer = document.querySelector(
        ".displayingContainer"
      );
      console.log("hello");

      if (displayingContainer) {
        displayingContainer.style.display = "block";
        displayingContainer.style.transform = "translateY(-20px)";
      }

      var n = bmi;
      console.log(n);

      setBmi(bmi.toFixed(1));
      // Logic for message
      if (bmi < 18.5) {
        setMessage("  underweight ");
        e = 18.5;
      } else if (bmi >= 18.5 && bmi <= 25) {
        e = 6.5;
        o = 64;
        n = bmi - 18.5;
        setMessage(" healthy weight ");
      } else if (bmi > 25 && bmi <= 30) {
        n = bmi - 18.5;
        e = 6.5;
        o = 64;
        setMessage("  overweight ");
      } else {
        setMessage(" Obese ");
        n = bmi - 18.5;
        e = 20;
        o = 192;
      }

      var a = (n / e) * 64 + o + -128;
      setTimeout(() => {
        setdegree(a); // Set your desired rotation degree
      }, 50);
      console.log(a);
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="">
      <div className="container">
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          transition={Zoom}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <h2 className="text-center mt-5">BMI Calculator</h2>

        <div className="container bmiform">
          <p className="mb-5 text-center" style={{ fontWeight: "500" }}>
            Do you know if you’re a healthy weight? Use our handy Body Mass
            Index (BMI) calculator to find out. Our BMI calculator gives you
            both your current and recommended BMI to help you establish your
            weight loss goals.
          </p>
          <div className="row h_w_row">
            <div className="col-md-6 d-flex">
              <label>Height</label>
              <input
                value={feet}
                onChange={(event) => setFeet(event.target.value)}
                type="number"
                placeholder="feet"
                className="form-control"
              />
              <input
                type="number"
                placeholder="inch"
                className="form-control"
                value={inches}
                onChange={(event) => setInches(event.target.value)}
              />
            </div>
            <div className="col-md-6 d-flex">
              <label>Weight</label>
              <input
                value={weight}
                type="number"
                placeholder="kg's"
                className="form-control"
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 col-3">Name</div>
            <div className="col-md-9 col-9">
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control"
                require
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 col-3">Email</div>
            <div className="col-md-9 col-9">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-3">Age</div>
            <div className="col-md-9 col-9">
              <input
                type="number"
                placeholder="Enter your age"
                className="form-control"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 col-3">Contact Number</div>
            <div className="col-md-9 col-9">
              <input
                type="number"
                placeholder="Enter your number"
                className="form-control"
              />
            </div>
          </div>

          <div className="row gender_row">
            <div className="col-md-3 col-3">Gender</div>
            <div className="col-md-9 col-9">
              <div>
                <input type="radio" name="gender" id="male" />
                <label for="male">Male</label>

                <input type="radio" name="gender" id="female" />
                <label for="female">Female</label>

                <input type="radio" name="gender" id="other" />
                <label for="other">Other</label>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <button onClick={calcBmi} className="bmisubmit content11">
              Submit
            </button>
            {/* <button onClick={handleReload} className="bmireset">Reset</button> */}
          </div>

          <div data-aos="zoom-in" className="box">
            <div className="displayingContainer">
              <div className="result-section center">
                <h3>BMI : {bmi + message || "00"}</h3>
              </div>

              <div className="chart-container">
                <div className="bmi-chart">
                  <div className="highlighted-region"></div>
                  <div className="gauge">
                    <div
                      className="dial"
                      style={{ transform: `rotate(${degree}deg)` }}
                    ></div>
                  </div>
                  <div className="bmi-text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
