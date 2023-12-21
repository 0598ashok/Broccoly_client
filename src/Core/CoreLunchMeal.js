import React,{useState} from "react";
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

import TomatoPepperCheesePastaPot from "../images/Lunch/tomato_red_pepper_pasta_pot_sm.jpg";
import CreamyPestoPastaPot from "../images/Lunch/creamy_pesto_pasta_pot_sm.jpg";
import ChunkyVegetableSoup from "../images/Lunch/Chunky_Veg_sm.jpg";
import CreamofTomatoSoup from "../images/Lunch/cream_of_tomato_sm.jpg";
import ChickenMulligatawnySoup from "../images/Lunch/chicken_mulligatawny_sm.jpg";
import LentilBaconSoup from "../images/Lunch/lentilbacon_sm.jpg";
import MinestroneSoup from "../images/Lunch/minestrone_soup_sm.jpg";
import ChickenGrainSoup from "../images/Lunch/chickengrain_sm.jpg"
import HoneyLimeChicken from "../images/Lunch/honey_lime_chicken_sm.jpg";
import VegetarianChilli from "../images/Lunch/veg_chilli_23_sm.jpg";
import ChickenJambalaya from "../images/Lunch/chicken_jambalaya_sm.jpg";
import NakedBeefBurritos from "../images/Lunch/naked_beef_burritos_sm.jpg";
import MediterraneanPasta from "../images/Lunch/mediterranean_pasta_sm.jpg";
import ItalianChickenArrabbiata from "../images/Lunch/italian_chicken_arrabbiata_sm.jpg";
import MellowSpicedRice from "../images/Lunch/mellow_spiced_rice_sm.jpg";
import MushroomTarragonSoup from "../images/Lunch/mushroomtarrgon_sm.jpg"


const CoreLunchMeal = () => {


  const lunchmeal = [
    {
      id: 1,
      head: "Tomato, Pepper, Cheese Pasta Pot",
      img: TomatoPepperCheesePastaPot,
      content:
        "Instant fusilli pasta, bound in a delicious tomato, red pepper and cheese flavoured sauce, delicately enhanced with basil and parsley. A great balance ...",
      storage: " Store in a cool, dry cupboard and use by the best before date",
      overview:
        "Instant fusilli pasta, bound in a delicious tomato, red pepper and cheese flavoured sauce, delicately enhanced with basil and parsley. A great balance of flavours to make even an Italian Grandmother smile! Serve on its own, or accompanied by a crisp, green salad with lemon juice and a splash of olive oil. This tasty, quick meal has been especially designed for those times when you are in a rush, or don't have access to a microwave. The pot contains dry instant pasta and a delicious savoury sauce, to which you just add hot water. It's light and easy to carry with you. Perfect when on the go! Note all nutritional values relate to the product when made up with water (i.e. per 100g is portion of the 255g serving).",
      ingredients:
        "Instant Pasta (63%) (Durum WHEAT Semolina), Tomato Powder (10%), Sugar, Potato Starch, Glucose Syrup, Red Pepper Powder (2%), Maltodextrin, Palm Oil, Salt, Flavourings, Onion Powder, Cheese Powder (0.9%) (MILK), Dried Red Pepper, Dried Herbs (Basil, Parsley), Colour: Paprika Extract; MILK Protein, Stabilisers: Dipotassium Phosphate, Trisodium Citrate; Acidity Regulator: Citric Acid.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "222 kcal (929 kJ)",
      nutrition_energy_per100g: "89 kcal (372 kJ)",
      nutrition_fat_per200g: "	1.5g(of which saturates 0.8g)",
      nutrition_fat_per100g: "0.6g(of which saturates 0.3g)",
      nutrition_carbohydrate_per200g: "41.6g(of which sugars 9.2g)",
      nutrition_carbohydrate_per100g: "16.7g(of which sugars 3.7g)",
      nutrition_fibre_per200g: "7g",
      nutrition_fibre_per100g: "2.8g",
      nutrition_protein_per200g: "	7.2g",
      nutrition_protein_per100g: "2.9g",
      nutrition_salt_per200g: "1.18g",
      nutrition_salt_per100g: "0.48g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
    },
    {
      id: 2,
      head: "Creamy Pesto Pasta Pot",
      img: CreamyPestoPastaPot,
      content:
        "Instant pasta curls, bound in a creamy, cheesy sauce, enriched with garlic, basil and parsley, and scattered with pine kernels. Serve on its..",
      storage:
        "  Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Instant pasta curls, bound in a creamy, cheesy sauce, enriched with garlic, basil and parsley, and scattered with pine kernels. Serve on its own, or alongside a ripe tomato salad with rocket and balsamic vinegar, adding a splash of olive oil.This tasty, quick meal has been especially design for those times when you are in a rush, or don't have access to a microwave. The pot contains dry instant pasta and a delicious savoury sauce, to which you just add hot water. It's light and easy to carry with you. Perfect when on the go! Note all nutritional values relate to the product when made up with water (i.e. per 100g is portion of the 255g serving).",
      ingredients:
        "Instant Pasta (63%) (Durum WHEAT Semolina), Potato Starch, Cheese Powder (5%) (MILK), Maltodextrin, Flavourings (contains MILK, WHEAT), Palm Oil, Glucose Syrup, Yeast Extract, Cream Powder (MILK), Pine Kernels, Onion Powder, Garlic Powder, Salt, Stabilisers: Dipotassium Phosphate, Disodium Phosphate, Sodium Polyphosphates; MILK Proteins, Cracked Black Pepper, Dried Herbs (Parsley, Basil), Emulsifier: Mono and Diglycerides of Fatty Acids. Note all nutritional values relate to the product when made up with water (i.e. per 100g is portion of the 250g serving).",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "236 kcal (987 kJ)",
      nutrition_energy_per100g: "95 kcal (397 kJ)",
      nutrition_fat_per200g: "	3.7g(of which saturates 2.2g)",
      nutrition_fat_per100g: "1.5g(of which saturates 0.9g)",
      nutrition_carbohydrate_per200g: "40.2g(of which sugars 2.2g)",
      nutrition_carbohydrate_per100g: "16.2g (of which sugars 0.9g)",
      nutrition_fibre_per200g: "2.5g",
      nutrition_fibre_per100g: "1g",
      nutrition_protein_per200g: "	8.9g",
      nutrition_protein_per100g: "3.6g",
      nutrition_salt_per200g: "1.8g",
      nutrition_salt_per100g: "0.7g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
    },
    {
      id: 3,
      head: "Chunky Vegetable Soup",
      img: ChunkyVegetableSoup,
      content: "A satisfying soup, laden with vegetable goodness.",
      storage:
        "  Store in a cool, dry cupboard and use by the best before date.",
      overview: "A satisfying soup, laden with vegetable goodness.",
      ingredients:
        "Vegetables (47%)(Carrot, Potato, Onion, Butternut Squash, Leek), Water, Maize Starch, Red Lentils, Chana Lentils, Vegetable Stock (Concentrated Carrot Juice, Yeast Extract, Sunflower Oil, Salt, Sugar, Dried Onion, Tomato Puree), Garlic Puree, Herbs, Salt, Spices.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "144 kcal (602 kJ)",
      nutrition_energy_per100g: "48 kcal (201 kJ)",
      nutrition_fat_per200g: "	2.4g(of which saturates 0.9g)",
      nutrition_fat_per100g: "0.8g(of which saturates 0.3g)",
      nutrition_carbohydrate_per200g: "24g(of which sugars 2.1g)",
      nutrition_carbohydrate_per100g: "8g(of which sugars 0.7g)",
      nutrition_fibre_per200g: "3g",
      nutrition_fibre_per100g: "1g",
      nutrition_protein_per200g: "	5.1g",
      nutrition_protein_per100g: "1.7g",
      nutrition_salt_per200g: "	1.46g",
      nutrition_salt_per100g: "0.49g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "Wheat free",
    },
    {
      id: 4,
      head: "Cream of Tomato Soup",
      img: CreamofTomatoSoup,
      content: "A smooth, dark red, creamy tomato soup.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview: "A smooth, dark red, creamy tomato soup.",
      ingredients:
        "Tomato Puree (42%), Water, Double Cream (10%) (Milk), Maize Starch, Sugar, Rapeseed Oil, Salt, Spices, Onion Powder, Acidity Regulator: E330; Flavouring.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "309 kcal (1293 kJ)",
      nutrition_energy_per100g: "103 kcal (431 kJ)",
      nutrition_fat_per200g: "21.3g(of which saturates 10.2g)",
      nutrition_fat_per100g: "7.1g(of which saturates 3.4g)",
      nutrition_carbohydrate_per200g: "22.8g(of which sugars 10.8g)",
      nutrition_carbohydrate_per100g: "7.6g(of which sugars 3.6g)",
      nutrition_fibre_per200g: "4.2g",
      nutrition_fibre_per100g: "1.4g",
      nutrition_protein_per200g: "4.8g",
      nutrition_protein_per100g: "1.6g",
      nutrition_salt_per200g: "1.45g",
      nutrition_salt_per100g: "0.48g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "Wheat free",
    },
    {
      id: 5,
      head: "Chicken Mulligatawny Soup",
      img: ChickenMulligatawnySoup,
      content:
        "A classic Anglo Indian flavour based soup ...a slight curry flavour, with pieces of chicken, cooked rice and red lentils with the addition of apple. This is a great flavour soup and perfect for a warming, easy but very filling lunch.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A classic Anglo Indian flavour based soup ...a slight curry flavour, with pieces of chicken, cooked rice and red lentils with the addition of apple. This is a great flavour soup and perfect for a warming, easy but very filling lunch.",
      ingredients:
        "Water, Vegetables (13%) (Carrot, Onion), Cooked Brown Rice (7%), Tomato Puree, Cooked Chicken Breast (5%), Maize Starch, Apple, Red Lentils, Ginger Puree, Garlic Puree, Savoury Stock (Rehydrated Potato, Water, Yeast Extract, Salt, Natural Flavouring, Sunflower Oil, Sugar, Onion Powder, Lemon Juice Concentrate, Garlic), Sugar, Spices, Coriander, Salt.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "207 kcal (866 kJ)",
      nutrition_energy_per100g: "69 kcal (289 kJ)",
      nutrition_fat_per200g: "8.4g(of which saturates 4.5g)",
      nutrition_fat_per100g: "2.8g(of which saturates 1.5g)",
      nutrition_carbohydrate_per200g: "22.5g(of which sugars 3.6g)",
      nutrition_carbohydrate_per100g: "7.5g(of which sugars 1.2g)",
      nutrition_fibre_per200g: "2.7g",
      nutrition_fibre_per100g: "0.9g",
      nutrition_protein_per200g: "9.3g",
      nutrition_protein_per100g: "3.1g",
      nutrition_salt_per200g: "1.4g",
      nutrition_salt_per100g: "0.47g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "Wheat free",
    },
    {
      id: 6,
      head: "Lentil & Bacon Soup",
      img: LentilBaconSoup,
      content:
        "A classic soup made with green lentils, Oak smoked British bacon and vegetables (300g) Please follow instructions carefully, we recommend that contents are decanted into a bowl before heating in microwave.",
      storage:
        "  Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A classic soup made with green lentils, Oak smoked British bacon and vegetables (300g) Please follow instructions carefully, we recommend that contents are decanted into a bowl before heating in microwave.",
      ingredients:
        "Water, Carrot (12%), Chopped Tomatoes [Tomato, Acidity Regulator (Citric Acid)], Oak Smoked Streaky Bacon with added water (9%) [Pork, Water, Salt, Preservative (Sodium Nitrite), Antioxidant (Sodium Ascorbate)], Green Lentils (7%), Onion (5%), Tomato Paste, Cornflour, Chicken Stock [Chicken Stock, Salt], Garlic Puree, Salt, Cracked Black Pepper",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "229 kcal (958 kJ)",
      nutrition_energy_per100g: "687 kcal (2874 kJ)",
      nutrition_fat_per200g: "	3.6g (of which saturates 0g)",
      nutrition_fat_per100g: "1.2g (of which saturates 0.4g)",
      nutrition_carbohydrate_per200g: "18.3g(of which sugars 5.4g)",
      nutrition_carbohydrate_per100g: "6.1g(of which sugars 1.8g)",
      nutrition_fibre_per200g: "4.8g",
      nutrition_fibre_per100g: "1.6g",
      nutrition_protein_per200g: "11.4g",
      nutrition_protein_per100g: "3.8g",
      nutrition_salt_per200g: "2.25g",
      nutrition_salt_per100g: "0.75g",
      count: "0",
      V: "",
      N: "",
      G: "Gluten free",
      W: "",
    },

    {
      id: 7,
      head: "Minestrone Soup",
      img: MinestroneSoup,
      content:
        "A true taste of pure Italian perfection. Starting with a great flavoured tomato base, well balanced and lightly flavoured with garlic, basil and oregano, packed with carrots, potatoes, courgettes and red peppers, with al dente pasta for a perfect warming and full of flavour lunch.",
      storage:
        "  Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A true taste of pure Italian perfection. Starting with a great flavoured tomato base, well balanced and lightly flavoured with garlic, basil and oregano, packed with carrots, potatoes, courgettes and red peppers, with al dente pasta for a perfect warming and full of flavour lunch.",
      ingredients:
        "Tomatoes (40%), Water, Vegetables (19%)(Onion, Leeks, Peas, Potato, Carrot, Courgette), Tomato Puree, Maize Starch, Pennette Pasta (3%)(WHEAT), Red Peppers, Sugar, Herbs, Garlic Puree, Rapeseed Oil, Salt, Vegetable Stock (Concentrated Carrot Juice, Yeast Extract, Sunflower Oil, Salt, Sugar, Dried Onion, Tomato Puree), Black Pepper.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "192 kcal (803 kJ)",
      nutrition_energy_per100g: "64 kcal (268 kJ)",
      nutrition_fat_per200g: "	3.6g (of which saturates 0.9g)",
      nutrition_fat_per100g: "1.2g (of which saturates 0.3g)",
      nutrition_carbohydrate_per200g: "34g(of which sugars 6.6g)",
      nutrition_carbohydrate_per100g: "11g(of which sugars 2.2g)",
      nutrition_fibre_per200g: "0.3g",
      nutrition_fibre_per100g: "0.1g",
      nutrition_protein_per200g: "5.7g",
      nutrition_protein_per100g: "1.9g",
      nutrition_salt_per200g: "1.25g",
      nutrition_salt_per100g: "0.42g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
    },

    {
      id: 8,
      head: "Chicken & Grain Soup",
      img: ChickenGrainSoup,
      content:
        "A hearty soup made with British chicken thigh, vegetables, brown rice, bulgur wheat and pearl barley (300g) ALLERGEN UPDATE: please be aware our new and improved Chunky Chicken & Grain Soup now contains WHEAT (GLUTEN) Please follow instructions carefully, we recommend that contents are decanted into a bowl before heating in microwave.",
      storage:
        "  Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A hearty soup made with British chicken thigh, vegetables, brown rice, bulgur wheat and pearl barley (300g) ALLERGEN UPDATE: please be aware our new and improved Chunky Chicken & Grain Soup now contains WHEAT (GLUTEN) Please follow instructions carefully, we recommend that contents are decanted into a bowl before heating in microwave..",
      ingredients:
        "Water, Carrot (12%), Chicken (9%), Onion (9%), CELERY (5%), Chicken Flavour Stock [Yeast Extract, Natural Flavouring, Water, Onion Powder, Sage Extract], Brown Rice (3%), Bulgur WHEAT(2%), Cornflour, Pearl BARLEY(1%), Thyme, Cracked Black Pepper",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "	99 kcal (414 kJ)",
      nutrition_energy_per100g: "33 kcal (138 kJ)",
      nutrition_fat_per200g: "2.1g (of which saturates 0.6g)",
      nutrition_fat_per100g: "0.7g (of which saturates 0.2g)",
      nutrition_carbohydrate_per200g: "11.7g(of which sugars 3g)",
      nutrition_carbohydrate_per100g: "3.9g(of which sugars 1g)",
      nutrition_fibre_per200g: "2.4g",
      nutrition_fibre_per100g: "0.8g",
      nutrition_protein_per200g: "7.2g",
      nutrition_protein_per100g: "2.4g",
      nutrition_salt_per200g: "0.66g",
      nutrition_salt_per100g: "0.22g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "",
    },

    {
      id: 9,
      head: "Honey & Lime Chicken",
      img: HoneyLimeChicken,
      content:
        "A fresh zingy Asian style meal, tender chicken, ginger, soy lime and a perfectly balanced hit of honey.",
      storage:
        "  Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A fresh zingy Asian style meal, tender chicken, ginger, soy lime and a perfectly balanced hit of honey.",
      ingredients:
        "Water, Chicken (23%) (Chicken Breast, Salt), Long Grain Rice (8%), Red Pepper (6%), Onion, Soy Sauce (4%) (Water, Salt, Glucose Syrup, Soya Bean, Spirit Vinegar, Wheat Flour), Green Pepper (3.5%), Honey (3%), Garlic Puree, Cornflour, Ginger Puree, Rapeseed Oil, Chicken Stock (Chicken, Rehydrated Potato Flake, Yeast Extract, Salt), Lime Leaf, Lime Juice, Basil, Tomato Paste, Red Wine Vinegar, Colour (Plain Caramel), Acid (Citric Acid).",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "173 kcal (724 kJ)",
      nutrition_energy_per100g: "88 kcal (368 kJ)",
      nutrition_fat_per200g: "2.4g(of which saturates 0.4g)",
      nutrition_fat_per100g: "1.2g(of which saturates 0.2g)",
      nutrition_carbohydrate_per200g: "22.6g(of which sugars 5.8g)",
      nutrition_carbohydrate_per100g: "11.5g(of which sugars 2.9g)",
      nutrition_fibre_per200g: "4.5g",
      nutrition_fibre_per100g: "2.3g",
      nutrition_protein_per200g: "12.9g",
      nutrition_protein_per100g: "6.5g",
      nutrition_salt_per200g: "1.4g",
      nutrition_salt_per100g: "0.71g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "",
    },

    {
      id: 10,
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
    },

    {
      id: 11,
      head: "Chicken Jambalaya",
      img: ChickenJambalaya,
      content:
        "Tender chicken with rice and chorizo, plus red peppers and spices. This will make your lunchtime sing.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Tender chicken with rice and chorizo, plus red peppers and spices. This will make your lunchtime sing.",
      ingredients:
        "Water, Chicken Breast (22%) (Chicken Breast, Salt), Long Grain Rice (12%), Red Pepper (4%), Yellow Pepper (3.5%), Tomatoes, Onion, Pancetta (Pork Belly, Salt, Dextrose, Natural Flavouring, Black Pepper, Preservatives (Sodium Nitrite, Potassium Nitrate), Antioxidant (Sodium Ascorbate)), Garlic Puree, Modified Maize Starch, Tomato Paste, Chicken Stock (Chicken, Rehydrated Potato Flake, Yeast Extract, Salt), Slow Roasted Tomato Paste (Slow Roasted Tomato, Sunflower Oil, Spirit Vinegar, Tomato Paste, Sugar, Sea Salt, Dried Garlic, Black Pepper, Rosemary, Rubbed Basil, Water), Red Chilli, Rapeseed Oil, White Wine Vinegar, Cornflour, Smoked Paprika, Brown Sugar, Lemon Zest, Garlic Powder, Colour (Paprika Extract), Ground Coriander, Coriander, Dried Oregano, Black Pepper, Salt, Crushed Chilli.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "193 kcal (808 kJ)",
      nutrition_energy_per100g: "100 kcal (418 kJ)",
      nutrition_fat_per200g: "3g(of which saturates 0.7g)",
      nutrition_fat_per100g: "1.5g(of which saturates 0.4g)",
      nutrition_carbohydrate_per200g: "26.2g(of which sugars 2.7g)",
      nutrition_carbohydrate_per100g: "13.5g (of which sugars 1.4g)",
      nutrition_fibre_per200g: "3g",
      nutrition_fibre_per100g: "1.5g",
      nutrition_protein_per200g: "14g",
      nutrition_protein_per100g: "7.2g",
      nutrition_salt_per200g: "1.24g",
      nutrition_salt_per100g: "0.64g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
    },

    {
      id: 12,
      head: "Naked Beef Burritos",
      img: NakedBeefBurritos,
      content:
        "All the flavour but without the high calorie wrap. This is the lighter way to enjoy burritos. Enjoy beef with hits of smoky beans, spices and of course chilli.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "All the flavour but without the high calorie wrap. This is the lighter way to enjoy burritos. Enjoy beef with hits of smoky beans, spices and of course chilli.",
      ingredients:
        "Water, Beef (21%), Long Grain Rice (8%), Onion, Tomato Paste, Pinto Beans (5%), Haricot Beans (4%), Cannellini Beans (3%), Red Pepper (2.5%), Yellow Pepper (2.5%), Beef Stock (Beef, Yeast Extract, Natural Flavouring, Salt, Tomato Paste, Molasses, Lemon Juice Concentrate, Onion Powder), Cornflour, Brown Sugar, Red Wine Vinegar, Worcester Sauce (Water, Spirit Vinegar, Sugar, Salt, Tamarind Paste, Onion Powder, Garlic Powder, Lemon Concentrate, Ground Ginger, Ground Cloves, Chilli Powder), Cane Molasses, Garlic Puree, Coriander, Rapeseed Oil, Smoked Paprika, Ground Cumin, Salt, Black Pepper, Chilli Powder.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "276 kcal (1155 kJ)",
      nutrition_energy_per100g: "138 kcal (577 kJ)",
      nutrition_fat_per200g: "11.4g(of which saturates 5.5g)",
      nutrition_fat_per100g: "5.7g(of which saturates 2.8g)",
      nutrition_carbohydrate_per200g: "24g(of which sugars 6.4g)",
      nutrition_carbohydrate_per100g: "12g(of which sugars 3.2g)",
      nutrition_fibre_per200g: "8.2g",
      nutrition_fibre_per100g: "4.1g",
      nutrition_protein_per200g: "15.3g",
      nutrition_protein_per100g: "7.7g",
      nutrition_salt_per200g: "1.08g",
      nutrition_salt_per100g: "0.54g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
    },

    {
      id: 13,
      head: "Mediterranean Pasta",
      img: MediterraneanPasta,
      content:
        "Transport yourself to the hills of Tuscany with this tasty pasta dish. Pasta with tomato, olive and a mix of herbs plus a tough of spice for a little kick.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Transport yourself to the hills of Tuscany with this tasty pasta dish. Pasta with tomato, olive and a mix of herbs plus a tough of spice for a little kick.",
      ingredients:
        "Tomato, Water, Cooked Penne Pasta (10%) (Durum WHEAT Semolina, Emulsifier (Mono- and Diglycerides of Fatty Acids)), Yellow Pepper (9%), Onion, Green Olives (3.5%) (Olives, Salt), Slow Roasted Tomato Paste (Slow Roasted Tomato, Sunflower Oil, Spirit Vinegar, Tomato Paste, Sugar, Sea Salt, Dried Garlic, Black Pepper, Rosemary, Rubbed Basil, Water), Tomato Paste, Garlic Puree, Modified Maize Starch, Rapeseed Oil, Brown Sugar, Basil, Smoked Paprika, Red Chilli Puree, Dried Oregano, Chilli Powder, Black Pepper.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "145 kcal (607 kJ)",
      nutrition_energy_per100g: "73 kcal (305 kJ)",
      nutrition_fat_per200g: "5.5g(of which saturates 0.5g)",
      nutrition_fat_per100g: "2.5g(of which saturates 0.2g)",
      nutrition_carbohydrate_per200g: "23.9g(of which sugars 7.3g)",
      nutrition_carbohydrate_per100g: "12.1g(of which sugars 3.7g)",
      nutrition_fibre_per200g: "3.3g",
      nutrition_fibre_per100g: "1.7g",
      nutrition_protein_per200g: "5g",
      nutrition_protein_per100g: "2.5g",
      nutrition_salt_per200g: "0.4g",
      nutrition_salt_per100g: "0.2g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
    },

    {
      id: 14,
      head: "Italian Chicken Arrabbiata",
      img: ItalianChickenArrabbiata,
      content:
        "Penne pasta and tender chicken breast cooked in a warming spicy sauce with olives. Sit back and taste Italy.",
      storage:
        " Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Penne pasta and tender chicken breast cooked in a warming spicy sauce with olives. Sit back and taste Italy.",
      ingredients:
        "Water, Tomato (23%), Chicken Breast (20%) (Chicken Breast, Salt), Penne Pasta (8%) (Durum WHEAT Semolina, Emulsifier (Mono- and Diglycerides of Fatty Acids)), Red Pepper (7%), Basil, Onion, Green Olives (3%) (Olives, Salt), Slow Roasted Tomato Paste (Slow Roasted Tomato, Sunflower Oil, Spirit Vinegar, Tomato Paste, Sugar, Sea Salt, Dried Garlic, Black Pepper, Rosemary, Rubbed Basil, Water), Tomato Paste, Garlic Puree, Rapeseed Oil, Brown Sugar, Modified Maize Starch, Smoked Paprika, Red Chilli Puree, Dried Oregano, Chilli Powder, Black Pepper.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "	173 kcal (724 kJ)",
      nutrition_energy_per100g: "88 kcal (368 kJ)",
      nutrition_fat_per200g: "4.2g(of which saturates 0.6g)",
      nutrition_fat_per100g: "2.1g(of which saturates 0.3g)",
      nutrition_carbohydrate_per200g: "18.6g(of which sugars 7g)",
      nutrition_carbohydrate_per100g: "9.4g(of which sugars 3.6g)",
      nutrition_fibre_per200g: "3.9g",
      nutrition_fibre_per100g: "2g",
      nutrition_protein_per200g: "15.4g",
      nutrition_protein_per100g: "6.8g",
      nutrition_salt_per200g: "111g",
      nutrition_salt_per100g: "0.56g",
      count: "0",
      V: "",
      N: "",
      G: "",
      W: "",
    },

    {
      id: 15,
      head: "Mellow Spiced Rice",
      img: MellowSpicedRice,
      content:
        "A beautifully seasoned Indian style rice bowl. Basmati rice with peppers, sweetcorn and tied together with a yoghurt sauce and warming Indian spices.",
      storage:
        "  Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "A beautifully seasoned Indian style rice bowl. Basmati rice with peppers, sweetcorn and tied together with a yoghurt sauce and warming Indian spices.",
      ingredients:
        "Water, Butternut Squash (9%), Red Pepper (9%), Onion, Long Grain Rice (8%), Sweetcorn (7%), Low Fat Yoghurt (MILK), Raisins (4%), Cornflour, Butter (MILK), Vegetable Stock (Partially Rehydrated Vegetables (Onion, Potato Flake, Leek), Yeast Extract, Salt, Carrot Concentrate, Sugar, Sunflower Oil, Lemon Juice Concentrate, Garlic), Ground Spices (Coriander, Turmeric, Cumin, Cassia, Cardamom, Black Pepper, Chilli, Bay Leaf), Rapeseed Oil, Coriander, Garlic Puree, Ginger Puree, Salt, Red Chilli Puree.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "187 kcal (782 kJ)",
      nutrition_energy_per100g: "94 kcal (393 kJ)",
      nutrition_fat_per200g: "3.8g(of which saturates 1.7g)",
      nutrition_fat_per100g: "1.9g(of which saturates 0.8g)",
      nutrition_carbohydrate_per200g: "31g(of which sugars 8.4g)",
      nutrition_carbohydrate_per100g: "15.6g(of which sugars 4.2g)",
      nutrition_fibre_per200g: "5.5g",
      nutrition_fibre_per100g: "2.8g",
      nutrition_protein_per200g: "4.6g",
      nutrition_protein_per100g: "2.3g",
      nutrition_salt_per200g: "0.83g",
      nutrition_salt_per100g: "0.42g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "",
      W: "",
    },
    {
      id: 16,
      head: "Mushroom & Tarragon Soup",
      img: MushroomTarragonSoup,
      content:
        "Rich and creamy chestnut mushroom soup finished with British cream, porcini mushroom and tarragon (300g) Please follow instructions carefully, we recommend that contents..",
      storage: "Store in a cool, dry cupboard and use by the best before date.",
      overview:
        "Rich and creamy chestnut mushroom soup finished with British cream, porcini mushroom and tarragon (300g) Please follow instructions carefully, we recommend that contents are decanted into a bowl before heating in microwave.",
      ingredients:
        "Water, Chestnut Mushrooms (24%), Mushrooms (10%), Onion, Brown Rice (7%), Double Cream (MILK), Cornflour, Porcini Mushroom Stock [(Mushroom Concentrate, Rehydrated Porcini Mushroom), Yeast Extract, Salt, Sugar, Cornflour], Garlic Puree, Salt, Tarragon, Ground White Pepper.",
      ingredients2:
        "For allergens, including cereals containing Gluten, see ingredients in CAPITALS. May also contain traces of Nuts, Milk, Soya and Sesame.",
      nutrition_energy_per200g: "153 kcal (640 kJ)",
      nutrition_energy_per100g: "51 kcal (213 kJ)",
      nutrition_fat_per200g: "8.7g(of which saturates 5.4g)",
      nutrition_fat_per100g: "2.9g(of which saturates 1.8g)",
      nutrition_carbohydrate_per200g: "14.4g(of which sugars 1.8g)",
      nutrition_carbohydrate_per100g: "4.8g(of which sugars 0.6g)",
      nutrition_fibre_per200g: "1.8g",
      nutrition_fibre_per100g: "0.6g",
      nutrition_protein_per200g: "3.3g",
      nutrition_protein_per100g: "1.1g",
      nutrition_salt_per200g: "0.696g",
      nutrition_salt_per100g: "0.232g",
      count: "0",
      V: "Suitable for vegetarians",
      N: "",
      G: "Gluten free",
      W: "",
    },
  ];


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
  const [counters, setCounters] = useState(lunchmeal.map(() => 0));
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
          {lunchmeal.map((card, index) => (
            <div
              key={card.id}
              className="col-lg-3 col-md-6 col-sm-6 core_pack_cards"
            >
              {/* Card  */}
              <h5
                className="meal_title"
                onClick={() => handleOpen(card)}
                data-toggle="modal"
                data-target="#Lunchmealsmodal"
              >
                {card?.head}
              </h5>
              <div
                className="text-center"
                onClick={() => handleOpen(card)}
                data-toggle="modal"
                data-target="#Lunchmealsmodal"
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
                data-target="#Lunchmealsmodal"
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

      <div class="modal fade" id="Lunchmealsmodal">
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
                          <th> Per Serving (200g)</th>
                          <th>Per 100g</th>
                        </tr>
                        <tr>
                          <th>Energy</th>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_energy_per200g}
                          </td>
                          <td>
                            {selectedCard &&
                              selectedCard?.nutrition_energy_per100g}
                          </td>
                        </tr>
                        <tr>
                          <th>Fat</th>
                          <td>
                            {selectedCard && selectedCard?.nutrition_fat_per200g}
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
                              selectedCard?.nutrition_carbohydrate_per200g}
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
                              selectedCard?.nutrition_fibre_per200g}
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
                              selectedCard?.nutrition_protein_per200g}
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
                              selectedCard?.nutrition_salt_per200g}
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

export default CoreLunchMeal;
