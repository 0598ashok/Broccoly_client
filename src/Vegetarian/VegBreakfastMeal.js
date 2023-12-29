import React, { useState } from "react";
import "../css/Mealsmodal.css";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { FaLongArrowAltUp } from "react-icons/fa";
//images
import LuxuryMuesli from "../images/BreakFast/luxury_muesli_lg.jpg";
import VanillaBananaPorridge from "../images/BreakFast/vanilla_an_banana_porrid_lg2.jpg";
import CrunchyBranMuesli from "../images/BreakFast/crunchy_bran_muesli_sm.jpg";
import GlutenFreeFruityOatsMuesli from "../images/BreakFast/gluten_free_fruity_oats_sm.jpg";
import GlutenFreePurePorridgeOats from "../images/BreakFast/gluten_free_oats_sm.jpg";
import ChocolatePorridge from "../images/BreakFast/chocolate_porridge_sm.jpg";
import SpicedSultanaPorridge from "../images/BreakFast/spiced_sultana_porridge_sm.jpg";
import ButtermilkPancakeMix from "../images/BreakFast/butter_milk_pancakes_sm.jpg";
import { useParams } from "react-router-dom";
const VegBreakfastMeal = () => {



  const vegbreakfastmeal = [
    {
      id: 1,
      head: "Luxury Muesli",
      img: LuxuryMuesli,
      content:
        "This perfect blend of different ingredients really lends itself to a different texture and flavour combination in each spoonful. Wheat flakes, malted wheat flakes, oats and bran sticks perfectly mixed with naturally sweet dates, sultanas and a scattering of dry roasted peanuts for crunch.",
      storage: "Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "This perfect blend of different ingredients really lends itself to a different texture and flavour combination in each spoonful. Wheat flakes, malted wheat flakes, oats and bran sticks perfectly mixed with naturally sweet dates, sultanas and a scattering of dry roasted peanuts for crunch.",
      ingredients:
        "WHEAT Flakes (23.5%), Sultanas (14.7%), Malted Wheat Flakes (15%) (WHEAT Flakes, BARLEY Malt Extract), Sunflower Seeds (12%), Chopped Dates (10%), Roasted PEANUTS (7.5%), OATS (7.5%), Bran Sticks (5.8%) (WHEAT Bran, BARLEY Malt Flour), Chopped Apricots (3.7%) (contains Preservative: SULPHUR DIOXIDE).",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "149 kcal (623 kJ)",
      nutrition_energy_per100g: "372 kcal (1556 kJ)",
      nutrition_fat_per40g: "3.4g(of which saturates 0.44g)",
      nutrition_fat_per100g: "8.5g(of which saturates 1.1g)",
      nutrition_carbohydrate_per40g: "25.5g(of which sugars 8.8g)",
      nutrition_carbohydrate_per100g: "63.7g(of which sugars 22.1g)",
      nutrition_fibre_per40g: "3.5g",
      nutrition_fibre_per100g: "8.7g",
      nutrition_protein_per40g: "4g",
      nutrition_protein_per100g: "9.9g",
      nutrition_salt_per40g: "0.008g",
      nutrition_salt_per100g: "0.02g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "May contain nuts",
      G: "",
      W: "",
      gender:"male",
      price:"369.00"
    },
    {
      id: 2,
      head: "Vanilla & Banana Porridge",
      img: VanillaBananaPorridge,
      content:
        "This is our favourite porridge flavour combination! Rolled oats lightly flavoured with banana flakes and a hint of vanilla.",
      storage: "Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "This is our favourite porridge flavour combination! Rolled oats lightly flavoured with banana flakes and a hint of vanilla.",
      ingredients: "OATS, Banana Flakes (17%), Vanilla Powder (0.02%).",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "150 kcal (628 kJ)",
      nutrition_energy_per100g: "375 kcal (1569 kJ)",
      nutrition_fat_per40g: "	2.24g(of which saturates 0.36g)",
      nutrition_fat_per100g: "5.6g(of which saturates 0.9g)",
      nutrition_carbohydrate_per40g: "28.2g(of which sugars 3.6g)",
      nutrition_carbohydrate_per100g: "70.6g(of which sugars 9.1g",
      nutrition_fibre_per40g: "3.9g",
      nutrition_fibre_per100g: "9.8g",
      nutrition_protein_per40g: "4.2g",
      nutrition_protein_per100g: "10.5g",
      nutrition_salt_per40g: "0.008g",
      nutrition_salt_per100g: "0.02g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "May contain nuts",
      G: "",
      W: "",
      gender:"female",
      price:"369.00"
    },
    {
      id: 3,
      head: "Crunchy Bran Muesli",
      img: CrunchyBranMuesli,
      content:
        "Another great mix of ingredients of honey oats, malted wheat flakes and bran flakes, with natural sweetness from sultanas and raisins and finished ...",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Another great mix of ingredients of honey oats, malted wheat flakes and bran flakes, with natural sweetness from sultanas and raisins and finished with crunchy hazelnuts.",
      ingredients:
        "Honey Oats (45%) (OATS, Honey, Palm Oil), Malted Wheat Flakes (22%) (WHEAT Flakes, BARLEY Malt Extract), Raisins (13%), Sultanas (11%), Bran Sticks (5.6%) (WHEAT Bran, BARLEY Malt Flour), Roasted HAZELNUTS (2.3%).",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "146 kcal (611 kJ)",
      nutrition_energy_per100g: "365 kcal (1527 kJ)",
      nutrition_fat_per40g: "3.08g(of which saturates 1g)",
      nutrition_fat_per100g: "7.7g(of which saturates 2.5g)",
      nutrition_carbohydrate_per40g: "27g(of which sugars 10.4g)",
      nutrition_carbohydrate_per100g: "67.5g(of which sugars 26.1g)",
      nutrition_fibre_per40g: "2.8g",
      nutrition_fibre_per100g: "6.9g",
      nutrition_protein_per40g: "2.9g",
      nutrition_protein_per100g: "7.3g",
      nutrition_salt_per40g: "0.008g",
      nutrition_salt_per100g: "0.02g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "May contain nuts",
      G: "",
      W: "",
      gender:"male",
      price:"389.00"
    },
    {
      id: 4,
      head: "Gluten Free Fruity Oats Muesli",
      img: GlutenFreeFruityOatsMuesli,
      content:
        "Gluten free pure wholegrain oats, blended with natural sweet dates, apricots, sultanas, flame raisins with sunflower seeds and golden linseed.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Gluten free pure wholegrain oats, blended with natural sweet dates, apricots, sultanas, flame raisins with sunflower seeds and golden linseed.",
      ingredients:
        "Gluten Free Oats (57%), Sultanas (18%), Sunflower Seeds (7%), Flame Raisins (5.7%), Chopped Dates (5.7%) (Dates, Rice Flour), Linseeds (3.6%), Chopped Dried Apricots (2.9%) (Apricots, Rice Flour, Preservative: SULPHUR DIOXIDE).",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "149 kcal (623 kJ)",
      nutrition_energy_per100g: "372 kcal (1556 kJ)",
      nutrition_fat_per40g: "3.4g(of which saturates 0.44g)",
      nutrition_fat_per100g: "8.5g(of which saturates 1.1g)",
      nutrition_carbohydrate_per40g: "	25.5g(of which sugars 8.8g)",
      nutrition_carbohydrate_per100g: "63.7g(of which sugars 22.1g)",
      nutrition_fibre_per40g: "3.5g",
      nutrition_fibre_per100g: "8.7g",
      nutrition_protein_per40g: "4g",
      nutrition_protein_per100g: "9.9g",
      nutrition_salt_per40g: "0.008g",
      nutrition_salt_per100g: "0.02g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "May contain nuts",
      G: "Gluten free",
      W: "Wheat free",
      gender:"female",
      price:"389.00"
    },
    {
      id: 5,
      head: "Gluten Free Pure Porridge Oats",
      img: GlutenFreePurePorridgeOats,
      content:
        "Quickly becoming a big hit with our customers. Just simply gluten free flakes, perfect for your addition of your own favourite flavours. Simply add semi skimmed milk and microwave.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Quickly becoming a big hit with our customers. Just simply gluten free flakes, perfect for your addition of your own favourite flavours. Simply add semi skimmed milk and microwave.",
      ingredients: "100% Gluten Free Oat Flakes",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "150 kcal (628 kJ)",
      nutrition_energy_per100g: "375 kcal (1569 kJ)",
      nutrition_fat_per40g: "2.52g(of which saturates 0.44g)",
      nutrition_fat_per100g: "6.3g(of which saturates 1.1g)",
      nutrition_carbohydrate_per40g: "26.8g(of which sugars 0.6g))",
      nutrition_carbohydrate_per100g: "67g(of which sugars 1.5g)",
      nutrition_fibre_per40g: "	3.9g",
      nutrition_fibre_per100g: "9.8g",
      nutrition_protein_per40g: "	4.7g",
      nutrition_protein_per100g: "11.8g",
      nutrition_salt_per40g: "0.008g",
      nutrition_salt_per100g: "0.02g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "May contain nuts",
      G: "Gluten free",
      W: "Wheat free",
      gender:"male",
      price:"419.00"
    },
    {
      id: 6,
      head: "Chocolate Porridge",
      img: ChocolatePorridge,
      content:
        "A filling portion of wholesome oats with the double boost of cocoa and real dark chocolate pieces for a true chocolate indulgence at breakfast-time. Simply mix with milk or water and follow the easy instructions to create this amazingly wicked porridge.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A filling portion of wholesome oats with the double boost of cocoa and real dark chocolate pieces for a true chocolate indulgence at breakfast-time. Simply mix with milk or water and follow the easy instructions to create this amazingly wicked porridge.",
      ingredients:
        "OAT Flakes (74%), Sugar, Dark Chocolate (9%) (Sugar, Cocoa Mass, Cocoa Butter, Flavouring, Emulsifier: SOYA Lecithin), Dried Glucose Syrup, Fat Reduced Cocoa Powder, Cream Powder (from MILK), Salt, Stabiliser: Disodium Diphosphate.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "	152 kcal (636 kJ)",
      nutrition_energy_per100g: "410 kcal (1715 kJ)",
      nutrition_fat_per40g: "3.63g(of which saturates 1.26g)",
      nutrition_fat_per100g: "9.8g(of which saturates 3.4g)",
      nutrition_carbohydrate_per40g: "	25g(of which sugars 6.1g)",
      nutrition_carbohydrate_per100g: "67.6g(of which sugars 16.6g)",
      nutrition_fibre_per40g: "3g",
      nutrition_fibre_per100g: "8.1g",
      nutrition_protein_per40g: "3.6g",
      nutrition_protein_per100g: "9.6g",
      nutrition_salt_per40g: "	0.092g",
      nutrition_salt_per100g: "0.25g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
      gender:"female",
      price:"419.00"
    },
    {
      id: 7,
      head: "Spiced Sultana Porridge",
      img: SpicedSultanaPorridge,
      content:
        "Hearty oats, blended with sultanas and a perfect spice mix of cinnamon, ginger and nutmeg and a pinch for sugar for sweetness.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Hearty oats, blended with sultanas and a perfect spice mix of cinnamon, ginger and nutmeg and a pinch for sugar for sweetness.",
      ingredients:
        "OAT Flakes (78%), Sugar, Sultanas (7%), Ground Cinnamon, Ground Nutmeg, Ground Ginger.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "148 kcal (619 kJ)",
      nutrition_energy_per100g: "400 kcal (1674 kJ)",
      nutrition_fat_per40g: "2.48g(of which saturates 0.41g)",
      nutrition_fat_per100g: "6.7g(of which saturates 1.1g)",
      nutrition_carbohydrate_per40g: "26.2g(of which sugars 6.5g)",
      nutrition_carbohydrate_per100g: "70.8g(of which sugars 17.7g)",
      nutrition_fibre_per40g: "3.3g",
      nutrition_fibre_per100g: "8.8g",
      nutrition_protein_per40g: "	3.6g",
      nutrition_protein_per100g: "9.6g",
      nutrition_salt_per40g: "	0.067g",
      nutrition_salt_per100g: "0.18g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
      gender:"male",
      price:"439.00"
    },
    {
      id: 8,
      head: "Buttermilk Pancake Mix",
      img: ButtermilkPancakeMix,
      content:
        "The first `Prepare & Cook` product in our diet chef hampers. You will need a griddle or frying pan and a light spray of cooking oil for the pan. A wonderful breakfast is only a few minutes away. Best served with soft fruits low fat yoghurt and a drizzle of maple syrup. Perfect for those lazy Sunday morning breakfast times where you have a little more time.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "The first `Prepare & Cook` product in our diet chef hampers. You will need a griddle or frying pan and a light spray of cooking oil for the pan. A wonderful breakfast is only a few minutes away. Best served with soft fruits low fat yoghurt and a drizzle of maple syrup. Perfect for those lazy Sunday morning breakfast times where you have a little more time.",
      ingredients:
        "Wheatflour (WHEATFLOUR, Calcium Carbonate, Iron, Niacin, Thiamin), Sugar, Buttermilk Powder (from MILK), Whole EGG Powder, Raising Agents: Potassium Bicarbonate, Calcium Phosphate; Salt.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "152 kcal (636 kJ)",
      nutrition_energy_per100g: "353 kcal (1477 kJ)",
      nutrition_fat_per40g: "	1.59g(of which saturates 0.19g)",
      nutrition_fat_per100g: "3.7g(of which saturates 0.44g)",
      nutrition_carbohydrate_per40g: "19g(of which sugars 5.9g)",
      nutrition_carbohydrate_per100g: "44.2g(of which sugars 13.8g)",
      nutrition_fibre_per40g: "0.4g",
      nutrition_fibre_per100g: "1g",
      nutrition_protein_per40g: "2.4g",
      nutrition_protein_per100g: "5.5g",
      nutrition_salt_per40g: "0.129g",
      nutrition_salt_per100g: "0.3g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
      gender:"female",
      price:"439.00"
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const handleOpen = (card) => {
    setSelectedCard(card);
  };

  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  //for counter

  // Increment and Decrement handlers based on card index
  const [counters, setCounters] = useState(vegbreakfastmeal.map(() => 0));
  //  const handleIncrement = (index) => {
  //   setCounters((prevCounters) =>
  //     prevCounters.map((count, i) => (i === index ? count + 1 : count))
  //   );
  // };

  // const handleDecrement = (index) => {
  //   setCounters((prevCounters) =>
  //     prevCounters.map((count, i) => (i === index ? count - 1 : count))
  //   );
  // };

  const handleIncrement = (index) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] += 1;
      return newCounters;
    });
  };

  const handleDecrement = (index) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] -= 1;
      return newCounters;
    });
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const {gender,price} = useParams();
  // Filter cards based on the selected gender
  // const filteredCards = cards.filter((card) => card.gender.toLowerCase() === gender.toLowerCase());
  const filteredCards = vegbreakfastmeal.filter(
    (card) =>
      card.gender.toLowerCase() === gender.toLowerCase() &&
      card.price === price
  );


  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <p className="select_meals_count">
          {" "}
          0 of 28 meals selected for breakfast{" "}
        </p>

        {/* <div className="row">
          {filteredCards.map((card, index) => (
            <div
              key={card.id}
              className="col-lg-3 col-md-6 col-sm-6 core_pack_cards"
            >
              
              <h5
                className="meal_title"
                onClick={() => handleOpen(card)}
                data-toggle="modal"
                data-target="#myModal"
              >
                {card?.head}
              </h5>
              <div
                className="text-center"
                onClick={() => handleOpen(card)}
                data-toggle="modal"
                data-target="#myModal"
              >
                <img
                  src={card?.img}
                  alt="meal"
                  className="img-fluid"
                  style={{ width: "70%", padding: "20px 0px" }}
                />
              </div>
              <p
                className="meal_content"
                onClick={() => handleOpen(card)}
                data-toggle="modal"
                data-target="#myModal"
              >
                {card?.content}
              </p>

              <div className="d-flex meal_type">
                {card?.V && <p className="meal_type_v">V</p>}
                {card?.N && <p className="meal_type_n">N</p>}
                {card?.G && <p className="meal_type_g">G</p>}
                {card?.W && <p className="meal_type_w">W</p>}
              </div>

              
              <div class="btn-group btn-group-sm meal_counter">
                <button
                  type="button"
                  class="btn"
                  onClick={() => handleIncrement(index)}
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
                <span type="" class="btn ">
                  {counters[index]}
                </span>
                <button
                  type="button"
                  class="btn"
                  onClick={() => handleDecrement(index)}
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
              </div>
            
            </div>
          ) )}
        </div> */}
        <div className="row">
  {filteredCards.length > 0 ? (
    filteredCards.map((card, index) => (
      <div
        key={card.id}
        className="col-lg-3 col-md-6 col-sm-6 core_pack_cards"
      >
        {/* Card  */}
        <h5
          className="meal_title"
          onClick={() => handleOpen(card)}
          data-toggle="modal"
          data-target="#myModal"
        >
          {card?.head}
        </h5>
        <div
          className="text-center"
          onClick={() => handleOpen(card)}
          data-toggle="modal"
          data-target="#myModal"
        >
          <img
            src={card?.img}
            alt="meal"
            className="img-fluid"
            style={{ width: "70%", padding: "20px 0px" }}
          />
        </div>
        <p
          className="meal_content"
          onClick={() => handleOpen(card)}
          data-toggle="modal"
          data-target="#myModal"
        >
          {card?.content}
        </p>

        <div className="d-flex meal_type">
          {card?.V && <p className="meal_type_v">V</p>}
          {card?.N && <p className="meal_type_n">N</p>}
          {card?.G && <p className="meal_type_g">G</p>}
          {card?.W && <p className="meal_type_w">W</p>}
        </div>

        {/* Card  */}
        {/* Counter  */}
        <div class="btn-group btn-group-sm meal_counter">
          <button
            type="button"
            class="btn"
            onClick={() => handleIncrement(index)}
          >
            <i class="fa-solid fa-plus"></i>
          </button>
          <span type="" class="btn ">
            {counters[index]}
          </span>
          <button
            type="button"
            class="btn"
            onClick={() => handleDecrement(index)}
          >
            <i class="fa-solid fa-minus"></i>
          </button>
        </div>
        {/* Counter  */}
      </div>
    ))
  ) : (
    <div className="col-12 text-center">
      <p>No data found</p>
    </div>
  )}
</div>

      </div>

      {/* Bootstrap Modal */}

      <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <h4 class="modal-title modal_title_heading">
                    {selectedCard && selectedCard?.head}
                  </h4>
                  <div className="text-center">
                    <img
                      src={selectedCard && selectedCard?.img}
                      alt="Moroccan Style Tuna Pasta Bake img"
                      className="img-fluid "
                    />
                  </div>
                  <div>
                    <div className="d-flex">
                      {selectedCard?.V && <p className="meal_type_v mr-3">V</p>}
                      <span>{selectedCard?.V}</span>
                    </div>
                    <div className="d-flex">
                      {selectedCard?.N && <p className="meal_type_n mr-3">N</p>}
                      <span>{selectedCard?.N}</span>
                    </div>
                    <div className="d-flex">
                      {selectedCard?.G && <p className="meal_type_g mr-3">G</p>}
                      <span>{selectedCard?.G}</span>
                    </div>
                    <div className="d-flex">
                      {selectedCard?.W && <p className="meal_type_w mr-3">W</p>}
                      <span>{selectedCard?.W}</span>
                    </div>
                  </div>
                  <p className="modal_title_storage">
                    <b>Storage:</b>
                    {selectedCard && selectedCard?.storage}
                  </p>
                </div>
                <div className="col-md-6">
                  <MDBTabs className=" container mb-3 grid-container bf_meal_grid_container">
                    <MDBTabsLink
                      onClick={() => handleBasicClick("tab1")}
                      active={basicActive === "tab1"}
                      className="bf_meal_grid_item "
                    >
                      overview
                    </MDBTabsLink>

                    <MDBTabsItem>
                      <MDBTabsLink
                        onClick={() => handleBasicClick("tab2")}
                        active={basicActive === "tab2"}
                        className="bf_meal_grid_item"
                      >
                        Ingradients
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                      <MDBTabsLink
                        onClick={() => handleBasicClick("tab3")}
                        active={basicActive === "tab3"}
                        className="bf_meal_grid_item"
                      >
                        Nutrition
                      </MDBTabsLink>
                    </MDBTabsItem>
                  </MDBTabs>

                  <MDBTabsContent>
                    <MDBTabsPane
                      open={basicActive === "tab1"}
                      className="modal_overview_btn"
                    >
                      <p>{selectedCard && selectedCard?.overview}</p>
                    </MDBTabsPane>
                    <MDBTabsPane
                      open={basicActive === "tab2"}
                      className="modal_ingredient_btn"
                    >
                      <h6>Ingredients</h6>
                      <p>{selectedCard && selectedCard?.ingredients}</p>
                      <p>{selectedCard && selectedCard?.ingredients2}</p>
                    </MDBTabsPane>
                    <MDBTabsPane
                      open={basicActive === "tab3"}
                      className="modal_nutrition_btn"
                    >
                      <h4>Typical Nutritional Values</h4>
                      <table className="table table-bordered">
                        <tr className="row1">
                          <th></th>
                          <th> Per Serving (40g)</th>
                          <th>Per 100g</th>
                        </tr>
                        <tr>
                          <th>Energy</th>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_energy_per40g}
                          </td>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_energy_per100g}
                          </td>
                        </tr>
                        <tr>
                          <th>Fat</th>
                          <td>
                            {selectedCard && selectedCard?.nutrition_fat_per40g}
                          </td>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_fat_per100g}
                          </td>
                        </tr>
                        <tr>
                          <th>Carbohydrate</th>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_carbohydrate_per40g}
                          </td>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_carbohydrate_per100g}
                          </td>
                        </tr>
                        <tr>
                          <th>Fibre</th>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_fibre_per40g}
                          </td>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_fibre_per100g}
                          </td>
                        </tr>
                        <tr>
                          <th>Protein</th>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_protein_per40g}
                          </td>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_protein_per100g}
                          </td>
                        </tr>
                        <tr>
                          <th>Salt</th>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_salt_per40g}
                          </td>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_salt_per100g}
                          </td>
                        </tr>
                      </table>
                    </MDBTabsPane>
                  </MDBTabsContent>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}

      <div className="text-center back_to_top_btn">
        <button className="" onClick={scrollToTop}>
          Back to top <FaLongArrowAltUp />{" "}
        </button>
      </div>


    </div>
  );
};

export default VegBreakfastMeal;
