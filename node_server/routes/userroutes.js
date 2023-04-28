import express from "express";
import {getUser, getUsers,login,logout,register, updateScore} from '../controllers/usermodules.js';


const router = express.Router();


router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/leaderboard",getUsers);


router.put("/ups", updateScore);

router.get("/getUser",getUser)

export default router;