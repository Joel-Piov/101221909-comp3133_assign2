const mongoose = require('mongoose');
//----------Schemas-----------------
var HotelSchema = new mongoose.Schema({
    hotel_id: Number,
    hotel_name: String,
    street: String,
    city: String,
    postal_code: String,
    price: Number,
    email: String,
    user_id: Number
})

var BookingSchema = new mongoose.Schema({
    hotel_id: Number,
    booking_date: String,
    booking_start: String,
    booking_end: String,
    user_id: Number
})

var UserSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
        unique: [true, "Duplicate ID error."]
    },
    username: {
        type: String,
        required: true,
        unique: [true, "Username already exists."]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exists."]
    },
    password: {
        type: String,
        required: true,
    }
})

//----------Models-----------------
const Hotel = mongoose.model("Hotel", HotelSchema);
const Booking = mongoose.model("Booking", BookingSchema);
const User = mongoose.model("User", UserSchema);


//----------Exports-----------------
module.exports = {
    Hotel,
    Booking,
    User
  };