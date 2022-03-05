import mongoose, { Schema } from 'mongoose';
import IPost from "../interfaces/post";
import user from './user';

const PostSchema: Schema = new Schema(
    {
        text: {type: String, required: true},
        image: {type: String, required: true},
        user: {type: String, required: true},
        createdAt: {type: Date, required: true}
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IPost>('Post', PostSchema);