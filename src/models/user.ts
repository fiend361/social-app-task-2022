import mongoose, { Schema } from 'mongoose';
import IUser from "../interfaces/user";

const UserSchema: Schema = new Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        createdAt: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IUser>('User', UserSchema);