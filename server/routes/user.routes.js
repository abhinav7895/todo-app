import { Router } from "express";
const router = Router();
import { registerUser, signOutUser, signinUser } from "../controllers/user.controllers.js";
import { verifyJwt } from "../middlewares/verifyJWT.js";

router
    .post("/register", registerUser)
    .post("/signin", signinUser)
    .post("/signout",verifyJwt, signOutUser)


export default router;
/**
 * 
 * User routes : 
 *  /api/users/register : for register
 *  /api/users/signin : for signin
 *  /api/users : for get user info
 *  many more
 */