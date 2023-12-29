import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "../css/CorePackages.css";
import { Md5G, MdOutlinePerson, MdOutlinePerson2 } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Link,useNavigate } from "react-router-dom";
//import images
import vegplan from "../images/vegetarian.png";
import breakfast from "../images/veg-plan/breakfast.png";
import lunch from "../images/veg-plan/lunch.png";
import dinner from "../images/veg-plan/dinner.png";
import snack from "../images/veg-plan/snack.png";

const VegetarianPackage = () => {
  const navigate = useNavigate();


  const cards = [
    { id: 1, price: "349.00", weight:"12kg's" ,week : "24 week" ,save:"90" },
    { id: 2, price: "369.00", weight:"6kg's" ,week : "16 week" ,save:"70" },
    { id: 3, price: "389.00", weight:"5kg's" ,week : "12 week" ,save:"50" },
    { id: 4, price: "419.00" , weight:"4kg's" ,week : "8 week" ,save:"20" },
    { id: 5, price: "439.00", weight:"2kg's" ,week : "4 week" ,save:"10" },
  ];

  const selectgender = [
    { id: 1, gender: "Male", icon: <MdOutlinePerson /> },
    { id: 2, gender: "Female", icon: <MdOutlinePerson2 /> },
  ];

  const [activeCard, setActiveCard] = useState(1);

  const [activPackage, setActivPackage] = useState(cards[0]);

  console.log(activPackage);
  const handleSetActiveCard = (cardId, card) => {
    setActiveCard(cardId);
    setActivPackage((prevPackage) => ({ ...prevPackage, ...card }));
    console.log("Clicked Card:", card);
  };


  useEffect(() => {
    console.log("activPackage changed:", activPackage);
  }, [activPackage]);


  const [activeGender, setActiveGender] = useState(1);
  const handleSetActiveGender = (genderId) => {
    setActiveGender(genderId);
  };

  const handleChooseMeals = () => {
    const selectedGender = selectgender.find(
      (gender) => gender.id === activeGender
    );
    // Find the selected card based on the activeCard state
    const selectedCard = cards.find((card) => card.id === activeCard);
    // Log the selected gender and card information to the console
    console.log("Selected Gender:", selectedGender.gender);
    console.log("Selected Card Price:", selectedCard.price);
   navigate(
      `/diet-plans/vegplan/vegmeals/${selectedGender.gender.toLowerCase()}/${selectedCard.price.toLowerCase()}`
    );
  };

  const content = (
    <>
      <b>What's included in the Vegetarian Plan?</b>
      <br />
      The Vegetarian Plan includes 28 days of meals and snacks, delivered direct to
      your door with FREE standard delivery. Each month we'll send you your
      choice of meals with:
      <br />
      <br />
      • 3 meals and a snack for each day for women, you'll enjoy a breakfast,
      lunch, dinner, and snack.
      <br />
      • 3 meals and 2 snacks for each day for men, you'll enjoy a breakfast,
      lunch, dinner, and 2 snacks. Men get an extra snack!
      <br />
      <br />
      You just need to add dairy, fresh fruit, and vegetables to meet government
      recommendations.
    </>
  );

  return (
    <div>
      <div className="container">
        <h5 className="core_packages_head">Vegetarian Plan</h5>
        <div className="row pb-5">
          <div className="col-lg-5 col-md-12 col-sm-12 p-0 core_plan_content">
            <div className="mb-5">
              <img src={vegplan} alt="core-img" className="img-fluid" />
            </div>
            <p className="text-justify">
              Choose from over 70 low calorie, portion controlled dishes with
              our best-selling Diet Chef plan. We’ve done all the calorie
              counting for you so you don’t have to. Just heat and eat in 3
              minutes. Enjoy your favourite meals from authentic curries to
              British classics and lose up to a healthy 1-2lbs per week!*
            </p>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 p-0">
            <div className="card core_plan_card">
              <h6>Make it yours...</h6>

              <p >
                Who is the order for?{" "}
                <span className="dropdown">
                <a class="dropbtn">
                  What’s included
                </a>
                
                <div
              class="dropdown-content"
                >
                  {content}
                </div>
                </span>
              </p>

              <div className="core_gender_card">
                {selectgender.map((genders) => (
                  <div
                    key={genders.id}
                    className="core_gender_btn"
                    onClick={() => handleSetActiveGender(genders.id)}
                  >
                    <div
                      className={`core_gender_btn button ${
                        activeGender !== genders.id
                          ? ""
                          : "actiev_core_gender_btn button"
                      }`}
                      style={{ borderRadius: "10px" }}
                    >
                      <button>{genders.gender}</button>
                    </div>
                  </div>
                ))}
              </div>

              <p>Choose a meal plan</p>

              <div className="row">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="col-lg-4 col-md-6 col-sm-6 core_pack_cards"
                    onClick={() => handleSetActiveCard(card.id,card)}
                  >
                    <div
                      className={`core_package_card ${
                        activeCard !== card.id ? "" : "active_core_package_card"
                      }`}
                    >
                      <h6 className="">Lose {card.weight}</h6>
                      <h4>{card.week}</h4>
                      <h3>₹{card.price}</h3>
                      <h4>/ 4 weeks</h4>
                      <p className="">Save ₹{card.save} per month</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="row mt-5 pt-3 pb-2"
                style={{
                  borderTop: "1px solid #ddd",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <div className="col-md-6">
                  <h6>Standard Delivery</h6>
                </div>
                <div className="col-md-6 text-right">
                  <h6>FREE</h6>
                </div>
              </div>

              <div
                className="row pt-3 pb-2"
                style={{ borderBottom: "1px solid #ddd" }}
              >
                <div className="col-md-6">
                  <h6>First hamper</h6>
                </div>
                <div className="col-md-6 text-right">
                  <h6>₹{activPackage?.price}</h6>
                </div>
              </div>

              <div
                className="row pt-3 pb-2"
                style={{ borderBottom: "1px solid #ddd" }}
              >
                <div className="col-md-6">
                  <h6>Following hampers</h6>
                </div>
                <div className="col-md-6 text-right">
                  <h6>₹{activPackage?.price}</h6>
                  <p>(every 4 weeks)</p>
                </div>
              </div>

              <button className="core_mealbtn" onClick={handleChooseMeals}>Choose meals</button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#ffffff" ,boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;"}}>
        <div className="container core_plan_details">
          <h5 className="core_packages_head2">
            What will your menu be like on the Vegetarian Plan?
          </h5>
          <div className="row core_food">
            <div className="col-md-6 col-lg-3">
              <div className="card core_cards">
                <h1>Breakfast</h1>
                <div>
                  <img
                    src={breakfast}
                    alt="core-breakfast"
                    className="img-fluid"
                  />
                </div>
                <p>
                  Give our new lemon & blueberry soft cookie a try! Perfect to
                  have on-the-go or whilst sitting at your desk. Plus, it goes
                  perfectly with a cup of tea.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card core_cards">
                <h1>Lunch</h1>
                <div>
                  <img src={lunch} alt="core-lunch" className="img-fluid" />
                </div>
                <p>
                  Our pasta pots are perfect for a quick and simple lunch
                  option. Just add boiling water and enjoy or serve in a bowl
                  with a fresh salad on the side!
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card core_cards">
                <h1>Dinner</h1>
                <div>
                  <img src={dinner} alt="core-dinner" className="img-fluid" />
                </div>
                <p>
                  Being on a diet doesn’t mean you need to miss out on takeaway
                  favourites! Our chicken tikka masala has just 315kcal. Pair
                  with rice or a slice of naan bread for an authentic Indian
                  treat.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card core_cards">
                <h1>Snack</h1>
                <div>
                  <img src={snack} alt="core-snack" className="img-fluid" />
                </div>
                <p>
                  Nothing's off the menu with Diet Chef. You can even snack on
                  popcorn in the evening while watching your favourite tv show
                  or movie! Just 118kcal per serving.
                </p>
              </div>
            </div>
          </div>

          <hr />

          <h5 className="core_packages_head2">Other plans you may like</h5>

          <div className="row">
            <div className="col-12 jumbotron">
              <h1>Core Plan</h1>
              <p>
                A selection of over 50 core friendly meals and snacks,
                perfect for non-meat eaters.
              </p>
              <Link to="#">
                <button className="plan_details_btn">
                  Plan details <FaArrowRightLong className="pl-2" />
                </button>
              </Link>
            </div>
          </div>

          <hr />

          <div className="row core_note_content">
            <div className="col-6">
              <p>** Please note that all Diet Chef meal plans are an auto-renewing
              subscription service. To make your continued weight loss journey
              as easy as possible, once your minimum commitment is finished,
              you’ll be placed on an ongoing subscription, receiving a hamper
              every 4 weeks charged at the standard plan fee. If you don’t wish
              to receive further deliveries contact Customer Services to cancel.
              An adjustment fee applies if you cancel before the end of your
              minimum plan term. Pause your diet plan for up to 1 month at any
              time by contacting Customer Services. Please see{" "}
              <Link to="#" style={{color:"#603"}}>terms and conditions </Link>for full details.</p>
            </div>
            <div className="col-6">
              <p>*** If you are not totally satisfied with your first order contact
              our Customer Service team within the first 14 days and return the
              remaining food for a full refund. No more than 7 days food may be
              consumed to be eligible for a full refund, available on first
              order only, limit one per customer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VegetarianPackage;
