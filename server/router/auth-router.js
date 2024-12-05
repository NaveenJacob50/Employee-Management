const express=require("express")
const router=express.Router()
const authController=require("../controllers/auth-controller")
const signupSchema=require("../validators/auth-validator")
const validate=require("../middlewares/validate-middleware")


router.route("/login").post(authController.login)

module.exports=router