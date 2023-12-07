import express from "express";
import { CreateAccount, Login, UpdateProfile, Userprofile } from "./controllers/UserController";
import dotenv from "dotenv"
import { connectDB } from "./db";
import authentication from "./middleware/Authentication";

// database connection
dotenv.config();
connectDB();

// middleware
const app = express();
app.use(express.json())

import UserRoute from './Routes/UserRoute';
import SchoolRoute from "./Routes/SchoolRoute"

// route pages
app.use(UserRoute);
app.use("/school", SchoolRoute);


app.listen(8000, () => {
    console.log("User service listening on port 8000");
}) 