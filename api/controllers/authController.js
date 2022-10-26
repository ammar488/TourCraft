// const User = require('../models/User');
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
// const bcrypt = require('bcrypt');
const saltRounds = 10;
// const jwt = require('jsonwebtoken');
// const cookieparser = require("cookieparser");


//register
export const register=async (req,res,next) =>{
    try {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })    
        await newUser.save()
        res.status(200).send("User has been created.")
    } catch (err) {
        next(err);
        // res.status(500).json(err)
    }
}

//login
export const login=async (req,res,next) =>{
    try {
        const user = await User.findOne({username:req.body.username})
        if (!user) {
            return next(createError(404,"User Not Found."))
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password) 
        if (!isPasswordCorrect) {
            return next(createError(400,"Wrong Password."))
        }
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)
        //destructuring the user so password and sensitive data is not returned
        const {password,isAdmin,...otherDetails}=user._doc;
        res.cookie("access_token",token,{
            httpOnly: true,
        }).status(200).json({...otherDetails})
    } catch (err) {
        next(err);
        // res.status(500).json(err)
    }
}

// module.exports = {
//     register,login
// }