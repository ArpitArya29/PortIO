import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { addAddress, deleteAddress, getAddress, updateAddress } from "../controllers/address.controller.js";

const addressRouter = express.Router();

addressRouter.get("/", authMiddleware, getAddress);
addressRouter.post("/create", authMiddleware, addAddress);
addressRouter.put("/update/:id", authMiddleware, updateAddress);
addressRouter.delete("/delete/:id", authMiddleware, deleteAddress);

export default addressRouter;