import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";


export const registerUser = async (req, res) => {
    console.log("Hello");
    try {
        const { fullName, email, password } = req.body;

        const user = await User.create({
            fullName: fullName,
            email: email,
            password: password
        });

        const apiResponse = new ApiResponse(
            201, {
            _id: user._id,
            fullName: user.fullName,
            email: user.email
        },
            "User created successfully"
        );

        const accessToken = user.generateAccessToken();

        res.cookie("accessToken", accessToken, {
            secure: false, // false for development
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
        });

        return res.status(apiResponse.statusCode).json(apiResponse);
    } catch (error) {
        console.log(error);
        const apiError = new ApiError(500, "Failed to register user", [error.message]);
        return res.status(apiError.statusCode).json({
            error: {
                ...apiError,
                message: apiError.message
            }
        });
    }
}


export const signinUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            const apiError = new ApiError(404, "User not found");
            return res.status(apiError.statusCode).json({
                error: {
                    ...apiError,
                    message: apiError.message
                }
            });
        }

        const isCorrect = await user.isPasswordCorrect(password);

        if (!isCorrect) {
            const apiError = new ApiError(401, "Incorrect password");
            return res.status(apiError.statusCode).json({
                error: {
                    ...apiError,
                    message: apiError.message
                }
            });
        }

        const apiResponse = new ApiResponse(200, {
            _id: user._id,
            fullName: user.fullName,
            email: user.email
        });
        const accessToken = user.generateAccessToken();
        console.log(accessToken);
        res.cookie("accessToken", accessToken, {
            secure: false, // Set to false for development over HTTP
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // 1 day expiration
        });
        return res.status(apiResponse.statusCode).json(apiResponse);
    } catch (error) {
        console.error(error);
        const apiError = new ApiError(500, "Internal server error", [error.message]);
        return res.status(apiError.statusCode).json({ error: apiError });
    }
}

export const signOutUser = (req, res) => {
    try {
        const expiryDate = new Date('2000-01-01T00:00:00');
        res.cookie("accessToken", "", { expires: expiryDate});
        const apiResponse = new ApiResponse(200, { message: "User signed out successfully" });
        return res.status(apiResponse.statusCode).json(apiResponse)
    } catch (error) {
        const apiError = new ApiError(500, "Failed to sign out user");
        return res.status(apiError.statusCode).json({ error: apiError });
    }
}
