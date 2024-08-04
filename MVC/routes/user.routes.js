const { Router } = require("express")
const { getUser, createUser } = require("../controllers/user.controller")
const ValidUser = require("../middleware/valid_Userdata")



const userRouter = Router()

userRouter.get("/", getUser)
userRouter.post("/", ValidUser, createUser)


module.exports = userRouter