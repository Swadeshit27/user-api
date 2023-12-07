import express from "express";
import { CreateAccount, Login, UpdatePoints, UpdateProfile, Userprofile } from "../controllers/UserController";
import authentication from "../middleware/Authentication";

const router = express.Router();

router.post('/create', CreateAccount);
router.post('/login', Login);
router.post('/profile', authentication, Userprofile)
router.post('/profile/update', authentication, UpdateProfile);
router.post('/savecoins', authentication, UpdatePoints)

export default router;