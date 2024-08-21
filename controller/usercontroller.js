const usermodel=require("../model/usermodel")
const bcrypt=require("bcrypt")


const createuser=async(req,res)=>{

    const { firstname, lastname, email, password } =req.body;

    try{
        const registeruser = new usermodel({
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:password,
        });

        await registeruser.save();
        res.status(201).json({
            success:true,
            Message:"user register successfully",
            registeruser,
        });
    }
    catch(error) {
        res.status(500).json
({      success:false,
        message:"user register fail",
        error:error.Message,
})

    }
}
 const getuser =async (req, res)=>{
    try {
        const user = await usermodel.find();
        res.status(201).json({
            success: true,
            message: "user fetch successfully",
            user,

        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "user fetching error",
            error: error,

        })
        
    }
 }



const login= async(req,res)=>{
    
    const {email, password}= req.body;

    try{
        const loginuser=new usermodel({
            email:email,
           password:password
        });
        await  loginuser.save();
        res.status(201).json({
            success:true,
            message:"the user login successfully",
            loginuser
        })

    }
    catch(error){
        req.status(500).json({
            success:false,
            message:"the user cannot login",
            error:error.message,
        })
    }

}
module.exports ={createuser, login, getuser }