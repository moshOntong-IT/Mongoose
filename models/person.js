import mongoose from "mongoose";
import { fruitSchema } from "./fruit.js";

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema,
});

export default mongoose.model("Person", personSchema);