import mongoose from "mongoose";
import Fruit from "./models/fruit.js";
import Person from "./models/person.js";

//connect to MongoDB by specifying port to access MongoDB server
main().then(
    (data) => {
        console.log("Successfully");
    },
    (error) => {
        console.log(error);
    }
);

async function main() {
    await mongoose.connect("mongodb://localhost:27017/fruitsDB");
}

//creating Fruit document
const fruit1 = new Fruit({
    name: "Apple",
    rating: 10,
    review: "Snow white apple",
});
const orange = new Fruit({
    name: "Orange",
    rating: 6,
    review: "Ang pait naman nito",
});
const durian = new Fruit({
    name: "durain",
    rating: 10,
    review: "The best fruits ever",
});

Fruit.insertMany([fruit1, orange, durian], (err, docs) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully saved all fruits");
        console.log(docs);
    }
});

Fruit.find((err, fruits) => {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach((fruit) => {
            console.log(fruit.name);
        });
        // console.log(fruits);
    }
});

//creating Person document
const person1 = new Person({
    name: "Mosh",
    age: 20,
});

person1.save();