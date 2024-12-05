const Employee = require("../models/employee-model");

const empCreate=async (req,res)=>{
    try {
        console.log(req.body)
        const {f_Id,f_Name,f_Email,f_Mobile, f_Designation,f_gender,f_Course,f_Createdate}=req.body
        const f_Image = req.file ? req.file.path : null;
        const empExist=await Employee.findOne({f_Id})
        if(empExist){
            return res.status(400).json({msg:"Employee Exist"})
        }
        
        const employeeCreated=await Employee.create({f_Id,f_Image,f_Name,f_Email,f_Mobile, f_Designation,f_gender,f_Course,f_Createdate})
        res.status(201).json({message:"Employee Created",employee: employeeCreated})
    } catch (error) {
        res.status(500).json({message:'Internal Server Error'})
    }
}

module.exports={empCreate}