import express from "express"




// init expres 
const app = express()

// ecvironment variable
dotenv.config();
const PORT = process.env.PORT || 9090;

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


//set static
app.use(express.static("api/public"))



// listen
app.listen(PORT, ()=>{
    mongoDBConnect()
    console.log(`Server running on port ${PORT}`.bgGreen.black);
    
})