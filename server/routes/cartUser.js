const express = require("express");
const { CartItem, CartUser } = require("../models");
const router = express.Router();




router.get("/",(req,res)=> {
    CartItem.findAll({
        where:{
            userId: 2
        }
    })
    .then((items)=> {
        const precios = [];
        const cantidad = [];
        for(let i = 0; i < items.length; i++) {
            precios.push(items[i].dataValues.price)
            cantidad.push(items[i].dataValues.quantity)
        }
        return [precios,cantidad]
    })
    .then((preciosYcantidad)=>{
        const total = [];
        for(let i = 0; i < preciosYcantidad[0].length; i++) {
            total.push(preciosYcantidad[0][i]*preciosYcantidad[1][i])
        }
        const final = total.reduce((a,b)=>a+b)
        return final
    })
    .then((final)=>{
        CartUser.findOne({
            where: {
                userId: 2
            }
        })
        .then((cartUser)=>{
            cartUser.update({total:final})
        })
    })
    .then(()=>res.sendStatus(202))
})



module.exports = router;