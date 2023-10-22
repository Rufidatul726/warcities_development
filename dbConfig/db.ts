import mongoose from "mongoose";

export default function connectDB() {
    try{
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.once('connected', () => {
            console.log('MongoDB database connection established successfully');
        });

        connection.on('error', (err) => {
            console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
            process.exit();
        });

    }catch(err){
        console.log("Something went wrong" + err)
    }
}