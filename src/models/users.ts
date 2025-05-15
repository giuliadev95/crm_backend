import mongoose from "mongoose";
import { Schema } from 'mongoose';

// Document interface that defines for TypeScript the collection's data types thought for MongoDB.
interface User {
    name: string;
    surname: string;
    email:string;
}



// Schema : configuration object for each individual
const userSchema = new Schema<User> ({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// export the Model: is like a class instanced from the Schema
export const UserModel  = mongoose.model('User', userSchema);

// Object
const man = new UserModel({ name: 'name_man', surname: 'surname_man', email: 'email_man@gmail.com'});
man.name;
man.surname;
man.email;


    