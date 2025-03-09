import express from "express"
import { shouldBeLoggedIn , shouldBeAdmin } from "../controllers/test.controllers.js";
const router = express.Router();
import { verifyToken } from "../middleware/verifyToken.js";

router.get("/should-be-logged-in", verifyToken,shouldBeLoggedIn);

router.get("/should-be-admin",shouldBeAdmin);

export default router;