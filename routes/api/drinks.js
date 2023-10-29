const express = require("express");
const {
  getMainPageDrinks,
} = require("../../controllers/drinks/getMainPageDrinks");

const addOwnDrink = require("../../controllers/drinks/addOwnDrink");
const removeOwnDrink = require("../../controllers/drinks/removeOwnDrink");

const {
  validateBody,
  authenticate,
  isValidDrinkId,
} = require("../../middlewares");

const {
  drinkJoiSchema,
} = require("../../models/cocktails");

const router = express.Router();

router.get("/mainpage", getMainPageDrinks);

router.post(
  "/own/add",
  authenticate,
  validateBody(drinkJoiSchema),
  addOwnDrink
);

    router.delete(
      "/own/remove/:drinkId",
      authenticate,
      isValidDrinkId,
      removeOwnDrink
    );

module.exports = router;
