import { models, model, Schema } from "mongoose";
import { SchoolType } from "../types";

const SchoolSchema = new Schema<SchoolType>({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    pin: {
        type: Number,
        required: true,
    },
    students: Array,
    groupChat: [
        {
            studentName: String,
            studentId: String,
            message: String,
            time: {
                type: Date,
                default: Date.now,
            }
        }
    ],
    coins: {
        type: Number,
        default: 0
    },
    rank: Number,
    verified: {
        type: Boolean,
        default: false
    }

});

export const School = models.School || model<SchoolType>("school", SchoolSchema);