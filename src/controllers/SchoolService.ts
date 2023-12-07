import { Request, Response } from "express"
import { School } from "../models/SchoolModel";
import { StudentsType } from "../types";
import { User } from "../models/UserModel";


export const AddSchoolDetails = async (req: Request, res: Response) => {
    try {
        const { name, state, district, pin } = req.body;
        const isSchoolExist = await School.findOne({ name }); 
        if (isSchoolExist) {
            return res.status(409).json({ message: "School already exist", success: false })
        }
        const newSchool = await School.create({
            name, state, district, pin
        })
        res.status(201).json({ message: "School added successfully", newSchool, success: true })
    } catch (error) {
        res.status(500).json({ message: "Internal error", success: false })
    }
}
export const SchoolVerificaion = async (req: Request, res: Response) => {
    try {
        const { schoolId } = req.params;
        const isSchoolExist = await School.findById(schoolId);
        if (!isSchoolExist) {
            return res.status(404).json({ message: "School not exist", success: false })
        }
        isSchoolExist.verified = true;
        await isSchoolExist.save();
        res.status(201).json({ message: "School verification successfully",  success: true })
    } catch (error) {
        res.status(500).json({ message: "Internal error", success: false })
    }
}
export const RequestTojoinSchool = async (req: Request, res: Response) => {
    try {
        const { schoolId } = req.params;
        const { studentName, studentId } = req.body;
        const isSchoolExist = await School.findById(schoolId);
        if (!isSchoolExist) {
            return res.status(404).json({ message: "School not exist", success: false })
        }
        if (isSchoolExist.students.length > 0) {
            const studentAlreadyAdded = isSchoolExist.students.find((student: StudentsType) => student.studentId === studentId);
            if (studentAlreadyAdded) {
                return res.status(409).json({ message: "Student alrady added", success: false })
            }
        }
        isSchoolExist.students.push({ studentName, studentId });
        const user = await User.findById(studentId);
        user.schoolId = schoolId;
        await user.save();
        await isSchoolExist.save();
        res.status(201).json({ message: "student added successfully", success: true })
    } catch (error) {
        res.status(500).json({ message: "Internal error", success: false })
    }
}
export const CreateChatMessage = async (req: Request, res: Response) => {
    try {
        const { schoolId } = req.params;
        const { message, studentName, studentId } = req.body;
        console.log(schoolId)
        const isSchoolExist = await School.findById(schoolId);
        if (!isSchoolExist) {
            return res.status(404).json({ message: "School not exist", success: false })
        }
        isSchoolExist.groupChat.push({ message, studentName, studentId });
        await isSchoolExist.save();
        res.status(201).json({ message: "message sent successfully", success: true })
    } catch (error) {
        res.status(500).json({ message: "Internal error", success: false })
    }
}
export const showChatMessages = async (req: Request, res: Response) => {
    try {
        const { schoolId } = req.params;
        const isSchoolExist = await School.findById(schoolId);
        if (!isSchoolExist) {
            return res.status(404).json({ message: "School not exist", success: false })
        }
        const chats = isSchoolExist.groupChat;
        res.status(201).json({ message: "message sent successfully",chats, success: true })
    } catch (error) {
        res.status(500).json({ message: "Internal error", success: false })
    }
}

