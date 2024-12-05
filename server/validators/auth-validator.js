const {z}=require("zod")

//Creating an object schema
const signupSchema=z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least of 3 characters"})
    .max(30,{message:"Name must not be more than 30 characters"}),

    password:z
    .string({required_error:"Name is required"})
    .min(4,{message:"Password must be at least of 4 characters"})
    .max(30,{message:"Password must not be more than 30 characters"}),
})

module.exports=signupSchema