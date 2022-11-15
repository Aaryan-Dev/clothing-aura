const express = require("express")
const cors = require("cors")
const {connection} = require("./config/db")
const {UserModel} = require("../Models/User.models")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { authentication } = require("./middlewares/authentication");


require("dotenv").config()

const app = express();

app.use(cors());
app.use(express.json())


app.post("/signup", async (req, res) => {
    const {name, email, password} = req.body

    const isUser = await UserModel.findOne({email})
    if(isUser){
        res.send({"msg" : "User already exists, try logging in"})
    }
    else {
        bcrypt.hash(password, 4, async function(err, hash) {
        if(err){
            res.send({"msg":"Something went wrong, please try again later"})
        }
        const new_user = new UserModel({
            name,
            email,
            password : hash
        })
        try{
            await new_user.save()
            res.send({"msg" : "Sign up successfull"})
        }
        catch(err){
            res.send({"msg" : "Something went wrong, please try again"})
        }
    });
}
})


app.post("/login", async (req, res) => {
    const {email, password} = req.body
    const user = await UserModel.findOne({email})
    const hashed_password = user.password;
    const user_id = user._id;
    console.log(user)
    console.log(user_id)
    bcrypt.compare(password, hashed_password, function(err, result) {
          if(err){
            res.send({"msg" : "Something went wrong, try again later"})
          }
          if(result){
            const token = jwt.sign({user_id}, process.env.SECRET_KEY);  
            res.send({message : "Login successfull", token})
          }
          else{
            res.send({"msg" : "Login failed"})
          }
    });
})


app.listen(process.env.PORT||8090, async () => {
    try{
        await connection
        console.log("Connection to DB successfully")
    }
    catch(err){
        console.log("Error connecting to DB")
        console.log(err)
    }
    console.log("Listening on PORT 8090")
})