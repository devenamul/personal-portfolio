import dotenv from "dotenv"
dotenv.config();
import express from "express"
import colors from "colors"
import cors from "cors"
import mongoDBConnect from "./config/db.js"
import adminRoute from './routes/adminRoute.js'


// init expres 
const app = express()

// ecvironment variable
const PORT = process.env.PORT || 9090;

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


//set static
app.use(express.static("public"))

//routes
app.use(adminRoute)



// listen
app.listen(PORT, ()=>{
    mongoDBConnect()
    console.log(`Server running on port ${PORT}`.bgGreen.black);
    
})