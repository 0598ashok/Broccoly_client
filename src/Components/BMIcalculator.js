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
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  var e = 0,
    o = 0;

  let calcBmi = (event) => {
    event.preventDefault();
    console.log(showModal);
    // Check if any of the input fields are empty
    if (feet === "" || inches === "") {
      toast.error("Please Enter Height");
      return;
    } else if (weight === "") {
      toast.error("Please Enter Weight");
      return;
    } else if (name === "") {
      toast.error("Please Enter Name");
      return;
    } else if (email === "") {
      toast.error("Please Enter Email");
      return;
    } else if (age === "") {
      toast.error("Please Enter Age");
      return;
    } else if (contactNumber === "") {
      toast.error("Please Enter Contact Number");
      return;
    } else {
      // Convert height to meters
      const heightInMeters = feet * 0.3048 + inches * 0.0254;

      // Calculate BMI
      let bmi = weight / (heightInMeters * heightInMeters);
      const displayingContainer = document.querySelector(
        ".displayingContainer"
      );

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
      setShowModal(true);
      // document.documentElement.style.backgroundColor = "rgb(27 26 26 / 55%)";

      setWeight("");
      setFeet("");
      setInches("");
      setName("");
      setEmail("");
      setContactNumber("");
      setAge("");
    }
  };

  console.log(showModal);

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
          <form>
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
                  value={name}
                  onChange={(event) => setName(event.target.value)}
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
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
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
                  value={contactNumber}
                  onChange={(event) => setContactNumber(event.target.value)}
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
              <button
                className="bmisubmit content11"
                data-toggle="modal"
                data-target="#bmimodal"
                onClick={calcBmi}
              >
                Submit
              </button>
            </div>
          </form>

          {/* {showModal && (
            <div
              class="modal bmimodal"
              id="myModal"
              tabIndex="-1"
              role="dialog"
              show={showModal}
              onHide={() => setShowModal(false)}
              style={{ display: "block" }}
             
            >
              <div class="modal-dialog modal-lg">
                <div
                  class="modal-content modal_content"
                  style={{ backgroundColor: "rgb(247 247 247)" }}
                >
                  <div class="modal-header m-auto">
                    <h4 class="modal-title" style={{ color: "#603" }}>
                      Your BMI result
                    </h4>
                  </div>

                  <div class="modal-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="displayingContainer">
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
                      <div className="col-md-6 m-auto">
                        <h5>Your BMI is {bmi + message || "00"}</h5>

                        <p className="pt-4 pb-4">
                          We recommend that you see your GP for help and advice
                          on gaining weight to achieve a healthy BMI.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        setShowModal(false);
                        document.body.style.backgroundColor = "";
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )} */}
          {showModal && (
            <div
              class="modal fade"
              id="bmimodal"
              tabIndex="-1"
              role="dialog"
              show={showModal}
              // onClick={() => {
              //   setShowModal(false);
              // }}
              style={{ display: "block" }}
              data-backdrop="static"
              
            >
               <div class="modal-dialog modal-lg">
                <div
                  class="modal-content modal_content"
                  style={{ backgroundColor: "rgb(247 247 247)" }}
                >
                  <div class="modal-header m-auto">
                    <h4 class="modal-title" style={{ color: "#603" }}>
                      Your BMI result
                    </h4>
                  </div>

                  <div class="modal-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="displayingContainer">
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
                      <div className="col-md-6 m-auto">
                        <h5>Your BMI is {bmi + message || "00"}</h5>

                        <p className="pt-4 pb-4">
                          We recommend that you see your GP for help and advice
                          on gaining weight to achieve a healthy BMI.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        setShowModal(false);
                        window.location.reload();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <p className="bmi_below_content">
            <i class="fa-solid fa-quote-left"></i> The BMI (Body Mass Index)
            calculator is a valuable tool designed to assess an individual's
            body weight in relation to their height. It provides a numerical
            representation of body composition, helping determine whether a
            person is underweight, normal weight, overweight, or obese. By
            inputting weight and height measurements into the calculator, users
            receive a BMI value along with a corresponding weight status
            category. This information can be crucial for individuals striving
            to maintain a healthy weight and make informed decisions about their
            overall well-being. Keep in mind that while BMI is a useful
            screening tool, it does not account for factors such as muscle mass
            and distribution of fat, so it is advisable to consult with
            healthcare professionals for a comprehensive health assessment.
            <i class="fa-solid fa-quote-right"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
