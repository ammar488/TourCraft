// const Hotel = require('../models/Hotel');
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
// const createError = require('../utils/error');


//createHotel
export const createHotel=async (req,res,next) =>{
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()    
        res.status(200).json(savedHotel)
    } catch (err) {
        next(err);
        // res.status(500).json(err)
    }
}

//updateHotel
export const updateHotel = async (req,res,next) =>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err);
        // res.status(500).json(err)
    }
}

//deleteHotel
export const deleteHotel = async (req,res,next) =>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (err) {
        next(err);
        // res.status(500).json(err)
    }
}

//getHotel
export const getHotel = async (req,res,next) =>{
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        next(err);
        // res.status(500).json(err)
    }
}

//getAllHotels
export const getAllHotels = async (req,res,next) =>{
    const { min, max, ...others } = req.query;
    try {
        // const hotels = await Hotel.find({...others})
        const hotels = await Hotel.find({...others, 
            cheapestPrice: {$gt:min | 1, $lt:max || 5000}
        }).limit(req.query.limit);
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}
export const countByCity = async (req,res,next) =>{
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}
export const countByType = async (req,res,next) =>{
    try {
        const hotelCount = await Hotel.countDocuments({type: "Hotel"})
        const resortCount = await Hotel.countDocuments({type: "Resort"})
        const farmhouseCount = await Hotel.countDocuments({type: "Farmhouse"})
        
        res.status(200).json([
            {type:"Hotels", count: hotelCount},
            {type:"Resorts", count: resortCount},
            {type:"Farmhouses", count: farmhouseCount}
        ])
    } catch (err) {
        next(err)
    }
}

// module.exports = {
//     createHotel, updateHotel, deleteHotel, getHotel, getAllHotels
// }