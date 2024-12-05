require("dotenv").config()
const express=require("express")
const app=express()
const router=require('./router/auth-router')
const empRouter=require('./router/employee-router')
const connectDb=require('./utils/db')
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173" }));

//middleware
app.use(express.json())

app.use("/api/auth",router)
app.use("/api/emp",empRouter)



const PORT=5000
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server is running at port 5000")
    })
})