import mongoose from "mongoose";

export const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Required to insert fruit name"],
    },
    rating: {
        type: Number,
        min: [1, "Please you have to insert alteast 1"],
        max: [10, "So much fruits"],
    },
    review: String,
});

export default mongoose.model("Fruit", fruitSchema);