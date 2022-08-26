const express = require("express");
const router = express.Router();
const CartUser = require("../models/CartUser");
const CartItem = require("../models/CartItem");

//tengo que crear 1 carrito que tiene que pertenecer al usuario
//y me debe mostrar la cantidad total (precio) del valor de sus cartItems




/* router.get("/",(req,res)=> {
    CartItem.findAll({
        where:{
            userId: req.user.id
        }
    })
    .then((items)=>res.status(202).send(items))
}) */

/* router.post("/",(req,res)=> {
    CartItem.findAll()
}) */



/* router.post("/",(req,res)=> {
    CartUser.create(req.body)
    .then((cart)=>{
        const allItems = CartItem.findAll({
            where:{
                userId: req.user.id
            }
        })
    })
}) */