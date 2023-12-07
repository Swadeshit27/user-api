import { Document, type ObjectId } from "mongoose";

export interface StudentsType {
  studentName: string;
  studentId: string;
}

export interface IUser extends Document {
  name: string;
  age: number;
  email: string;
  password: string;
  sex?: string;
  phone?: number;
  state?: string;
  schoolId?: ObjectId;
  standard?: number;
  completedModules?: string[];
  avatarId?: number;
  preferredLanguage?: string;
  coins?: number;
  experience?: string;
  achivements?: string[]
}
export interface SchoolType extends Document {
  name: string;
  state: string;
  district: string;
  pin: number;
  students: StudentsType[],
  groupChat:
  {
    studentName: String,
    studentId: String,
    message: String,
    time: Date,
  }[];
  coins: number,
  rank: number,
  verified: Boolean
}
