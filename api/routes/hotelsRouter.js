// const express=require('express');
import express from "express";
// import Hotel from "../models/Hotel.js";

// const Hotel = require('../models/Hotel');
// const hotelController = require('../controllers/hotelController')
import { verifyAdmin } from "../utils/verifyToken.js";

// const { createError } = require('../utils/error');
const router=express.Router();

import {
    createHotel,
    deleteHotel,
    getHotel,
    getAllHotels,
    updateHotel,
    countByCity,
    countByType
  } from "../controllers/hotelController.js";
  import Hotel from "../models/Hotel.js";

router.post("/", verifyAdmin, createHotel)
router.put("/:id", verifyAdmin, updateHotel)
router.delete("/:id", verifyAdmin, deleteHotel)
router.get("/find/:id", getHotel)
router.get("/", getAllHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)

// module.exports = router;
export default router;