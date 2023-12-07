import { models, model, Schema } from "mongoose";
import { IUser } from "../types";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sex: {
        type: String,
    },
    phone: {
        type: Number
    },
    schoolId: {
        type: String
    },
    completedModules: {
        type: [String],
        default: []
    },
    preferredLanguage: {
        type: String,
        default: "english",
    },
    coins: {
        type: Number,
        default: 0,
    },
    experience: {
        type: String
    },
    achivements: {
        type: [String],
        default: [],
    },
});

export const User = models.User || model<IUser>("user", userSchema);