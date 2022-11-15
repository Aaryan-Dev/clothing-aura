const express = require('express');
const CartRoute = express.Router();

CartRoute.get("/", (req, res) => {
    const { token } = req.header();
})

module.exports={
    CartRoute
}