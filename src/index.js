import express, { json } from "express";
import mongoose from "mongoose";
import countryRouter from "./routes/county-route.js"
import {} from "dotenv/config";



const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const app = express();

app.use(json());
app.use("", countryRouter);

async function startApp(){
    try{
        await mongoose.connect(DB_URL);
        app.listen(PORT, ()=>{
            console.log(`Server started on port ${PORT}`);
        })
    }catch(error){
        console.log(error)
    }
}

startApp();