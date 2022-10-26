// require = require('esm')(module)
// var _ = require('lodash');
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// require('dotenv').config()
// const createError = require('./utils/error');
// import createError from '../utils/error';
// import {createError}


// const express = require("express");
const app = express();
// const mongoose = require('mongoose');
import cookieParser from "cookie-parser";
import cors from "cors";
// cookieParser.parse("foo=bar");

import authRoute from "./routes/authRouter.js";
import hotelsRoute from "./routes/hotelsRouter.js";
import usersRoute from "./routes/usersRouter.js";
import roomsRoute from "./routes/roomsRouter.js";
// const authRoute=require('./routes/authRouter');
// const usersRoute=require('./routes/usersRouter');
// const hotelsRoute=require('./routes/hotelsRouter');
// const roomsRoute=require('./routes/roomsRouter');

dotenv.config();

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

//middlewares
app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

app.use((err,req,res,next) =>{
  const errorStatus= err.status || 500
  const errorMessage= err.message || "Something went wrong"

  return res.status(errorStatus).json({
    success:false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  });
})

  app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
  });


// require('dotenv').config()

// const express = require("express");
// const app = express();
// const mongoose = require('mongoose');

// // const connect = async () => {
// //     try {
// //         await mongoose.connect(process.env.MONGO);
// //         console.log("Connected to db");
// //     } catch (error) {
// //         console.log(error)
// //     }
// // }
// const dbURI = 'mongodb+srv://ibrahim:ibrahim298@cluster0.3ebuxbs.mongodb.net/booking?retryWrites=true&w=majority';
// mongoose.connect(dbURI)
// .then((result)=> app.listen(8800))
// .catch((err) => console.log(err));
// // app.listen(8800, () => {
// //     connect();
// //     console.log('Connected to application.')
// // })