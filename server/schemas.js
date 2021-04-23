var { buildSchema } = require('graphql');

//https://graphql.org/graphql-js/mutations-and-input-types/
var Schema = buildSchema(
    `type Query {
        getHotels: [Hotel]
        getBookings: [Booking]
        getUsers: [User]
        getHotel(hotel_name: String, city: String): [Hotel]
        getUserBookings(user_id: Int):[Booking]
    },

    type Mutation {
        createHotel(
            hotel_id: Int,
            hotel_name: String,
            street: String,
            city: String,
            postal_code: String,
            price: Int,
            email: String,
            user_id: Int
        ): Hotel,
        createBooking(
            hotel_id: Int,
            booking_date: String,
            booking_start: String,
            booking_end: String,
            user_id: Int
        ): Booking,
        createUser(
            user_id: Int,
            username: String,
            email: String,
            password: String
        ): User
    },

    type Hotel {
        hotel_id: Int,
        hotel_name: String,
        street: String,
        city: String,
        postal_code: String,
        price: Int,
        email: String,
        user_id: Int
    },
    type Booking {
        hotel_id: Int,
        booking_date: String,
        booking_start: String,
        booking_end: String,
        user_id: Int
    },
    type User {
        user_id: Int,
        username: String,
        email: String,
        password: String
    }`
);

module.exports = { 
    Schema
}