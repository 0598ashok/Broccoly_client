import React,{useState} from 'react'
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

import DarkChocolateCranberries from "../images/snack/dark_chocolate_cranberries_sm.jpg";
import Fruitnutseedmix from "../images/snack/fruit_nut_seed_35g_sm.jpg";
import SuperSeedFruitMix from "../images/snack/super_seed_fruit_mix_sm.jpg";
import ChocolateChipOatBiscuits from "../images/snack/choc_chip_low_gi_biscuits_sm.jpg";
import CoconutChiaOatBiscuits from "../images/snack/coconut_chia_oat_sm.jpg";
import SaltPepperFlavourSoyaPotatoSnacks from "../images/snack/salt_pepper_crisps_sm.jpg";
import PaprikaFlavourSoyaPotatoSnacks from "../images/snack/Paprika_sm.jpg";
import CheeseOnionFlavourSoyaPotatoSnack from "../images/snack/Cheese_Onion_sm.jpg";
import GingerOatBiscuits from "../images/snack/ginger_low_gi_biscuits_sm.jpg";
import BerryOatBiscuits from "../images/snack/berry_low_gi_biscuits_sm.jpg";



const CoreSnackMeal = () => {


  const snacks = [
    {
      id: 1,
      head: "Dark Chocolate Cranberries",
      img: DarkChocolateCranberries,
      content:
        "Dark chocolate coated cranberries to keep your chocolate cravings at bay.",
      storage: " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Dark chocolate coated cranberries to keep your chocolate cravings at bay.",
      ingredients: "Sugar, Cocoa mass, Palm oil, Cocoa butter, Whey powder (from MILK), Emulsifier: Sunflower lecithin, Glazing agents: Shellac, Gum arabic",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "161 kcal (674 kJ)",
      nutrition_energy_per100g: "459 kcal (1920 kJ)",
      nutrition_fat_per40g: "7g(of which saturates 4.2g)",
      nutrition_fat_per100g: "20g (of which saturates 12.1g)",
      nutrition_carbohydrate_per40g: "22.9g(of which sugars 20.6g)",
      nutrition_carbohydrate_per100g: "65.3g(of which sugars 58.9g)",
      nutrition_fibre_per40g: "1.1g",
      nutrition_fibre_per100g: "3.2g",
      nutrition_protein_per40g: "1g",
      nutrition_protein_per100g: "2.8g",
      nutrition_salt_per40g: "0.09g",
      nutrition_salt_per100g: "0.25g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
    },
  
  
  
    {
      id: 2,
      head: "Fruit, nut & seed mix",
      img: Fruitnutseedmix,
      content:
        "A delicious blend of raisins, cranberries, almonds, pumpkin and sunflower seeds.",
      storage: " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A delicious blend of raisins, cranberries, almonds, pumpkin and sunflower seeds.",
      ingredients: "Flame raisins (30%) (Raisins, Sunflower Oil), Dried sweetened cranberries (20%) (Sugar, Cranberries, Sunflower oil), ALMONDS (20%), Pumpkin seeds (15%), Sunflower seeds (15%)",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "162 kcal (678 kJ)",
      nutrition_energy_per100g: "464 kcal (1941 kJ)",
      nutrition_fat_per40g: "9.1g(of which saturates 1g)",
      nutrition_fat_per100g: "26g(of which saturates 2.9g)",
      nutrition_carbohydrate_per40g: "14.8g(of which sugars 12.3g)",
      nutrition_carbohydrate_per100g: "42.2g(of which sugars 35g)",
      nutrition_fibre_per40g: "2g",
      nutrition_fibre_per100g: "5.6g",
      nutrition_protein_per40g: "	4.3g",
      nutrition_protein_per100g: "12.4g",
      nutrition_salt_per40g: "0.02g",
      nutrition_salt_per100g: "0.06g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "May contain nuts",
      G: "",
      W: "",
    },
  
  
  
    {
      id: 3,
      head: "Super Seed & Fruit Mix",
      img: SuperSeedFruitMix,
      content:
        "A tasty mix of Raisins, Goji berries, Pumpkin Seeds & Sunflower Seeds.",
      storage: " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A tasty mix of Raisins, Goji berries, Pumpkin Seeds & Sunflower Seeds.",
      ingredients: "Golden raisins (40%) (Raisins, Sunflower oil, Preservative: SULPHUR DIOXIDE), Dried goji berries (20%), Pumpkin seeds (20%), Raisins (10%) (Raisins, Sunflower oil), Sunflower seeds (10%).",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "	158 kcal (661 kJ)",
      nutrition_energy_per100g: "394 kcal (1648 kJ)",
      nutrition_fat_per40g: "	5.92g(of which saturates 0.9g)",
      nutrition_fat_per100g: "14.8g (of which saturates 2.2g)",
      nutrition_carbohydrate_per40g: "20.2g (of which sugars 17.7g)",
      nutrition_carbohydrate_per100g: "50.4g (of which sugars 44.2g)",
      nutrition_fibre_per40g: "2.2g",
      nutrition_fibre_per100g: "5.4g",
      nutrition_protein_per40g: "	4.8g",
      nutrition_protein_per100g: "11.9g",
      nutrition_salt_per40g: "0.09g",
      nutrition_salt_per100g: "0.23g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
    },
  
  
    {
      id: 4,
      head: "Chocolate Chip Oat Biscuits",
      img: ChocolateChipOatBiscuits,
      content:
        "A double helping in each pack of these crisp wholegrain oat biscuits with real dark chocolate chips. Perfect with a cup of tea...",
      storage: " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A double helping in each pack of these crisp wholegrain oat biscuits with real dark chocolate chips. Perfect with a cup of tea and maybe a little dunk.",
      ingredients: "Wholegrain OATS (59%), Dark Chocolate Chips (9%) (Sugar, Cocoa Mass, Cocoa Butter, Emulsifier: SOYA Lecithin, Natural Vanilla Flavouring), Palm Oil, Demerara Sugar, Dark Chocolate Powder (5%) (Sugar, Cocoa Mass, Fat Reduced Cocoa Powder), Dietary Fibres, Partially Inverted Syrup, Potato Starch, BARLEY Malt Syrup, Raising Agents: Ammonium Bicarbonate, Sodium Bicarbonate; Sea Salt, Natural Flavouring.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "	92 kcal (385 kJ)",
      nutrition_energy_per100g: "460 kcal (1925 kJ)",
      nutrition_fat_per40g: "	3.58g(of which saturates 1.6g)",
      nutrition_fat_per100g: "17.9g (of which saturates 8g)",
      nutrition_carbohydrate_per40g: "12.7g (of which sugars 3.6g)",
      nutrition_carbohydrate_per100g: "63.5g (of which sugars 18.2g)",
      nutrition_fibre_per40g: "1.1g",
      nutrition_fibre_per100g: "5.4g",
      nutrition_protein_per40g: "1.6g",
      nutrition_protein_per100g: "8.1g",
      nutrition_salt_per40g: "0.18g",
      nutrition_salt_per100g: "0.9g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "Wheat free",
    },
  
  
    {
      id: 5,
      head: "Coconut & Chia Oat Biscuits",
      img: CoconutChiaOatBiscuits,
      content:
        "Two delicious wholegrain oat biscuits made with toasted desiccated coconut and chia seeds. Perfect snack anytime of the day.",
      storage: " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Two delicious wholegrain oat biscuits made with toasted desiccated coconut and chia seeds. Perfect snack anytime of the day.",
      ingredients: "Wholegrain OATS (66%), Sustainable Palm Fruit Oil, Demerara Sugar, Dietary Fibre (Inulin), Partially Inverted Refiners Syrup; Lyles Golden Syrup, Tapioca Starch, Toasted Desiccated Coconut (2%), Chia Seeds (Salvia Hispanica) (2%), BARLEY Malt Syrup, Raising Agents (Ammonium Bicarbonate, Sodium Bicarbonate), Sea Salt, Natural Flavouring.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "	45 kcal (188 kJ)",
      nutrition_energy_per100g: "449 kcal (1879 kJ)",
      nutrition_fat_per40g: "	1.7g (of which saturates 0.7g)",
      nutrition_fat_per100g: "17.2g(of which saturates 7g)",
      nutrition_carbohydrate_per40g: "6g(of which sugars 1.2g)",
      nutrition_carbohydrate_per100g: "60.3g(of which sugars 12.4g)",
      nutrition_fibre_per40g: "0.9g",
      nutrition_fibre_per100g: "8.7g",
      nutrition_protein_per40g: "0.9g",
      nutrition_protein_per100g: "8.9g",
      nutrition_salt_per40g: "0.09g",
      nutrition_salt_per100g: "0.9g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
    },
    {
      id: 6,
      head: "Salt & Pepper Flavour Soya & Potato Snacks",
      img: SaltPepperFlavourSoyaPotatoSnacks,
      content:
        "Crisp soya and potato snacks delicately seasoned with salt and pepper - everyone's favourite classic flavour pairing. Perfect to grab for a snack..",
      storage: " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Crisp soya and potato snacks delicately seasoned with salt and pepper - everyone's favourite classic flavour pairing. Perfect to grab for a snack to keep you going throughout the day.",
      ingredients: "Soya Pieces (Defatted Soya Flour 31%), Tapioca Starch, Salt) Potato Pieces (Dehydrated Potato (15%), Potato Starch (5%), Rice Flour, Salt), Sunflower Oil, Salt & Pepper Flavouring (Rice Flour, Sugar, Salt, Onion Powder, Spices, Yeast Extract, Garlic Powder, Natural Flavourings, Sunflower Oil, Antioxidant: Rosemary Extract), Black Pepper Extract",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "89 kcal (372 kJ)",
      nutrition_energy_per100g: "404 kcal (1690 kJ)",
      nutrition_fat_per40g: "	0.44g (of which saturates 0.04g)",
      nutrition_fat_per100g: "2g(of which saturates 0.2g)",
      nutrition_carbohydrate_per40g: "2.8g(of which sugars 0.2g)",
      nutrition_carbohydrate_per100g: "12.8g(of which sugars 0.7g)",
      nutrition_fibre_per40g: "0.4g",
      nutrition_fibre_per100g: "1.7g",
      nutrition_protein_per40g: "0.9g",
      nutrition_protein_per100g: "3.9g",
      nutrition_salt_per40g: "0.092g",
      nutrition_salt_per100g: "0.42g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "Wheat free",
    },
    {
      id: 7,
      head: "Paprika Flavour Soya & Potato Snacks",
      img: PaprikaFlavourSoyaPotatoSnacks,
      content:
        "Paprika adds a bit of spice to our crisp soya and potato snacks. These satisfyingly crisp snacks have a delicate seasoning that is..",
      storage: " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Paprika adds a bit of spice to our crisp soya and potato snacks. These satisfyingly crisp snacks have a delicate seasoning that is tangy but not too hot",
      ingredients: "Soya Pieces (Defatted SOYA Flour, Tapioca Starch, Salt), Potato Pieces (Dehydrated Potato, Potato Starch, Rice Flour, Salt), Paprika Flavour (Sugar, Yeast Extract, Onion Powder, Flavouring (contains CELERY), Salt, Tomato Powder, Colour: Paprika Extract; Acidity Regulator: Malic Acid; Sunflower Oil), Sunflower Oil, Fine Milled Flaxseed.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "94 kcal (393 kJ)",
      nutrition_energy_per100g: "427 kcal (1787 kJ)",
      nutrition_fat_per40g: "1.89g(of which saturates 0.15g)",
      nutrition_fat_per100g: "8.6g(of which saturates 0.7g)",
      nutrition_carbohydrate_per40g: "14.6g(of which sugars 0.8g)",
      nutrition_carbohydrate_per100g: "66.2g(of which sugars 3.5g)",
      nutrition_fibre_per40g: "1.6g",
      nutrition_fibre_per100g: "	7.3g",
      nutrition_protein_per40g: "4g",
      nutrition_protein_per100g: "18.1g",
      nutrition_salt_per40g: "0.33g",
      nutrition_salt_per100g: "1.5g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "Wheat free",
    },
    { 
      id: 8,
      head: "Cheese & Onion Flavour Soya & Potato Snack",
      img: CheeseOnionFlavourSoyaPotatoSnack,
      content:
        "Crisp and crunchy soya and potato snacks, seasoned with a tangy cheese and onion flavour. Perfect to grab & fill you up when..",
      storage: " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Paprika adds a bit of spice to our crisp soya and potato snacks. These satisfyingly crisp snacks have a delicate seasoning that is tangy but not too hot",
      ingredients: "SOYA & Potato Pieces (SOYA Flour, Tapioca Starch, Dehydrated Potato, Potato Starch, Rice Flour, Salt), Sunflower Oil, Cheese & Onion Flavouring (Onion Powder, Maltodextrin, Sugar, Rice Flour, Yeast Extract, Salt, Dextrose Monohydrate, Natural Flavouring, Acidity Regulator: Citric Acid, Spice (White Pepper), Colour: Paprika Extract).",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "89 kcal (372 kJ)",
      nutrition_energy_per100g: "376 kcal (1573 kJ)",
      nutrition_fat_per40g: "2.3g(of which saturates 0.2g)",
      nutrition_fat_per100g: "10.4g(of which saturates 1.1g)",
      nutrition_carbohydrate_per40g: "12.2g(of which sugars 1.1g)",
      nutrition_carbohydrate_per100g: "55.6g (of which sugars 4.8g)",
      nutrition_fibre_per40g: "1.8g",
      nutrition_fibre_per100g: "	8.2g",
      nutrition_protein_per40g: "4g",
      nutrition_protein_per100g: "18.4g",
      nutrition_salt_per40g: "0.3g",
      nutrition_salt_per100g: "1.35g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "Gluten free",
      W: "Wheat free",
    },
    {
      id: 9,
      head: "Ginger Oat Biscuits",
      img: GingerOatBiscuits,
      content:
        "These wholegrain oat biscuits are subtly flavoured with ginger, not overpowering at all...in fact just perfect. Very crumbly and utterly delicious.",
      storage: " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "These wholegrain oat biscuits are subtly flavoured with ginger, not overpowering at all...in fact just perfect. Very crumbly and utterly delicious.",
      ingredients: "Wholegrain OATS (64%), Demerara Sugar, Palm Oil, Stem Ginger (6.4%) (Stem Ginger, Sugar), Dietary Fibre, Potato Starch, Ground Ginger, Partially Inverted Sugar Syrup, Raising Agents: Ammonium Bicarbonate, Sodium Bicarbonate; BARLEY Malt Syrup, Sea Salt.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "88 kcal (368 kJ)",
      nutrition_energy_per100g: "440 kcal (1841 kJ)",
      nutrition_fat_per40g: "2.88g(of which saturates 1.18g)",
      nutrition_fat_per100g: "14.4g(of which saturates 5.9g)",
      nutrition_carbohydrate_per40g: "13.2g(of which sugars 3.4g)",
      nutrition_carbohydrate_per100g: "65.9g (of which sugars 17.2g)",
      nutrition_fibre_per40g: "1.2g",
      nutrition_fibre_per100g: "5.9g",
      nutrition_protein_per40g: "1.6g",
      nutrition_protein_per100g: "8.1g",
      nutrition_salt_per40g: "0.182g",
      nutrition_salt_per100g: "0.91g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "Wheat free",
    },
    {
      id: 10,
      head: "Berry Oat Biscuits",
      img: BerryOatBiscuits,
      content:
        "As with the other wholegrain oat biscuits there are two of these but definitely too good to share. Made with wholegrain oats, dried...",
      storage: " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "As with the other wholegrain oat biscuits there are two of these but definitely too good to share. Made with wholegrain oats, dried cranberries, raspberry puree pieces, a true berry treat for the palette.",
      ingredients: "Wholegrain OATS (66%), Palm Oil, Demerara Sugar, Dietary Fibre, Partially Inverted Syrup, Cranberries (3%) (Cranberries, Sugar, Sunflower Oil), Potato Starch, BARLEY Malt Syrup, Raising Agents: Ammonium Bicarbonate, Sodium Bicarbonate; Raspberry Puree Pieces (1%) (Raspberry, Apple Juice Concentrate, Apple Powder, Citrus Pectin), Sea Salt, Natural Flavouring.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per40g: "85 kcal (356 kJ)",
      nutrition_energy_per100g: "425 kcal (1778 kJ)",
      nutrition_fat_per40g: "3.06g(of which saturates 1.18g)",
      nutrition_fat_per100g: "15.3g (of which saturates 5.9g)",
      nutrition_carbohydrate_per40g: "13g (of which sugars 3.1g)",
      nutrition_carbohydrate_per100g: "64.8g(of which sugars 15.7g)",
      nutrition_fibre_per40g: "1.4g",
      nutrition_fibre_per100g: "7.1g",
      nutrition_protein_per40g: "1.5g",
      nutrition_protein_per100g: "7.5g",
      nutrition_salt_per40g: "0.17g",
      nutrition_salt_per100g: "0.85g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
    },
  ]

  const [selectedCard, setSelectedCard] = useState(null);
  const handleOpen = (card) => {
    setSelectedCard(card);
  };


  const [basicActive, setBasicActive] = useState("tab2");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  //for counter

  // Increment and Decrement handlers based on card index
  const [counters, setCounters] = useState(snacks.map(() => 0));
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




  return (
    <div style={{ backgroundColor: "#ffffff" }}>
    <div className="container">
      <p className="select_meals_count">
        {" "}
        0 of 28 meals selected for breakfast{" "}
      </p>

      <div className="row">
        {snacks.map((card, index) => (
          <div
            key={card.id}
            className="col-lg-3 col-md-6 col-sm-6 core_pack_cards"
          >
            {/* Card  */}
            <h5
              className="meal_title"
              onClick={() => handleOpen(card)}
              data-toggle="modal"
              data-target="#snackmealsmodal"
            >
              {card?.head}
            </h5>
            <div
              className="text-center"
              onClick={() => handleOpen(card)}
              data-toggle="modal"
              data-target="#snackmealsmodal"
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
              data-target="#snackmealsmodal"
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
        ))}
      </div>
    </div>

    {/* Bootstrap Modal */}

    <div class="modal fade" id="snackmealsmodal">
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
  )
}

export default CoreSnackMeal
