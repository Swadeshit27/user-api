import { models, model, Schema } from "mongoose";
import { IUser } from "../../types";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: Number
    }
});

export const User = models.User || model<IUser>("user", userSchema);