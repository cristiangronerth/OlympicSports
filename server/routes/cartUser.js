const express = require("express");
const { validateAuth } = require("../middleware/auth");
const { CartItem, CartUser } = require("../models");
const router = express.Router();

router.get("/",validateAuth,(req,res)=> {

    const { id } = req.user

    CartItem.findAll({
        where:{
            userId: id
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
                userId: id
            }
        })
        .then((cartUser)=>{
            cartUser.update({total:final})
             .then((updated) => res.send(updated.total))
        })
    })
})



module.exports = router;