const mongoose=require("mongoose")

const employeeSchema=new mongoose.Schema({

    f_Id: {
        type: Number, 
        required: true,
        unique: true,
    },
    f_Image: {
        type: String, 
        required: false,
    },
    f_Name: {
        type: String,
        required: [true, "Name is required"], 
        trim: true, 
        maxlength: [100, "Name must not exceed 100 characters"],
    },
    f_Email: {
        type: String,
        required: [true, "Email is required"],
        unique: true, 
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); 
            },
            message: "Invalid email format",
        },
    },
    f_Mobile: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: "Mobile number must be 10 digits",
        },
    },
    f_Designation: {
        type: String,
        required: false, 
        trim: true,
    },
    f_gender: {
        type: String,
        enum: ["Male", "Female", "Other"], 
        required: true,
    },
    f_Course: {
        type: String,
        required: false, 
        trim: true,
    },
    f_Createdate: {
        type: Date,
        default: Date.now, 
    },
})


//define the model
const Employee=new mongoose.model("Employee",employeeSchema)

module.exports=Employee