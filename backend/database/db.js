import mongoose from "mongoose";


const MONGO_URI = "mongodb+srv://restaurant:restaurant@cluster0.kamcw0r.mongodb.net/?retryWrites=true&w=majority";

export const db = () => {
    mongoose.connect(MONGO_URI, {
        dbName:"restaurant"
    }).then(()=>{
        console.log("Connected to database successfully")
    }).catch(err=>{
        console.log(`Some error occured while connecting to database ${err}`);
    })
}