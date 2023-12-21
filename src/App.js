import React from "react";
import DietPlans from "./Components/DietPlans";
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CorePackages from "./Core/CorePackages";
import VegetarianPackage from "./Vegetarian/Vegetarianpackages";
import CoreChoosemeal from "./Core/CoreChoosemeal";
import Footer from "./Components/Footer";
import BmiCalculator from "./NavbarComponents/BMIcalculator";
import Home from "./Components/Home";
import Rough from "./Rough";
import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";





const App = () => {
  return (
    <div>
      <BrowserRouter> 
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/diet-plans" element={<DietPlans />} />
          <Route exact path="/diet-plans/coreplan" element={<CorePackages/>}/>
          <Route exact path="/diet-plans/vegetarianplan" element={<VegetarianPackage/>}/>
          <Route exact path="/diet-plans/coreplan/coremeals/:gender/:price" element={<CoreChoosemeal/>}/>
          <Route exact path="/bmicalculator" element={<BmiCalculator/>}/>
          <Route exact path="/login" element={<Login/>}/>
          {/* footer   */}
          <Route exact path="/contact" element={<ContactUs/>}/>


          <Route exact path="/rough" element={<Rough/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
