import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/authRoute.js"
import userRoutes from "./routes/userRoute.js"
import messageRoutes from "./routes/messageRoute.js"
import connectToMongoDB from "./db/connectToMongoDb.js"
import { app } from "./socket/socket.js"
import path from "path"
dotenv.config();

// const app = express()
const PORT = process.env.PORT || 5000

const __dirname = path.resolve()
app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.send(path.join(__dirname,"frontend","dist","index.html"))
})

app.use(express.json()) //? to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()) //^ To get the saved cookies

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.get("/",(req,res)=>{
    res.send("Hello World")
})


app.listen(PORT,()=> {
    connectToMongoDB()
    console.log("Server is running in",PORT)})