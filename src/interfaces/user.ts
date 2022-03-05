import { Document } from 'mongoose';
import mongoose from 'mongoose';

export default interface IUser extends Document {
    name: string;
    email: string;
    createdAt: string;
}