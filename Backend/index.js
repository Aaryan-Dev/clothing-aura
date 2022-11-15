const express = require("express");
var cors = require('cors');
const { connection } = require("./Config/db");
const { Member } = require("./Routes/Member.routes");
const { authentication } = require("./Middleware/Authentication");
const { authorization } = require("./Middleware/Authorization");
const { Dashboard } = require("./Routes/Dashboard.Routes");
const { DataRouter } = require("./Routes/Data.Routes");
const { SignupRoute } = require("./Routes/Signup.Routes");
const { LoginRoute } = require("./Routes/Login.Routes");
const { CartRoute } = require("./Routes/Cart.Routes");
const app = express();
require("dotenv").config();
app.get('/', (req, res) => {
    res.send("hello users");
})
app.use(express.json());
app.use(cors());
app.use('/member', Member);
app.use('/dashboard', authentication, authorization('admin'), Dashboard);
app.use('/data', DataRouter);
app.use('/resources/images', express.static('images'));
app.use("/signup", SignupRoute)
app.use("/login", LoginRoute)
app.use("/cart", CartRoute)
app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Connected To DB");
    } catch (err) {
        console.log(err);
    }
    console.log("Listening To Port", process.env.PORT);
})