import express from "express";
import {
  signId,
  verifyEmail,
} from "../controllers/user";

const router = express.Router();


router.post("/signId/", signId); //
router.post("/verifyEmail/", verifyEmail); //
export default router;
