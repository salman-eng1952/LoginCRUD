const express = require("express")
const {createuser,login,getuser}=require("../controller/usercontroller")
const router = express.Router();

router.post("/createUser",createuser);
router.post("/login",login);
router.get("/getuser",getuser)
module.exports=router;