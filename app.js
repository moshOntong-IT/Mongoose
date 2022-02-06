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
// const fruit1 = new Fruit({
//     name: "Apple",
//     rating: 10,
//     review: "Snow white apple",
// });
// fruit1.save();

// //creating Person document
// const person1 = new Person({
//     name: "Mosh",
//     age: 20,
// });

// person1.save();

//* Delete Function

Fruit.deleteOne({ _id: "61ff8c17a58a627d19c41ad7" }, (err, res) => {
    mongoose.connection.close();

    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});
//* Update Function
// Fruit.updateOne({ _id: "61ff8c17a58a627d19c41ad9" }, { name: "Durian" },
//     (err, res) => {
//         mongoose.connection.close();
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(res);
//         }
//     }
// );