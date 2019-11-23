import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";

export const sigup = async (req: Request, res: Response) => {

    // saving a new user
    const { username, email, password } = req.body;
    const user: IUser = new User({
        username,
        email,
        password
    });

    user.password = await user.encryptPassword(user.password);
    const savedUser = await user.save();

    // token
    const token: string = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || 'toketoken');

    res.header('auth-token', token).json({
        message: "User saved",
        user: savedUser
    });
}

export const signin = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    const user = await User.findOne({ email })
    if (!user) return res.status(400).json("Email or Password is wrong");

    const rightPassword: boolean = await user.validatePassword(password);
    if (!rightPassword) return res.status(400).json("Invalid Password");

    //token
    const token: string = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET || 'toketoken', {
        expiresIn: 60 * 60
    });

    res.header('auth-token', token).json(user);


}

export const profile = async (req: Request, res: Response) => {
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(401).json("User not found");
    res.send(user);
}