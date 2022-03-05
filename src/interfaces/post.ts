import { Document } from 'mongoose';


export default interface IPost extends Document { 
    text: string;
    image: string;
    user: string;
    createdAt: Date;
}