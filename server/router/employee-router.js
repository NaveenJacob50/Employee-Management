const express=require("express")
const router=express.Router()
const empController=require("../controllers/employee-controller.js")
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage });

router.route("/addemp").post(upload.single("f_Image"), empController.empCreate);

module.exports=router