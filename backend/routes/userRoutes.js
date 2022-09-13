import express from "express";

import {
  createUser,
  loginUser,
  readUser,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/me", protect, readUser);

export default router;
