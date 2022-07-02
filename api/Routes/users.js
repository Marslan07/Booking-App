import express from "express";
import { DeleteUser, getAllUser, getUser, updatedUser } from "../Models/Contoller/userController.js";
import{ verifyAdmin, verifyToken, verifyUser} from "../Utils/verifyToken.js"

const router=express.Router();



// router.get("/checkoutauthentication", verifyToken ,(req,res,next)=>{
//     res.send("hello user, you are logged in")
// })
// router.get("/checkuser/:id", verifyUser ,(req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin ,(req,res,next)=>{
//     res.send("hello Admin, you are logged in and you can delete all accounts")
// })

/////Update/////
router.put("/:id", verifyUser, updatedUser);
/////Delete/////
router.delete("/:id",verifyUser,  DeleteUser);
/////Get/////
router.get("/:id", verifyUser, getUser);
/////Get All/////
router.get("/", verifyAdmin, getAllUser);

export default router