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

// route pages
app.post('/create', CreateAccount);
app.post('/login', Login);
app.post('/profile', authentication, Userprofile)
app.post('/profile/update', authentication, UpdateProfile)

app.listen(8000, () => {
    console.log("User service listening on port 8000");
}) 