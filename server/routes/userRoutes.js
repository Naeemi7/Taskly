import express from "express";
import { createUser } from "../controllers/userController.js";
import { userValidator } from "../middleware/userValidator.js";
import { validateUserRules } from "../middleware/userSanitizer.js";

const router = express.Router();

// Unprotected Routes
router.post("/register", validateUserRules, userValidator, createUser);

export default router;
