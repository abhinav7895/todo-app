import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


export const registerUser = asyncHandler(
    async (req, res) => {

        const { fullName, email, password } = req.body;

        const isUserExist = await User.findOne({ email });
        // if user already exists : 
        if (isUserExist) {
            throw new ApiError(409, "User already exists");
        }

        const user = await User.create({
            fullName: fullName,
            email: email,
            password: password
        })

        const accessToken = user.generateAccessToken();

        const options = {
            secure: false, // false for development
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
        }

        return res
            .status(201)
            .cookie("accessToken", accessToken, options)
            .json(new ApiResponse(
                201, {
                _id: user._id,
                fullName: user.fullName,
                email: user.email
            },
                "User created successfully"
            ));
    }
)



export const signinUser = asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await user.isPasswordCorrect(password))) {
            throw new ApiError(401, "Invalid email or password");
        }

        const options = {
            secure: false, // Set to false for development over HTTP
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // 1 day expiration
        }
        const accessToken = user.generateAccessToken();

        return res.status(200).cookie("accessToken", accessToken, options).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email
        });


    }
)


export const signOutUser = asyncHandler(async (_, res) => {
    const options = {
        secure: false, // Set to false for development over HTTP
        httpOnly: true,
        expires: new Date('2000-01-01T00:00:00') // 1 day expiration
    }
    return res.status(200).clearCookie("accessToken", options).json({ message: "User signed out successfully" });
})

