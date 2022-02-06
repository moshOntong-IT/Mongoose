import mongoose from "mongoose";
import Fruit from "./models/fruit.js";
import person from "./models/person.js";
import Person from "./models/person.js";

//connect to MongoDB by specifying port to access MongoDB server
main().then(
    (data) => {
        //!! read this line !important
        console.log("Successfully");
        // body();
        find();
    },
    (error) => {
        console.log(error);
    }
);

async function main() {
    await mongoose.connect("mongodb://localhost:27017/fruitsDB");
}

async function body() {
    //creating Fruit document
    //* method 1
    // const fruit1 = new Fruit({
    //     name: "Pineapple",
    //     rating: 2,
    //     review: "Kalami ani jud",
    // });
    // fruit1.save();
    //* method 2
    // const fruit = await Fruit.create({
    //     name: "Strawberry",
    //     rating: 10,
    //     review: "I love this fruit",
    // }).catch((reason) => console.log(reason.message));

    // creating Person document
    // const person1 = new Person({
    //     name: "Josh",
    //     age: 25,
    //     favoriteFruit: fruit,
    // });
    // await person1.save();

    const person2 = new Person({
        name: "Mosh",
        age: 20,
        bestFriend: "61ffe25731f1365fb3ec2a29",
    });

    await person2.save();
    await mongoose.connection.close();
}

async function find() {
    const person = await Person.findOne({ name: "Mosh" }).populate("bestFriend");
    // person.bestFriend = "61ffe25731f1365fb3ec2a29";
    // await person.save();
    console.log(person);
    await mongoose.connection.close();
}