const express = require ("express");
const router = express.Router(); 


const User = require ("../models/User")
const { generateToken, validateToken } = require("../config/tokens");
const {validateAuth} = require("../middleware/auth")




const validateUser = require("../middleware/auth");
const { register, login, validation, logout, googlelogin } = require("../controllers/auth");
// const { profile, changePassword, users, user, searchUser } = require("../controllers/user");

router.post("/register", register) // si

router.post("/login", login); // si

router.get("/me",validateAuth, validation) // si

router.post("/logout",validateAuth, logout) // si


// router.put("/profile",validateUser,profile)

// router.put("/changePassword",validateUser,changePassword)

// router.get("/",validateUser,users)

// router.get("/user/:id",validateUser, user)

// router.get("/search",validateUser, searchUser)


module.exports = router;
