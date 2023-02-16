const express = require("express")
const router = express.Router()
const {register, login} = require("../controllers/authController")
const authenticationMiddleware = require("../middlewares/authentication")

router.post("/register", authenticationMiddleware, register)
router.post("/login", authenticationMiddleware, login)

module.exports = router;