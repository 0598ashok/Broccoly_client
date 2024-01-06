import React from "react";
import DietPlans from "./Components/DietPlans";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CorePackages from "./Core/CorePackages";
import VegetarianPackage from "./Vegetarian/Vegetarianpackages";
import CoreChoosemeal from "./Core/CoreChoosemeal";
import Footer from "./Components/Footer";
import BmiCalculator from "./Components/BMIcalculator";
import Home from "./Components/Home";

import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";
import Security from "./Components/Security";
import Faq from "./Components/Faq";
import Deliveryreturns from "./Components/Deliveryreturns";
import Cookiespolicy from "./Components/Cookiespolicy";
import Privacypolicy from "./Components/Privacypolicy";
import Termsandconditions from "./Components/Termsandconditions";
import About from "./Components/About";
import Howitworks from "./Components/Howitworks";
import VegChoosemeal from "./Vegetarian/VegChoosemeal";
import DietMeal from "./Components/Dietmeal/DietMeal";
import Reviews from "./Components/Reviews";
import Packages from "./Admin/Packages";
import AdminSidebar from "./Admin/AdminSidebar";
import Products from "./Admin/Products";
import NutritionInformation from "./Admin/NutritionInformation";

const App = () => {
  console.log(window.location.pathname);

  let isAdmindashboard = window.location.pathname === "/" ? false : true;

  console.log(isAdmindashboard);

  return (
    <div>
      <BrowserRouter>
        {isAdmindashboard ? (
          <div>
            <Routes>
              <Route exact path="/packages" element={<Packages />} />
              <Route exact path="/products" element={<Products/>}/>
              <Route exact path="/nutrition-information" element={<NutritionInformation/>}/>
            </Routes>
          </div>
        ) : (
          <div>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/diet-plans" element={<DietPlans />} />
              <Route
                exact
                path="/diet-plans/coreplan"
                element={<CorePackages />}
              />
              <Route
                exact
                path="/diet-plans/vegetarianplan"
                element={<VegetarianPackage />}
              />
              <Route
                exact
                path="/diet-plans/coreplan/coremeals/:gender/:price"
                element={<CoreChoosemeal />}
              />
              <Route
                exact
                path="/diet-plans/vegplan/vegmeals/:gender/:price"
                element={<VegChoosemeal />}
              />
              <Route exact path="/diet-meals" element={<DietMeal />} />
              <Route exact path="/how-it-works" element={<Howitworks />} />
              <Route exact path="/reviews" element={<Reviews />} />
              <Route exact path="/bmi-calculator" element={<BmiCalculator />} />
              <Route exact path="/login" element={<Login />} />
              {/* footer   */}

              <Route exact path="/security" element={<Security />} />
              <Route exact path="/faq" element={<Faq />} />
              <Route
                exact
                path="/delivery-returns"
                element={<Deliveryreturns />}
              />
              <Route exact path="/cookies-policy" element={<Cookiespolicy />} />
              <Route exact path="/privacy-policy" element={<Privacypolicy />} />
              <Route
                exact
                path="/terms-conditions"
                element={<Termsandconditions />}
              />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<ContactUs />} />
            </Routes>
            <Footer />
          </div>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
