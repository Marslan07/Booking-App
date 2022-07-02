import express from "express";
import { createRoom, DeleteRoom, getAllRoom, getRoom, updatedRoom, updateRoomAvailability } from "../Models/Contoller/roomController.js";
import { verifyAdmin } from "../Utils/verifyToken.js";

const router=express.Router();


/////Create/////

router.post("/:hotelid", verifyAdmin, createRoom);

/////Update/////
router.put("/:id", verifyAdmin, updatedRoom);
router.put("/availability/:id",  updateRoomAvailability);
/////Delete/////
router.delete("/:id/:hotelid", verifyAdmin, DeleteRoom);
/////Get/////
router.get("/:id", getRoom);
/////Get All/////
router.get("/",getAllRoom);


export default router