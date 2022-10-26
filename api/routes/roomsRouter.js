// const express=require('express');
import express from "express";
// import Hotel from "../models/Hotel.js";

// const Hotel = require('../models/Hotel');
// const hotelController = require('../controllers/hotelController')
import { verifyAdmin } from "../utils/verifyToken.js";

// const { createError } = require('../utils/error');
const router=express.Router();

import {
    createRoom,
    deleteRoom,
    getRoom,
    getAllRooms,
    updateRoom
  } from "../controllers/roomController.js";
  import Room from "../models/Room.js";

router.post("/:hotelid",verifyAdmin, createRoom)
router.put("/:id", verifyAdmin, updateRoom)
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom)
router.get("/:id", getRoom)
router.get("/", getAllRooms)

// module.exports = router;
export default router;