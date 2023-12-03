import { Document, type ObjectId } from "mongoose";

interface UserSchoolData {
  name: string;
  verified: boolean;
}

export interface IUser extends Document {
  name: string;
  age: number;
  phone?: number;
  email?: string;
  state: string;
  school?: ObjectId;
  standard: number;
  completedModules: number;
  avatarId: number;
}
