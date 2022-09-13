import { Router } from "express";

import {
  createTarget,
  readTargets,
  updateTarget,
  deleteTarget,
} from "../controllers/targetControllers.js";

const router = Router();

router.route("/").post(createTarget).get(readTargets);
router.route("/:id").put(updateTarget).delete(deleteTarget);

export default router;
