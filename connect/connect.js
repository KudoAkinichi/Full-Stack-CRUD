import mongoose from "mongoose";

export const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
    } catch (error) {
        throw new Error(error.message);
    }
};

