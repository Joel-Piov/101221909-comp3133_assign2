const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const app = express();
const {
    Hotel,
    Booking,
    User
  } = require('./models');

const {Schema} = require('./schemas');

const dbUrl = 'mongodb+srv://user:OWNqmCaeMpkTyntT@cluster0.seb3s.mongodb.net/GraphQL?retryWrites=true&w=majority'

var root = {
    getHotels: () => {
        var hotels = Hotel.find({})
        return hotels
    },
    createHotel:(args)=>{
        Hotel.create(args, (res, err) => {
            if(err){
                console.log("Error. Unable to create hotel, please try again later.");
            }
            else{
                console.log("Entry added successfully");
            }
        })
    },
    getHotel: (args) => {
        var hotel = Hotel.find({ $or: [{hotel_name: args.hotel_name}, {city: args.city}] })
        return hotel
    },
    getBookings: () => {
        var Bookings = Booking.find({})
        return Bookings
    },
    getUserBookings:(args)=>{
        var Bookings = Booking.find({user_id:args.user_id})
        return Bookings
    },
    createBooking:(args)=>{
        Booking.create(args, (res, err) => {
            if(err){
                console.log("Error. Unable to book, please try again later.");
            }
            else{
                console.log("Entry added successfully");
            }
        })
    },
    getUsers: () => {
        var Users = User.find({})
        return Users
    },
    createUser: (args) => {
        User.create(args, (res, err) => {
            if(err){
                console.log("Error. User already exists");
            }
            else{
                console.log("Entry added successfully");
            }
        })
    }
};


mongoose.connect(dbUrl , { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('mongodb connected',err);
    }else{
        console.log('Successfully mongodb connected');
    }
})

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    rootValue: root,
    graphiql: true,
}));


app.listen(4000, () => { console.log('Now listening on localhost:4000/graphql') });