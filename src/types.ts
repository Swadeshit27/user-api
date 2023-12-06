import { Document, type ObjectId } from "mongoose";

interface UserSchoolData {
  name: string;
  verified: boolean;
}

export interface IUser extends Document {
  name: string;
  age: number;
  email: string;
  password: string;
  sex?: string;
  phone?: number;
  state?: string;
  school?: ObjectId;
  standard?: number;
  completedModules?: string[];
  avatarId?: number;
  preferredLanguage?: string;
  coins?: number;
  experience?: string;
  achivements?: string[]
}
