import express from "express";
import { countByCity, countByType, createHotel, DeleteHotel, getAllHotel, getHotel, getHotelRooms, updatedHotel } from "../Models/Contoller/hotelController.js";
import { verifyAdmin } from "../Utils/verifyToken.js";

const router = express.Router();

/////Create/////

router.post("/", verifyAdmin, createHotel);

/////Update/////
router.put("/:id", verifyAdmin, updatedHotel);
/////Delete/////
router.delete("/:id", verifyAdmin, DeleteHotel);
/////Get/////
router.get("/find/:id", getHotel);
/////Get All/////
router.get("/",getAllHotel);


router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);






export default router;
