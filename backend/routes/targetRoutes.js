import { Router } from "express";

import {
  createTarget,
  readTargets,
  updateTarget,
  deleteTarget,
} from "../controllers/targetControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/").post(protect, createTarget).get(protect, readTargets);
router.route("/:id").put(protect, updateTarget).delete(protect, deleteTarget);

export default router;
