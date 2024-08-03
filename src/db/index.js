import mongoose from "mongoose";
import { DB_NAME, DB_URL } from "../constants.js";


const ConnectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${DB_URL}/${DB_NAME}`
        );
        console.log(
            `\n MongoDB connected!! DB Host : ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MongoDB Connection Error", error);
        process.exit(1);
    }
};

export default ConnectDB;