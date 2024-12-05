const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")

const userSchema=new mongoose.Schema({

    username:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
})



//JWT

userSchema.methods.generateToken=async function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            username:this.username,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d",
        }
    )
    } catch (error) {
        console.error(error)
    }
}


//define the model
const User=new mongoose.model("User",userSchema)

module.exports=User