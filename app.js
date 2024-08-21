const dotenv=require("dotenv")
dotenv.config();
const express=require("express")
const app =express()
const port=process.env.PORT || 5000;
const connectdb=require("./database/database")
const router=require("./router/router")
const usermodel=require("./model/usermodel")
const cors = require("cors")

connectdb();
app.use(express.json());
app.use(cors());


app.use("/",router)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
}
)