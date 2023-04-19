import express from "express";
import {getUsers,login,logout,register} from '../controllers/usermodules.js';


const router = express.Router();


router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/leaderboard",getUsers);

// router.get("/me", getMyProfile);

export default router;