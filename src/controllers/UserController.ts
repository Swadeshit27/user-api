import { Request, Response } from "express"
import { User } from "../models/UserModel";
import jwt from "jsonwebtoken"
import { School } from "../models/SchoolModel"


export const CreateAccount = async (req: Request, res: Response) => {
    try {
        const { name, email, password, age } = req.body;
        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            return res.status(409).json({ message: "user already exist", success: false })
        }
        // const salt = await bcrypt.genSalt(10);
        const hashPassword = await Bun.password.hash(password);
        const newUser = await User.create({
            name, email, password: hashPassword, age
        })
        res.status(201).json({ message: "account created successfully", newUser, success: true })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal error", success: false })
    }
}
export const Login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const isUserExist = await User.findOne({ email });
        if (!isUserExist) {
            return res.status(404).json({ message: "user not exist", success: false })
        }
        const isValidPass = await Bun.password.verify(password, isUserExist.password);
        if (!isValidPass) {
            return res.status(401).json({ message: "unauthorized user", success: false })
        }
        const token = await jwt.sign({ id: isUserExist._id }, process.env.SECRET_KEY!, { expiresIn: 604800 });
        res.status(201).json({ message: "log in successful", token, success: true })
    } catch (error) {
        res.status(500).json({ message: "Internal error", success: false })
    }
}
export const Userprofile = async (req: Request, res: Response) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "user not exist", success: false })
        }
        res.status(201).json({ user, success: true })
    } catch (error) {
        res.status(500).json({ message: "Internal error", success: false })
    }
}
export const UpdateProfile = async (req: Request, res: Response) => {
    try {
        const { userId, age, sex, phone } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "user not exist", success: false })
        }
        if (age) user.age = age;
        if (sex) user.sex = sex;
        if (phone) user.phone = phone;
        await user.save();
        res.status(201).json({ message: "Profile updated", success: true });
    } catch (error) {
        res.status(500).json({ message: "Internal error", success: false })
    }
}

export const UpdatePoints = async (req: Request, res: Response) => {
    try {
        const { userId, coins } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "user not exist", success: false })
        }
        const school = await School.findById(user.schoolId);
        user.coins += coins;
        school.coins += coins;
        await user.save();
        await school.save();
        res.status(201).json({ message: "Coins updated", success: true });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal error", success: false })
    }
}
