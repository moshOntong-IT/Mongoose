import mongoose from "mongoose";

export const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Required to insert fruit name"],
        validate: {
            validator: (x) => x.charAt(0) === x.charAt(0).toUpperCase(),
            message: (props) => "The first letter must be capital letter",
        },
    },
    rating: {
        type: Number,
        min: [1, "Please you have to insert alteast 1"],
        max: [10, "So much fruits"],
    },
    review: String,
});

export default mongoose.model("Fruit", fruitSchema);