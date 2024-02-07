import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const connectToMongoDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to MonogoDB")
    }
    catch(err){
        console.log("Error connecting to MongoDB",err)
    }
}

export default connectToMongoDB
