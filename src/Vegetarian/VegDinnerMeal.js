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
import { useParams } from "react-router-dom";

//images
import MacaroniCheese from "../images/dinner/macaroni_cheese_2_sm.jpg";
import CottagePie from "../images/dinner/cottage_pie_tray_lg.jpg";
import Lasagne from "../images/dinner/veg_lasagne_23_sm.jpg";
import MincedLambHotpot from "../images/dinner/macaroni_cheese_2_sm.jpg";
import VegetarianLasagne from "../images/dinner/veg_lasagne_23_sm.jpg";
import CousCousChicken from "../images/dinner/cous_cous_chicken_sm.jpg";
import VegetableRavioli from "../images/dinner/veg_ravioli_sm.jpg";
import TomatoPennePasta from "../images/dinner/tomato_penne_pasta_sm.jpg";
import PorkTenderloinCreamyMash from "../images/dinner/pork_tenderloin_creamy_mash_sm.jpg";
import CantonesePorkRice from "../images/dinner/cantonese_pork_rice_sm.jpg";
import ChilliRice from "../images/dinner/chilli_rice_sm.jpg";
import ItalianTunaSalad from "../images/dinner/italian_tuna_salad_sm.jpg";
import Paella from "../images/dinner/paella_23_sm.jpg";
import SpinachRicottaCannelloni from "../images/dinner/spinach_ricotta_cannelloni_sm.jpg";
import BasqueChickenRice from "../images/dinner/basque_chicken_rice_sm.jpg";
import CoconutChickenCurry from "../images/dinner/Coconut_Chicken_Curry_sm.jpg";
import ChickenTomatoCurry from "../images/dinner/Chicken_And_Tomato_Curry_sm.jpg";
import MoroccanStyleBeanCasserole from "../images/dinner/Moroccan_Bean_sm.jpg";
import CauliflowerLentilDhal from "../images/dinner/Cauliflower_and_Lentil_Dhal_sm.jpg";
import ChickenPastaArrabiata from "../images/dinner/Chicken_Pasta_Arrabiata_sm.jpg";
import BeefKaleOnePot from "../images/dinner/Beef_And_Kale_One_Pot_sm.jpg";
import VegetarianChilli from "../images/dinner/veg_lasagne_23_sm.jpg";
import MoroccanStyleTunaPastaBake from "../images/dinner/Moroccan_Tuna_sm.jpg";

const VegDinnerMeal = () => {
  const vegdinnermeal = [
    {
      id: 1,
      head: "Macaroni Cheese",
      img: MacaroniCheese,
      content:
        "Al dente tubes of pasta, coated in a moreish creamy, rich and tasty cheese sauce with a delicate taste of mustard, just purely...",
      storage:
        "  Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Al dente tubes of pasta, coated in a moreish creamy, rich and tasty cheese sauce with a delicate taste of mustard, just purely to enhance the cheese flavour more. It's hard to believe that you can still eat macaroni and achieve your goals!",
      ingredients:
        "Water, Cooked Macaroni Pasta (17%) (Durum WHEAT Semolina, Emulsifier (Mono- and Diglycerides of Fatty Acids), Rapeseed Oil), Extra Mature Cheddar Cheese (12%) (MILK), Double Cream (MILK), Cornflour, Salt, Mustard Powder, Ground White Pepper.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per270g: "361 kcal (1510 kJ)",
      nutrition_energy_per100g: "130 kcal (544 kJ)",
      nutrition_fat_per270g: "14g(of which saturates 9g)",
      nutrition_fat_per100g: "5g(of which saturates 3.3g)",
      nutrition_carbohydrate_per270g: "38.3g(of which sugars 2.5g)",
      nutrition_carbohydrate_per100g: "13.6g(of which sugars 0.9g)",
      nutrition_fibre_per270g: "3.7g",
      nutrition_fibre_per100g: "1.4g",
      nutrition_protein_per270g: "15g",
      nutrition_protein_per100g: "5.6g",
      nutrition_salt_per270g: "0.95g",
      nutrition_salt_per100g: "0.35g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
      gender: "male",
      price: "369.00",
    },

    {
      id: 2,
      head: "Cottage Pie",
      img: CottagePie,
      content:
        "Tender braised beef mince cooked in beef stock gravy with onions and carrots, topped with a buttery mash potato topping. Perfect in the microwave or transferred into an oven able dish and baked in the oven to caramelize topping. A great comfort food classic when you feel the need for simple flavours.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Tender braised beef mince cooked in beef stock gravy with onions and carrots, topped with a buttery mash potato topping. Perfect in the microwave or transferred into an oven able dish and baked in the oven to caramelize topping. A great comfort food classic when you feel the need for simple flavours.",
      ingredients:
        "Mashed Potato (50%) (Potato, Butter (MILK), Salt), Beef (20%), Water, Onion (6%), Carrot, Beef Stock (Beef, Yeast Extract, Natural Flavouring, Salt, Tomato Paste, Molasses, Lemon Juice Concentrate, Onion Powder), Cornflour, Worcester Sauce (Water, Spirit Vinegar, Sugar, Salt, Tamarind Paste, Onion Powder, Garlic Powder, Lemon Concentrate, Ground Ginger, Ground Cloves, Chilli Powder), Tomato Puree, Cane Molasses, Yeast Extract, Ground Black Pepper, Dried Thyme.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per270g: "294 kcal (1230 kJ)",
      nutrition_energy_per100g: "113 kcal (473 kJ)",
      nutrition_fat_per270g: "13.4g(of which saturates 7.6g)",
      nutrition_fat_per100g: "5.1g(of which saturates 2.9g)",
      nutrition_carbohydrate_per270g: "23.8g(of which sugars 2.5g)",
      nutrition_carbohydrate_per100g: "9.1g(of which sugars 1g)",
      nutrition_fibre_per270g: "5g",
      nutrition_fibre_per100g: "1.9g",
      nutrition_protein_per270g: "	12.2g",
      nutrition_protein_per100g: "4.7g",
      nutrition_salt_per270g: "1.34g",
      nutrition_salt_per100g: "0.51g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: " Wheat free",
      gender: "female",
      price: "369.00",
    },

    {
      id: 3,
      head: "Lasagne",
      img: Lasagne,
      content:
        "Lasagne sheets layered with a rich beef, tomato and herb ragu, evenly layered with a light and creamy sauce. Perfect heated in the microwave or transferred into an oven able tray and baked in the oven ...totally delicious! A top seller every month with our customers.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Lasagne sheets layered with a rich beef, tomato and herb ragu, evenly layered with a light and creamy sauce. Perfect heated in the microwave or transferred into an oven able tray and baked in the oven ...totally delicious! A top seller every month with our customers.",
      ingredients:
        "Water, Beef (20%), Cooked Pasta (11%) (Durum WHEAT Semolina, Water, EGG Powder), Onion, Tomato Puree, Double Cream (MILK), Carrot, Tomatoes, Cornflour, Red Wine, Mature Cheddar Cheese (MILK), Rapeseed Oil, Beef Stock (Beef, Yeast Extract, Natural Flavouring, Salt, Tomato Paste, Molasses, Lemon Juice Concentrate, Onion Powder), Salt, Garlic Puree, Sugar, Ground White Pepper, Ground Black Pepper, Rosemary, Oregano.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per270g: "364 kcal (1523 kJ)",
      nutrition_energy_per100g: "135 kcal (565 kJ)",
      nutrition_fat_per270g: "17g(of which saturates 9.4g)",
      nutrition_fat_per100g: "6.2g(of which saturates 3.5g)",
      nutrition_carbohydrate_per270g: "	33.7g(of which sugars 6.8g)",
      nutrition_carbohydrate_per100g: "12.8g(of which sugars 2.5g)",
      nutrition_fibre_per270g: "3.3g",
      nutrition_fibre_per100g: "1.2g",
      nutrition_protein_per270g: "14g",
      nutrition_protein_per100g: "5.2g",
      nutrition_salt_per270g: "	1.35g",
      nutrition_salt_per100g: "0.5g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "",
      gender: "male",
      price: "369.00",
    },

    {
      id: 4,
      head: "Minced Lamb Hotpot",
      img: MincedLambHotpot,
      content:
        "Tender lamb mince braised with onions, carrots, and swede cooked in a tomato lamb stock with delicate herbs like sage, rosemary and thyme. Topped with fresh thinly sliced potato.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Tender lamb mince braised with onions, carrots, and swede cooked in a tomato lamb stock with delicate herbs like sage, rosemary and thyme. Topped with fresh thinly sliced potato.",
      ingredients:
        "Potato (29%), Lamb (25%), Water, Onion (9%), Carrot (8%), Swede (3%), Cornflour, Tomato Puree, Lamb Stock (Lamb, Yeast Extract, Water, Sugar, Cornflour, Salt, Concentrated Onion Juice, Rosemary Oil, Thyme Oil), Salt, Sugar, Worcester Sauce (Water, Spirit Vinegar, Sugar, Salt, Tamarind Paste, Onion Powder, GARLIC Powder, Lemon concentrate, Ground Ginger, Ground Cloves, Chilli Powder), Rosemary, Ground Black Pepper.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per270g: "216 kcal (904 kJ)",
      nutrition_energy_per100g: "81 kcal (339 kJ)",
      nutrition_fat_per270g: "6.3g(of which saturates 3.2g)",
      nutrition_fat_per100g: "2.4g(of which saturates 1.2g)",
      nutrition_carbohydrate_per270g: "	23.6g(of which sugars 4.9g)",
      nutrition_carbohydrate_per100g: "8.9g(of which sugars 1.9g)",
      nutrition_fibre_per270g: "1.4g",
      nutrition_fibre_per100g: "0.5g",
      nutrition_protein_per270g: "14g",
      nutrition_protein_per100g: "5.3g",
      nutrition_salt_per270g: "	1.6g",
      nutrition_salt_per100g: "0.59g",
      count: "0",
      V: "",
      N: "",
      G: "Gluten free",
      W: "",
      gender: "female",
      price: "369.00",
    },

    {
      id: 5,
      head: "Vegetarian Lasagne",
      img: VegetarianLasagne,
      content:
        "Vegetarian classic, no need to miss out with our Vegetarian lasagne. Sit back and enjoy our favourite Italian dish. BRAND NEW MENU ITEM!",
      storage:
        "  Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Vegetarian classic, no need to miss out with our Vegetarian lasagne. Sit back and enjoy our favourite Italian dish. BRAND NEW MENU ITEM! It's so new we haven't had time to take a picture yet.",
      ingredients:
        "Water, tomato pulp with juice 16% (tomatoes, tomato juice), pasta 8.2% (durum WHEAT semolina, water, EGGS), carrots 6.9%, pre-cooked sweet potatoes, onions, double tomato paste, pre-cooked coral lentils, CREAM, starch, SOYA protein, rapeseed oil, Italian hard cheese 1.5% (cow's MILK, salt, microbial coagulant), salt, virgin olive oil, aromatic plants, WHEAT fibre, natural flavouring, natural onion flavouring, natural garlic flavouring.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "336 kcal (1406 kJ)",
      nutrition_energy_per100g: "96 kcal (402 kJ)",
      nutrition_fat_per300g: "13g(of which saturates 4.6g)",
      nutrition_fat_per100g: "3.6g(of which saturates 1.3g)",
      nutrition_carbohydrate_per300g: "36g(of which sugars 9.1g)",
      nutrition_carbohydrate_per100g: "10g (of which sugars 2.6g)",
      nutrition_fibre_per300g: "9.1g",
      nutrition_fibre_per100g: "2.6g",
      nutrition_protein_per300g: "15g",
      nutrition_protein_per100g: "4.2g",
      nutrition_salt_per300g: "2.3g",
      nutrition_salt_per100g: "0.66g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
      gender: "male",
      price: "369.00",
    },

    {
      id: 6,
      head: "Cous Cous Chicken",
      img: CousCousChicken,
      content:
        "A classic French dish done the Diet Chef way. Tender chicken and tasty cous cous with a hearty mix of vegetables and chickpeas.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A classic French dish done the Diet Chef way. Tender chicken and tasty cous cous with a hearty mix of vegetables and chickpeas.",
      ingredients:
        "Water, pre-cooked cured chicken meat 21.1% (chicken meat (French origin), water, manioc starch, rice starch, salt), courgette 10%, carrot 10%, pre-cooked chickpea 7.1% (water, chickpea), onion 6.9%, BULGER (GLUTEN) 5%, concentrated tomato 2.8%, extra virgin olive oil, flax fibre, salt, Ras-el-Hanout 0.2%, turmeric powder 0.1%, ground cumin.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "270 kcal (1130 kJ)",
      nutrition_energy_per100g: "90 kcal (377 kJ)",
      nutrition_fat_per300g: "11g(of which saturates 1.9g)",
      nutrition_fat_per100g: "3.7g(of which saturates 0.6g)",
      nutrition_carbohydrate_per300g: "22g(of which sugars 4.6g)",
      nutrition_carbohydrate_per100g: "7.6g(of which sugars 1.6g)",
      nutrition_fibre_per300g: "4.8g",
      nutrition_fibre_per100g: "1.6g",
      nutrition_protein_per300g: "17g",
      nutrition_protein_per100g: "5.8g",
      nutrition_salt_per300g: "1.8g",
      nutrition_salt_per100g: "0.62g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
      gender: "female",
      price: "369.00",
    },

    {
      id: 7,
      head: "Vegetable Ravioli",
      img: VegetableRavioli,
      content:
        "A perfect vegetarian dish with a beautiful mix of ravioli and sunshine vegetables. Bring the sun home whenever you like.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A perfect vegetarian dish with a beautiful mix of ravioli and sunshine vegetables. Bring the sun home whenever you like.",
      ingredients:
        "Precooked ravioli 36% [(durum WHEAT semolina, water, EGG, WHEAT crumbs, peppers 2.1%, onions 1.7%, tomatoes 1.7%, sunflower oil, potato flakes (dehydrated potatoes, spice extract), aubergine 0.8%, RICOTTA, salt, basil, WHEAT fibre, dehydrated garlic), water, rapeseed oil, salt], water, red and green peppers 6.6%, tomato paste 5.7%, carrots 5%, extra virgin olive oil, onion 1.6%, potato starch, plantain fibre, sugar, garlic powder, salt, pepper, oregano, parsley, basil, paprika.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "384 kcal (1607 kJ)",
      nutrition_energy_per100g: "127 kcal (531 kJ)",
      nutrition_fat_per300g: "17g(of which saturates 1.8g)",
      nutrition_fat_per100g: "5.6g(of which saturates 0.6g)",
      nutrition_carbohydrate_per300g: "45g(of which sugars 6g)",
      nutrition_carbohydrate_per100g: "15g(of which sugars 2g)",
      nutrition_fibre_per300g: "7.5g",
      nutrition_fibre_per100g: "2.5g",
      nutrition_protein_per300g: "9g",
      nutrition_protein_per100g: "3g",
      nutrition_salt_per300g: "1.23g",
      nutrition_salt_per100g: "0.41g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
      gender: "male",
      price: "369.00",
    },

    {
      id: 8,
      head: "Tomato Penne Pasta",
      img: TomatoPennePasta,
      content:
        "A beautifully prepared Penne pasta cooked in a zingy tomato sauce and with kidney beans to keep you feeling full for longer.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A beautifully prepared Penne pasta cooked in a zingy tomato sauce and with kidney beans to keep you feeling full for longer.",
      ingredients:
        "Prepared EGG white cereal speciality 38% (water, durum WHEAT semolina, EGG white powder, rapeseed oil, salt, spirit vinegar), tomato pulp in juice 17% (tomatoes, tomato juice), water, soaked kidney beans 6.7%, carrots, onions, maize starch, virgin olive oil, basil 0.6%, salt, sugar, natural flavouring, natural garlic flavouring, pepper, natural basil flavouring with other natural flavourings.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "	255 kcal (1067 kJ)",
      nutrition_energy_per100g: "89 kcal (372 kJ)",
      nutrition_fat_per300g: "5.1g(of which saturates 0.7g)",
      nutrition_fat_per100g: "1.8g(of which saturates 0.3g)",
      nutrition_carbohydrate_per300g: "36g(of which sugars 5.1g)",
      nutrition_carbohydrate_per100g: "13g(of which sugars 1.8g)",
      nutrition_fibre_per300g: "7.4g",
      nutrition_fibre_per100g: "2.6g",
      nutrition_protein_per300g: "12g",
      nutrition_protein_per100g: "4.2g",
      nutrition_salt_per300g: "1.9g",
      nutrition_salt_per100g: "0.68g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
      gender: "female",
      price: "369.00",
    },

    {
      id: 9,
      head: "Pork Tenderloin & Creamy Mash",
      img: PorkTenderloinCreamyMash,
      content:
        "Our pork and tenderloin with mash will leave you feeling more than satisfied. Served with a creamy Dijon sauce.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Our pork and tenderloin with mash will leave you feeling more than satisfied. Served with a creamy Dijon sauce.",
      ingredients:
        "Potatoes 43%, pork tenderloin 26% (pork tenderloin 20% (French origin), water, manioc starch, salt), water, onion 3%, single CREAM 1.5%, Dijon and traditional MUSTARDS 0.9% (water, MUSTARD seed, vinegar, salt), BUTTER 0.7%, rapeseed oil, salt, potato starch, nutmeg, plantain fibre, dehydrated onion, parsley 0.02%, pepper, turmeric.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "236 kcal (987 kJ)",
      nutrition_energy_per100g: "79 kcal (331 kJ)",
      nutrition_fat_per300g: "8.1g(of which saturates 3.6g)",
      nutrition_fat_per100g: "2.7g(of which saturates 1.2g)",
      nutrition_carbohydrate_per300g: "18.9g(of which sugars 3.3g)",
      nutrition_carbohydrate_per100g: "6.3g(of which sugars 1.1g)",
      nutrition_fibre_per300g: "3.6g",
      nutrition_fibre_per100g: "1.2g",
      nutrition_protein_per300g: "20.1g",
      nutrition_protein_per100g: "6.7g",
      nutrition_salt_per300g: "2.5g",
      nutrition_salt_per100g: "0.83g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "",
      gender: "male",
      price: "369.00",
    },

    {
      id: 10,
      head: "Cantonese Pork & Rice",
      img: CantonesePorkRice,
      content:
        "No need to miss out on takeaway favourites with our Cantonese Pork & Rice. Succulent pork Cantonese style with rice.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "No need to miss out on takeaway favourites with our Cantonese Pork & Rice. Succulent pork Cantonese style with rice.",
      ingredients:
        "Cantonese rice 44% (pre-cooked basmati rice, carrots, peas, SESAME oil, salt), cured and pre-cooked pork 20% (pork (French origin), water, starch, salt), water, soaked SOYA beans, onions, bamboo shoots 5%, SOY sauce (water, soy, WHEAT flour, salt), sugar, caramel 0.9% (sugar, water), starch, ginger 0.4%, double tomato paste, rapeseed oil, natural spice flavouring with other natural flavourings, salt, natural garlic flavouring.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "383 kcal (1602 kJ)",
      nutrition_energy_per100g: "128 kcal (536 kJ)",
      nutrition_fat_per300g: "9g(of which saturates 2.4g)",
      nutrition_fat_per100g: "3g(of which saturates 0.8g)",
      nutrition_carbohydrate_per300g: "	51g(of which sugars 8.1g)",
      nutrition_carbohydrate_per100g: "17g(of which sugars 2.7g)",
      nutrition_fibre_per300g: "6.6g",
      nutrition_fibre_per100g: "2.2g",
      nutrition_protein_per300g: "21g",
      nutrition_protein_per100g: "7g",
      nutrition_salt_per300g: "1.9g",
      nutrition_salt_per100g: "0.63g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "",
      gender: "female",
      price: "369.00",
    },

    {
      id: 11,
      head: "Chilli & Rice",
      img: ChilliRice,
      content:
        "A special evening meal prepared with lightly spiced beef mince and a generous portion of rice.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A special evening meal prepared with lightly spiced beef mince and a generous portion of rice.",
      ingredients:
        "Precooked rice 31% (white rice, water, rapeseed oil, salt), water, rehydrated kidney beans 16% (kidney beans, water), cooked beef 15% (beef (French origin), salt), tomato concentrate, red and green peppers 4%, onions, sugar, potato starch, manioc starch, Dijon MUSTARD (water, MUSTARD seeds, spirit vinegar, salt), cumin, salt, plantain fibre, natural flavour, paprika, Cayenne pepper.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "	373 kcal (1561 kJ)",
      nutrition_energy_per100g: "124 kcal (519 kJ)",
      nutrition_fat_per300g: "9.9g(of which saturates 3.8g)",
      nutrition_fat_per100g: "3.3g(of which saturates 1.2g)",
      nutrition_carbohydrate_per300g: "45g(of which sugars 5.7g)",
      nutrition_carbohydrate_per100g: "15g(of which sugars 1.9g)",
      nutrition_fibre_per300g: "6.3g",
      nutrition_fibre_per100g: "2.1g",
      nutrition_protein_per300g: "21g",
      nutrition_protein_per100g: "7.2g",
      nutrition_salt_per300g: "1.65g",
      nutrition_salt_per100g: "0.55g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
      gender: "male",
      price: "369.00",
    },

    {
      id: 12,
      head: "Italian Tuna Salad",
      img: ItalianTunaSalad,
      content:
        "A perfect lunchtime dish, no prep time needed. A perfectly balanced Tuna salad with a touch of vinegar to make the dish sing.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A perfect lunchtime dish, no prep time needed. A perfectly balanced Tuna salad with a touch of vinegar to make the dish sing.",
      ingredients:
        "Skipjack TUNA 23%, water, pre-cooked pasta 18% (durum WHEAT semolina, water, EGG white powder), tomatoes 14%, maize 7%, carrots 7%, rapeseed oil, spirit vinegar, green beans, potato starch, salt, basil 0.3%, plantain fibre, natural basil flavouring.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "348 kcal (1456 kJ)",
      nutrition_energy_per100g: "116 kcal (485 kJ)",
      nutrition_fat_per300g: "9.3g(of which saturates 0.8g)",
      nutrition_fat_per100g: "3.1g(of which saturates 0.28g)",
      nutrition_carbohydrate_per300g: "35.4g(of which sugars 3.9g)",
      nutrition_carbohydrate_per100g: "11.8g(of which sugars 1.3g)",
      nutrition_fibre_per300g: "5.7g",
      nutrition_fibre_per100g: "1.9g",
      nutrition_protein_per300g: "27.9g",
      nutrition_protein_per100g: "9.3g",
      nutrition_salt_per300g: "3.3g",
      nutrition_salt_per100g: "	1.1g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "",
      gender: "female",
      price: "369.00",
    },

    {
      id: 13,
      head: "Paella",
      img: Paella,
      content:
        "A favourite dish amongst the Diet Chef team, its always sunny with Paella. A hearty mix of rice, chicken and chorizo.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A favourite dish amongst the Diet Chef team, its always sunny with Paella. A hearty mix of rice, chicken and chorizo.",
      ingredients:
        "Precooked rice 45% (water, parboiled long rice), precooked salted chicken meat 19.7% (chicken meat (French origin), water, manioc starch, rice starch, salt), red pepper 11.1%, onion 10.6%, carrots 9.6%, peas 3%, chorizo 2, 2% (beef (French origin), sweet chilli, salt, hot chilli, pepper, garlic, oregano, caraway, coriander, cloves, pork (French origin), pork fat (French origin)), rapeseed oil, salt, turmeric powder, water, natural poultry flavouring.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "	344 kcal (1439 kJ)",
      nutrition_energy_per100g: "114 kcal (477 kJ)",
      nutrition_fat_per300g: "6.7g(of which saturates 1.5g)",
      nutrition_fat_per100g: "2.2g(of which saturates 0.5g)",
      nutrition_carbohydrate_per300g: "51g(of which sugars 4.8g)",
      nutrition_carbohydrate_per100g: "17g(of which sugars 2g)",
      nutrition_fibre_per300g: "3.7g",
      nutrition_fibre_per100g: "1.3g",
      nutrition_protein_per300g: "17g",
      nutrition_protein_per100g: "6g",
      nutrition_salt_per300g: "1.4g",
      nutrition_salt_per100g: "0.49g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "",
      gender: "male",
      price: "369.00",
    },

    {
      id: 14,
      head: "Spinach & Ricotta Cannelloni",
      img: SpinachRicottaCannelloni,
      content:
        "Spinach and ricotta cannelloni made with a simple tomato & herb sauce, super tasty and great for all seasons.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Spinach and ricotta cannelloni made with a simple tomato & herb sauce, super tasty and great for all seasons.",
      ingredients:
        "Cannelloni 32% [durum WHEAT semolina, water, spinach 4.9%, breadcrumbs (WHEAT flour, salt, yeast), ricotta 2.7% (CHEESE, MILK, salt), onions, CHEESE CURD, rapeseed oil, BUTTER, MILK powder, EGG white powder, salt, CHEESE, spices], water, tomatoes 13%, courgettes 12%, tomato pulp in juice 12%, tomato paste 6.6%, onions, wheat flour, olive oil, sugar, salt, spices and herbs.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "288 kcal (1205 kJ)",
      nutrition_energy_per100g: "96 kcal (402 kJ)",
      nutrition_fat_per300g: "7.8g(of which saturates 1.8g)",
      nutrition_fat_per100g: "2.6g(of which saturates 0.6g)",
      nutrition_carbohydrate_per300g: "41g(of which sugars 11g)",
      nutrition_carbohydrate_per100g: "14g(of which sugars 3.8g)",
      nutrition_fibre_per300g: "6.6g",
      nutrition_fibre_per100g: "2.2g",
      nutrition_protein_per300g: "9.9g",
      nutrition_protein_per100g: "3.3g",
      nutrition_salt_per300g: "1.89g",
      nutrition_salt_per100g: "0.6g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
      gender: "male",
      price: "369.00",
    },

    {
      id: 15,
      head: "Basque Chicken & Rice",
      img: BasqueChickenRice,
      content:
        "A delicious combination of chicken and rice, olives and peppers, a typical Mediterranean dish. Our recipe is from the Basque region of Spain.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A delicious combination of chicken and rice, olives and peppers, a typical Mediterranean dish. Our recipe is from the Basque region of Spain.",
      ingredients:
        "Precooked rice 40.3% (water, parboiled long rice, rapeseed oil, salt), precooked salted chicken meat 24.5% (chicken meat (French origin), water, manioc starch, rice starch, salt), water, courgette 4.4%, red pepper 3.5%, tomato 3.1%, onion 3.1%, concentrated tomato, olives 1.5%, kidney beans 1.5%, green pepper 1.5%, garlic puree, natural garlic flavour, sugar, salt, flax fibre, extra virgin olive oil, natural roast beef flavour, bay leaf, thyme 0.01%.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "347 kcal (1452 kJ)",
      nutrition_energy_per100g: "115 kcal (481 kJ)",
      nutrition_fat_per300g: "7.5g(of which saturates 1.3g)",
      nutrition_fat_per100g: "2.5g(of which saturates 0.4g)",
      nutrition_carbohydrate_per300g: "49g(of which sugars 3g)",
      nutrition_carbohydrate_per100g: "16g(of which sugars 1g)",
      nutrition_fibre_per300g: "2.4g",
      nutrition_fibre_per100g: "0.8g",
      nutrition_protein_per300g: "	19g",
      nutrition_protein_per100g: "6.5g",
      nutrition_salt_per300g: "1.7g",
      nutrition_salt_per100g: "0.57g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "",
      gender: "female",
      price: "369.00",
    },

    {
      id: 16,
      head: "Coconut Chicken Curry",
      img: CoconutChickenCurry,
      content:
        "Bursting with flavour and spice, one of our new favourites. Tender chicken breast and red pepper in a coconut style curry sauce with garlic, coriander, lemongrass turmeric, lime, chilli and brown basmati rice.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Bursting with flavour and spice, one of our new favourites. Tender chicken breast and red pepper in a coconut style curry sauce with garlic, coriander, lemongrass turmeric, lime, chilli and brown basmati rice.",
      ingredients:
        "Chicken Breast (29%) [Contains Salt], Water, Coconut Milk [Coconut Extract, Water], Onion, Red Pepper (8.5%), Brown Basmati Rice (6%), Water Chestnut, Ginger Puree, Garlic Puree, Cornflour, Brown Sugar, Coriander, Lemongrass, Basil, Ground Turmeric, MUSTARD Seeds, Lime Leaf, Lime Juice, Chilli Powder, Ground White Pepper.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "261 kcal (1092 kJ)",
      nutrition_energy_per100g: "97 kcal (406 kJ)",
      nutrition_fat_per300g: "8.6g(of which saturates 6.8g)",
      nutrition_fat_per100g: "3.2g(of which saturates 2.5g)",
      nutrition_carbohydrate_per300g: "20g(of which sugars 5.9g)",
      nutrition_carbohydrate_per100g: "7.4g(of which sugars 2.2g)",
      nutrition_fibre_per300g: "2.7g",
      nutrition_fibre_per100g: "1g",
      nutrition_protein_per300g: "24.6g",
      nutrition_protein_per100g: "9.1g",
      nutrition_salt_per300g: "1.19g",
      nutrition_salt_per100g: "0.44g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "Wheat free",
      gender: "male",
      price: "369.00",
    },

    {
      id: 17,
      head: "Chicken and Tomato Curry",
      img: ChickenTomatoCurry,
      content:
        "Authentic and satisfying. Tender chicken breast, cauliflower, coconut, coriander, ginger and garlic in a tomato based curry sauce with brown rice and quinoa.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Authentic and satisfying. Tender chicken breast, cauliflower, coconut, coriander, ginger and garlic in a tomato based curry sauce with brown rice and quinoa.",
      ingredients:
        "INGREDIENTS: Chopped Tomatoes (22%), Chicken Breast (18%) (Contains Salt), Water, Onion, Cauliflower (8%), Coconut Milk (Coconut Extract, Water), Brown Basmati Rice (6%), Low Fat Yoghurt (MILK), Honey, Quinoa, Cornflour, Vegetable Stock (Carrot Concentrate, Onion Concentrate, Leek), Coriander, Desiccated Coconut, Rapeseed Oil, Ginger Puree, Tomato Puree, Curry Powder, Garlic Puree, Lime Juice, Ground Black Pepper, Salt, Ground Cassia, Red Chilli Puree.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "266 kcal (1113 kJ)",
      nutrition_energy_per100g: "99 kcal (414 kJ)",
      nutrition_fat_per300g: "8.1g(of which saturates 5.4g)",
      nutrition_fat_per100g: "3g(of which saturates 2g)",
      nutrition_carbohydrate_per300g: "25.4g(of which sugars 10.5g)",
      nutrition_carbohydrate_per100g: "9.4g(of which sugars 3.9g)",
      nutrition_fibre_per300g: "7.6g",
      nutrition_fibre_per100g: "2.8g",
      nutrition_protein_per300g: "19.2g",
      nutrition_protein_per100g: "7.1g",
      nutrition_salt_per300g: "1.32g",
      nutrition_salt_per100g: "0.49g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "Wheat free",
      gender: "female",
      price: "369.00",
    },

    {
      id: 18,
      head: "Moroccan Style Bean Casserole",
      img: MoroccanStyleBeanCasserole,
      content:
        "A very filling vegetarian meal full of flavour. Cannellini beans, chickpeas, carrots and lentils in a Moroccan style casserole sauce with butternut squash..",
      storage: "Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A very filling vegetarian meal full of flavour. Cannellini beans, chickpeas, carrots and lentils in a Moroccan style casserole sauce with butternut squash, tomatoes, coriander, cumin, turmeric and chilli.",
      ingredients:
        "INGREDIENTS: Water, Chickpeas (14%), Butternut Squash (12%), Chopped Tomatoes (10%), Cannellini Beans (7%), Carrots, Onion, Dark Lentils (6%), Red Pepper, Honey, Cornflour, Olive Oil, Coriander, Salt, Tomato Puree, Ground Coriander, Ground Cumin, Ground Turmeric, Onion Powder, Lemon Juice, Ground Cassia, Ground Black Pepper, Chilli Powder.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per270g: "242 kcal (1013 kJ)	",
      nutrition_energy_per100g: "90 kcal (377 kJ)",
      nutrition_fat_per270g: "3.8g(of which saturates 1.1g)",
      nutrition_fat_per100g: "1.4g(of which saturates 0.4g)",
      nutrition_carbohydrate_per270g: "31.3g(of which sugars 9.7g)",
      nutrition_carbohydrate_per100g: "11.6g(of which sugars 3.6g)",
      nutrition_fibre_per270g: "14.6g",
      nutrition_fibre_per100g: "5.4g",
      nutrition_protein_per270g: "13.5g",
      nutrition_protein_per100g: "5g",
      nutrition_salt_per270g: "1.43g",
      nutrition_salt_per100g: "0.53g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "Wheat free",
      gender: "male",
      price: "369.00",
    },

    {
      id: 19,
      head: "Cauliflower & Lentil Dhal",
      img: CauliflowerLentilDhal,
      content:
        "A flavoursome and filling vegetarian dish. Cauliflower in a tomato and coconut spiced sauce with butternut squash, brown basmati rice, red lentils, garlic,",
      storage: "Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A flavoursome and filling vegetarian dish. Cauliflower in a tomato and coconut spiced sauce with butternut squash, brown basmati rice, red lentils, garlic, coriander, wild rice and dark speckled lentils.",
      ingredients:
        " Cauliflower (24%), Tomato, Water, Butternut Squash (12%), Coconut Milk (Coconut Extract, Water), Basmati Brown Rice (6%), Red Lentils (5.2%), Wild Rice (3%), Red Onion, Dark Speckled Lentils (2.2%), Honey, Olive Oil, Garlic Puree, Coriander, Ginger, Cornflour, Salt, Tomato Puree, Turmeric, Cumin, Garam Masala (Spices), White Pepper, Lime Juice, Chilli Flakes.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per270g: "270 kcal (1130 kJ)	",
      nutrition_energy_per100g: "100 kcal (418 kJ)",
      nutrition_fat_per270g: "	8.9g(of which saturates 4.9g)",
      nutrition_fat_per100g: "3.3g(of which saturates 1.8g)",
      nutrition_carbohydrate_per270g: "31.9g(of which sugars 9.5g)",
      nutrition_carbohydrate_per100g: "11.8g(of which sugars 3.5g)",
      nutrition_fibre_per270g: "	8.9g",
      nutrition_fibre_per100g: "3.3g",
      nutrition_protein_per270g: "11.1g",
      nutrition_protein_per100g: "4.1g",
      nutrition_salt_per270g: "1.03g",
      nutrition_salt_per100g: "0.38g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "Wheat free",
      gender: "female",
      price: "369.00",
    },

    {
      id: 20,
      head: "Chicken Pasta Arrabiata",
      img: ChickenPastaArrabiata,
      content:
        "Delicious and vibrant. Tender chicken breast in a spicy tomato sauce with garlic, basil, oregano, chilli and Penne pasta.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Delicious and vibrant. Tender chicken breast in a spicy tomato sauce with garlic, basil, oregano, chilli and Penne pasta.",
      ingredients:
        "INGREDIENTS: Tomato (33%), Water, Chicken Breast (16%) (Contains Salt), Penne Pasta (13%) (Durum WHEAT Semolina, Emulsifier: E471), Tomato Puree, Onion, Tomato Passata, Honey, Cornflour, Olive Oil, Garlic, Sugar, Red Chilli, Basil, Oregano, Black Pepper, Chilli Powder.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "275 kcal (1151 kJ)",
      nutrition_energy_per100g: "102 kcal (427 kJ)",
      nutrition_fat_per300g: "	4.9g(of which saturates 1.9g)",
      nutrition_fat_per100g: "1.8g(of which saturates 0.7g)",
      nutrition_carbohydrate_per300g: "37g(of which sugars 11.9g)",
      nutrition_carbohydrate_per100g: "13.7g(of which sugars 4.4g)",
      nutrition_fibre_per300g: "3.8g",
      nutrition_fibre_per100g: "	1.4g",
      nutrition_protein_per300g: "18.9g",
      nutrition_protein_per100g: "7g",
      nutrition_salt_per300g: "0.68g",
      nutrition_salt_per100g: "0.25g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "",
      gender: "male",
      price: "369.00",
    },

    {
      id: 21,
      head: "Beef and Kale One Pot",
      img: BeefKaleOnePot,
      content:
        "A very satisfying meal, full of flavour. Slow cooked beef chunks in a rich beef stock combined with potato, onion, Basmati rice, turtle beans, carrots, parsnips, swede, kale, garlic and Thyme.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A very satisfying meal, full of flavour. Slow cooked beef chunks in a rich beef stock combined with potato, onion, Basmati rice, turtle beans, carrots, parsnips, swede, kale, garlic and Thyme.",
      ingredients:
        "INGREDIENTS: Water, Beef (18%), Potato (11%), Onion, Basmati Rice (5.9%), Turtle Beans (5.8%), Carrot (4.8%), Parsnip (4.6%), Swede (4.4%), Beef Stock (Beef Stock, Water, Salt), Kale (2.8%), Tomato Puree, Cornflour, Red Wine, Rapeseed Oil, Worcester Sauce (Water, Spirit Vinegar, Sugar, Salt, Tamarind Paste, Onion Powder, Garlic Powder, Lemon Concentrate, Ground Ginger, Ground Cloves, Chilli Powder), Garlic Puree, Salt, Thyme, Black Pepper, Ground Bay.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "246 kcal (1029 kJ)",
      nutrition_energy_per100g: "91 kcal (381 kJ)",
      nutrition_fat_per300g: "3.8g(of which saturates 1.9g)",
      nutrition_fat_per100g: "1.4g(of which saturates 0.7g)",
      nutrition_carbohydrate_per300g: "23.8g(of which sugars 3.2g)",
      nutrition_carbohydrate_per100g: "8.8g(of which sugars 1.2g)",
      nutrition_fibre_per300g: "7.8g",
      nutrition_fibre_per100g: "	2.9g",
      nutrition_protein_per300g: "25.4g",
      nutrition_protein_per100g: "9.4g",
      nutrition_salt_per300g: "1.62g",
      nutrition_salt_per100g: "	0.6g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "Wheat free",
      gender: "female",
      price: "369.00",
    },

    {
      id: 22,
      head: "Vegetarian Chilli",
      img: VegetarianChilli,
      content:
        "Extremely tasty vegetarian chilli, hits of tomato, cumin, paprika and oregano cooked with a hunger beating portion of beans.",
      storage:
        "  Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Extremely tasty vegetarian chilli, hits of tomato, cumin, paprika and oregano cooked with a hunger beating portion of beans.",
      ingredients:
        "Water, Long Grain Rice (10%), Tomato, Pinto Beans (7%), Onion, Haricot Beans (7%), Cannellini Beans (6%), Kidney Beans (5%), Tomato Paste, Green Pepper, Red Pepper, Rapeseed Oil, Modified Maize Starch, Garlic Puree, Vegetable Stock (Partially Rehydrated Vegetables (Onion, Potato Flake, Leek), Yeast Extract, Salt, Carrot Concentrate, Sugar, Sunflower Oil, Lemon Juice Concentrate, Garlic), Salt, Ground Cumin, Coriander, Red Chilli Puree, Smoked Paprika, Ground Paprika, Dried Oregano, Chilli Powder, Black Pepper.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "235 kcal (983 kJ)",
      nutrition_energy_per100g: "119 kcal (498 kJ)",
      nutrition_fat_per200g: "6g(of which saturates 3.5g)",
      nutrition_fat_per100g: "3g(of which saturates 1.8g)",
      nutrition_carbohydrate_per200g: "32.1g(of which sugars 4.7g)",
      nutrition_carbohydrate_per100g: "16.3g (of which sugars 2.4g)",
      nutrition_fibre_per200g: "8.9g",
      nutrition_fibre_per100g: "4.5g",
      nutrition_protein_per200g: "8.8g",
      nutrition_protein_per100g: "4.5g",
      nutrition_salt_per200g: "1.05g",
      nutrition_salt_per100g: "0.53g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
      gender: "male",
      price: "369.00",
    },

    {
      id: 23,
      head: "Moroccan Style Tuna Pasta Bake",
      img: MoroccanStyleTunaPastaBake,
      content:
        "A meal bursting with flavour, aroma and spice. Tuna chunks in a Moroccan style sauce with tomatoes, red pepper, sweetcorn, kidney beans, cannellini beans, garlic, basil, cumin, coriander, chilli, paprika and Penne pasta.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A meal bursting with flavour, aroma and spice. Tuna chunks in a Moroccan style sauce with tomatoes, red pepper, sweetcorn, kidney beans, cannellini beans, garlic, basil, cumin, coriander, chilli, paprika and Penne pasta.",
      ingredients:
        "INGREDIENTS: Tuna Chunks (19%), Water, Chopped Tomatoes, Red Pepper (11%), Sweetcorn (10%), Kidney Beans, Cannellini Beans, Penne Pasta (3.7%) (Durum WHEAT Semolina, Emulsifier (Mono-and Diglycerides of Fatty Acids)), Onion, Cornflour, Olive Oil, Honey, Tomato Puree, Tomato Paste, Lemon Juice, Garlic Puree, Salt, Basil, Ground Cumin, Ground Coriander, Ground Black Pepper, Chilli, Paprika Extract.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per300g: "271 kcal (1134 kJ)",
      nutrition_energy_per100g: "100 kcal (418 kJ)",
      nutrition_fat_per300g: "7g(of which saturates 2.6g)",
      nutrition_fat_per100g: "2.6g(of which saturates 0.97g)",
      nutrition_carbohydrate_per300g: "19.2g(of which sugars 7.6g)",
      nutrition_carbohydrate_per100g: "7.1g(of which sugars 2.8g)",
      nutrition_fibre_per300g: "5.4g",
      nutrition_fibre_per100g: "2g",
      nutrition_protein_per300g: "30g",
      nutrition_protein_per100g: "11.1g",
      nutrition_salt_per300g: "1.51g",
      nutrition_salt_per100g: "0.56g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "",
      gender: "female",
      price: "369.00",
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
  const [counters, setCounters] = useState(vegdinnermeal.map(() => 0));
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

  const { gender, price } = useParams();

  // Filter cards based on the selected gender and price
  const filteredCards = vegdinnermeal.filter((card) => {
    // Check if card.gender is defined before using toLowerCase
    const cardGender = card.gender ? card.gender.toLowerCase() : "";

    return cardGender === gender.toLowerCase() && card.price === price;
  });

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <p className="select_meals_count">
          {" "}
          0 of 28 meals selected for breakfast{" "}
        </p>

        <div className="row">
          {filteredCards.length === 0 ? (
            <div className="col-12 text-center">
              <p>No data found</p>
            </div>
          ) : (
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
                  data-target="#Dinnermealmodal"
                >
                  {card?.head}
                </h5>
                <div
                  className="text-center"
                  onClick={() => handleOpen(card)}
                  data-toggle="modal"
                  data-target="#Dinnermealmodal"
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
                  data-target="#Dinnermealmodal"
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
          )}
        </div>
      </div>

      {/* Bootstrap Modal */}

      <div class="modal fade" id="Dinnermealmodal">
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
                              selectedCard?.nutrition_energy_per270g}
                          </td>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_energy_per100g}
                          </td>
                        </tr>
                        <tr>
                          <th>Fat</th>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_fat_per270g}
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
                              selectedCard?.nutrition_carbohydrate_per270g}
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
                              selectedCard?.nutrition_fibre_per270g}
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
                              selectedCard?.nutrition_protein_per270g}
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
                              selectedCard?.nutrition_salt_per270g}
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

export default VegDinnerMeal;
