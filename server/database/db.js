import mongoose from "mongoose";

const MONGODB_URI='mongodb+srv://Yashd03:Yash123@cluster0.ykwyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DBConnection=async()=>{
    try {
        await mongoose.connect(MONGODB_URI,{useNewUrlParser: true});
        console.log("Database connected succesfully");
    } catch (error) {
        console.log("Error while connecting to database",error.message);
    }
}

export default DBConnection;