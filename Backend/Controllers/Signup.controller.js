const { UserModel } = require("../Models/User.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SignupController = () => async (req, res) => {

    const { name, email, password } = req.body

    const isUser = await UserModel.findOne({ email })
    if (isUser) {
        res.send({ "msg": "User already exists" })
    }
    else {
        bcrypt.hash(password, 4, async function (err, hash) {
            if (err) {
                res.send({ "msg": "Something went wrong" })
            }
            const new_user = new UserModel({
                name,
                email,
                password: hash
            })
            try {
                await new_user.save()
                res.send({ "msg": "Signup Successfull" })
            }
            catch (err) {
                res.send({ "msg": "err" })
            }
        });
    }
}

module.exports={SignupController}
