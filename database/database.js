const mongoose=require("mongoose")

const connectdb=()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("okha tha")
    })
    .catch(()=>{
        console.log("error not connected to DB")
    })
}
module.exports=connectdb;