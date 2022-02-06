import mongoose from "mongoose";
import { fruitSchema } from "./fruit.js";

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema,
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Person",
    },
    createdDate: {
        type: Date,
        immutable: true,
        default: Date.now(),
    },
    updateDate: {
        type: Date,
        default: Date.now(),
    },
});

// personSchema.pre("save", (next) => {
//     this.updateDate = Date.now();
//     this.save();
//     next();
// });

personSchema.pre("save", function(next) {
    next();
    console.log(this);
});
export default mongoose.model("Person", personSchema);