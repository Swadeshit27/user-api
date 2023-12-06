import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express"

const authentication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers["authorization"]?.split(" ")[1];
        if (token) {
            jwt.verify(token, process.env.SECRET_KEY!, (err, data) => {
                if (err) {
                    return res.status(401).json({ message: "unauthorized User", success: false });
                } else {
                    req.body.userId = data?.id;
                    next();
                }
            });
        }
    } catch (error) {
        res.status(500).json({ message: "Token is missing or Invalid", success: false });
    }
};

export default authentication;
