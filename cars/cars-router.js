const express = require("express");
const db = require("../data/config");

const router = express.Router();

//==================
// GET Cars
//==================

router.get("/", async (req, res, next) => {
  try {
    const car = await db("cars")
    res.json(car)

  } catch (err) {
    next(err);
  }
});




module.exports = router