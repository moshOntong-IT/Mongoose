import mongoose from "mongoose";

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
});

export default mongoose.model("Fruit", fruitSchema);