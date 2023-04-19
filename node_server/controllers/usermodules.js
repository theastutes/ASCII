import { User } from "../models/usermodel.js";
import bcrypt from 'bcrypt';
import ErrorHandler from "../middlewares/error.js";
import { sendCookie } from "../cookies.js";

export const login = async (req, res, next) => {

    try {
        const { email, password } = req.body;


        const user = await User.findOne({ email }).select("+password");

        if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));


        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch)
            return next(new ErrorHandler("Invalid Email or Password", 400));

        sendCookie(user, res, `Welcome Back,${user.name}`, 200);
    } catch (error) {
        next(error);
    }

};

export const register = async (req, res) => {
    try {
        const { name, email, password, roll, clas, admyr,username } = req.body;

        let user = await User.findOne({ email });

        if (user)
            return next(new ErrorHandler("User Already Exists", 404));

        const hashedPassword = await bcrypt.hash(password, 10);

        user = await User.create(
            {
                name,
                email,
                password: hashedPassword,
                roll,
                clas,
                admyr,
                username,

            });

        sendCookie(user, res, "Registerred Successfully", 201);
    } catch (error) {
        // next(error);
        console.log(error)
    }

};

export const getUsers = async (req, res) => {

    const udata = await User.find({});
    res.send(udata);


};

export const logout = async (req, res) => {
    res
        .status(200)
        .cookie("token", "", {
            Expires: new Date(Date.now),
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development" ? false : true,
        })
        .json({
            success: true,
        })

}