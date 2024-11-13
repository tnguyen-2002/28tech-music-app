import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connect database successfully!");
    } catch (error) {
        console.log("Connect database unsuccessfully!");
        console.log(error);
    }
}