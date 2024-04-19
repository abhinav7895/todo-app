import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import jwt from "jsonwebtoken";


export const verifyJwt = async (req, res, next) => {
    console.log("Hello");
    try {
        const accessToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ");
        
        if (!accessToken) {
            return res.status(400).json(new ApiError(400, "Unauthorized Access"))
        }

        const decodeToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        console.log(decodeToken);

        const user = await User.findById(decodeToken._id).select("-password");

        if (!user) {
            return res.status(404).json(new ApiError(404, "Invalid Access Token"));
        }

        req.user = user;
        return next();
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Something went wrong at our end while logging out the user"));
    }
}