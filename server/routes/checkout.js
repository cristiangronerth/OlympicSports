const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const User = require("../models/User");


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "olympicsportsp5",
        pass: "plataforma5",
    }
})

