const express = require("express");
const db = require("../data/config");

const router = express.Router();

//==================
// GET Cars
//==================

router.get("/", async (req, res, next) => {
  try {
    const car = await db("cars");
    res.json(car);
  } catch (err) {
    next(err);
  }
});

//==================
// GET Car by ID
//==================

router.get("/:id", async (req, res, next) => {
  try {
    const car = await db("cars").where(req.params).first();
    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
});

//==================
// CREATE new Car (POST)
//==================

router.post("/", async (req, res, next) => {
  try {
    const newCar = await db("cars").where(req.params).insert(req.body);

    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

//==================
//  UPDATE Car (PUT)
//==================

router.put("/:id", async (req, res, next) => {
  try {
    const updated = await db("cars").where(req.params).update(req.body);

    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
});

//==================
//  DELETE Car (DELETE)
//==================

router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await db("cars").where(req.params).delete(req.body);

    res.status(200).json(deleted);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

/* 
const carData = req.body;
const [id] = await db("cars").insert(carData);
const newCar = await db("cars").where({ id }); */
