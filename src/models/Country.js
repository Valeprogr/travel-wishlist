import mongoose from "mongoose";

const Country = new mongoose.Schema({
    "name": {type : String, required: true},
    "alpha2Code": {type : String, required: true},
    "alpha3Code": {type : String, required: true}
})

export default mongoose.model("Country",Country);