import React, { useEffect, useRef, useState } from "react";
import "../css/Home.css";

import AOS from "aos";
import "aos/dist/aos.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//images
import ashok from "../images/ashok.jpeg";
import homebmimeter from "../images/homebmimeter.png";
import work1 from "../images/work-1.png";
import work2 from "../images/work-2.png";
import work3 from "../images/work-3.png";
import dailymail from "../images/newsreview/daily-mail.png";
import woman from "../images/newsreview/woman.png";
import thetimes from "../images/newsreview/the-times.png";
import zest from "../images/newsreview/zest.png";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";

import { Link } from "react-router-dom";

import ReactReadMoreReadLess from "react-read-more-read-less";
const Reviewtext1 =
  "“Good value, great food. I got to choose my own meals. And I can honestly say there was not one thing I tried I didn't like. I really didn't feel like I was on a diet. It was like super-healthy takeaway. Most people lose around two pounds a week, and I found this to be true. I would also argue that they are not all as expensive as you may think. I actually spent less than I was spending during my weekly shop.” - Ashley Pearson";
const Reviewtext2 =
  "“The thing I like about Diet Chef was it takes all the hassle out calorie counting. The first few days were hard and my stomach rumbled a lot, but I soon started to get used to it. I'd recommend this if you're looking for a way of dieting without having to do all the thinking”";
const Reviewtext3 =
  "We are meeting to discuss Diet Chef, a weight-loss programme that Karren Brady says helped her drop a dress size in preparation for her Christmas. Her meals are delivered in a box, everything measured out she doesn't have to think. The results are impressive, she looks trim and petite”";
const Reviewtext4 =
  "“I dropped 3 sizes with Diet Chef. It was a real education. I was shocked at first by the small portion size, but it started to make sense why I'd put on so much weight, my portions were far too big. Although my portions halved I felt nicely satisfied after each meal, rather than stuffed like before.” Erin - Zest";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  //owl carousel
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 3000,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
    },
    itemClass: "custom-carousel-item",
  };
  //owl carousel

  //owl carousel2
  const options1 = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 2000,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
    },
    itemClass: "custom-carousel-item",
  };
  //owl carousel2

  //BMI calculator

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  var e = 0,
    o = 0;

  let calcBmi = (event) => {
    // prevent submitting
    event.preventDefault();
    // if (weight === "" || feet === "" || inches === "") {
    //   alert("Please enter a valid weight and height");
    // }
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
    }
  else {
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
      setShowResult(true);
      setWeight("");
      setFeet("");
      setInches("");
      setName("");
      setEmail("");
      setContactNumber("");
      setAge("");
    }
  };

  //BMI calculator
  return (
    <div>
      <section className="home_banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 m-auto">
              <h1>Delicious diet plans delivered direct to you</h1>
              <p>
                Join over 250,000 people who've chosen Diet Chef to help them
                lose weight. We send 28 days of chef-prepared meals and snacks
                straight to your door, making losing weight simple and tasty.
                Start my journey
              </p>

              <button>start my journey</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 col-lg-6 m-auto">
              <div className="container mt-5">
                <OwlCarousel className="owl-theme" {...options}>
                  <div className="item text-center owl_carousel_cards">
                    <div className="card">
                      <div className="m-auto">
                        <img src={avatar1} alt="reviewimg1" />
                      </div>
                      <p>
                        <sup>
                          <i class="fa-solid fa-quote-left"></i>
                        </sup>
                        Broccoly is simple to follow, just heat in the microwave
                        and you’re ready to eat. There’s so much variety that
                        I’m never bored
                        <sup>
                          <i class="fa-solid fa-quote-right"></i>
                        </sup>
                      </p>
                      <Link to="#">Read all reviews</Link>
                    </div>
                  </div>
                  <div className="item text-center owl_carousel_cards">
                    <div className="card">
                      <div className="m-auto">
                        <img src={avatar2} alt="reviewimg1" />
                      </div>
                      <p>
                        <sup>
                          <i class="fa-solid fa-quote-left"></i>
                        </sup>
                        I never once felt like I was on a diet or being deprived
                        as the food is so tasty and surprisingly filling
                        <sup>
                          <i class="fa-solid fa-quote-right"></i>
                        </sup>
                      </p>
                      <Link to="#">Read all reviews</Link>
                    </div>
                  </div>
                  <div className="item text-center owl_carousel_cards">
                    <div className="card">
                      <div className="m-auto">
                        <img src={avatar3} alt="reviewimg1" />
                      </div>
                      <p>
                        <sup>
                          <i class="fa-solid fa-quote-left"></i>
                        </sup>
                        I feel healthier now. It's easier to get up stairs, to
                        carry stuff, even bend down and tie my shoes.
                        <sup>
                          <i class="fa-solid fa-quote-right"></i>
                        </sup>
                      </p>
                      <Link to="#">Read all reviews</Link>
                    </div>
                  </div>
                  <div className="item text-center owl_carousel_cards">
                    <div className="card">
                      <div className="m-auto">
                        <img
                          src="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?size=626&ext=jpg&uid=R63557156&ga=GA1.2.1617011683.1703158333&semt=ais"
                          alt="reviewimg1"
                        />
                      </div>
                      <p>
                        <sup>
                          <i class="fa-solid fa-quote-left"></i>
                        </sup>
                        ife has changed for the better and that's really great.
                        I can finally get into the clothes I want to wear and
                        show who I am.
                        <sup>
                          <i class="fa-solid fa-quote-right"></i>
                        </sup>
                      </p>
                      <Link to="#">Read all reviews</Link>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 home_top_bmi">
              <div className="">
                <div className="container p-0">
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

                  <div className="container home_bmiform">
                    <div className="text-center">
                      <img src={homebmimeter} />
                    </div>
                    <h2 className="center">
                      <b>Free</b>{" "}
                      <span style={{ fontWeight: "100" }}>BMI Calculator</span>
                    </h2>
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
                      <div className="col-md-3 col-3 m-auto">Gender</div>
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
                        onClick={calcBmi}
                        className="bmisubmit content11"
                        // data-toggle="modal"
                        // data-target="#myModal"
                      >
                        Submit
                      </button>
                      {/* <button onClick={handleReload} className="bmireset">Reset</button> */}
                    </div>
                    {showResult && (
                      <div className="result-section center text-center">
                        <h3>BMI Result :<br/> <em style={{color:"#603",fontWeight:"100"}}>{bmi + " you are in " + message || "00"}</em></h3>
                      </div>
                    )}

                    {/* <div class="modal" id="myModal">
                      <div class="modal-dialog">
                        <div class="modal-content">
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
                                    style={{
                                      transform: `rotate(${degree}deg)`,
                                    }}
                                  ></div>
                                </div>
                                <div className="bmi-text"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid mt-5">
        <div className="row home_sec3">
          <div className="col-md-12 col-lg-6 home_sec3_content">
            <h1>Lose weight while eating the food you love...</h1>
            <ul>
              <li>Expertly chef-prepared dishes from breakfast to dinner</li>
              <li> Over 55 meals and snacks to choose from</li>
              <li>
                {" "}
                No counting points or calories - we do the numbers for you
              </li>
              <li>Your food for the month delivered to your door for free!</li>
              <li>
                See what our customers think from over 9500 independent reviews
                on Trustpilot
              </li>
            </ul>
            <button>start my journey</button>
          </div>
          <div className="col-md-12 col-lg-6 home_banner2"></div>
        </div>
      </section>

      <section className="home_broccoly_works">
        <div className="container home_works mt-5">
          <div className="text-center mb-5">
            <h1 style={{ fontWeight: "100" }}>How Broccoly works</h1>
          </div>
          <div className="row">
            <div className="col-md-4 text-left">
              <img src={work1} className="img-fluid" />
              <div className="mt-4">
                <h5>1. Choose your plan</h5>
                <p>and checkout securely</p>
              </div>
            </div>
            <div className="col-md-4 text-left">
              <img src={work2} className="img-fluid" />
              <div className="mt-4">
                <h5>2. Receive your food the next working day</h5>
                <p>With FREE standard delivery</p>
              </div>
            </div>
            <div className="col-md-4 text-left">
              <img src={work3} className="img-fluid" />
              <div className="mt-4 text-center">
                <h5>3. Enjoy your meals & feel great!</h5>
                <p>Just heat and eat!</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button>Start my journey</button>
          </div>
        </div>
      </section>

      <section className="home_broccoly_works1">
        <div className="col-md-12 col-lg-6 m-auto">
          <div className="container mt-5">
            <OwlCarousel className="owl-theme" {...options1}>
              <div className="item text-center">
                <div className="m-auto ">
                  <img src={work1} alt="work-1" />
                </div>
                <div className="mt-4 text-center">
                  <h5>1. Choose your plan</h5>
                  <p>and checkout securely</p>
                </div>
              </div>
              <div className="item text-center ">
                <div className="m-auto">
                  <img src={work2} alt="work-2" />
                </div>
                <div className="mt-4 text-center">
                  <h5>2. Receive your food the next working day</h5>
                  <p>With FREE standard delivery</p>
                </div>
              </div>
              <div className="item text-center">
                <div className="m-auto">
                  <img src={work3} alt="work-3" />
                </div>
                <div className="mt-4 text-center">
                  <h5>3. Enjoy your meals & feel great!</h5>
                  <p>Just heat and eat!</p>
                </div>
              </div>
            </OwlCarousel>
          </div>
          <div className="">
            <div className="text-center mt-3">
              <button>Start my journey</button>
            </div>
          </div>
        </div>
      </section>

      <section className="home_news_reviews mt-5">
        <div className="container pt-5 pb-5">
          <div className="text-center">
            <h1 style={{ fontWeight: "100" }}>What the press say</h1>
          </div>
          <div class="home_news_container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div class="home_news_container_item">
                  <div>
                    <img src={dailymail} className="img-fluid" />
                  </div>
                  <p>
                    <ReactReadMoreReadLess
                      charLimit={150}
                      readMoreText={"Read more ▼"}
                      readLessText={"Read less ▲"}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"
                    >
                      {Reviewtext1}
                    </ReactReadMoreReadLess>
                  </p>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div class="home_news_container_item">
                  <div>
                    <img src={woman} className="img-fluid" />
                  </div>
                  <p>
                    <ReactReadMoreReadLess
                      charLimit={150}
                      readMoreText={"Read more ▼"}
                      readLessText={"Read less ▲"}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"
                    >
                      {Reviewtext2}
                    </ReactReadMoreReadLess>
                  </p>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div class="home_news_container_item">
                  <div>
                    <img src={thetimes} className="img-fluid" />
                  </div>
                  <p>
                    <ReactReadMoreReadLess
                      charLimit={150}
                      readMoreText={"Read more ▼"}
                      readLessText={"Read less ▲"}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"
                    >
                      {Reviewtext3}
                    </ReactReadMoreReadLess>
                  </p>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div class="home_news_container_item">
                  <div>
                    <img src={zest} className="img-fluid" />
                  </div>
                  <p>
                    <ReactReadMoreReadLess
                      charLimit={150}
                      readMoreText={"Read more ▼"}
                      readLessText={"Read less ▲"}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"
                    >
                      {Reviewtext4}
                    </ReactReadMoreReadLess>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
