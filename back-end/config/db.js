// db.js
import mongoose from "mongoose";

// dotenv.config(); // এটা বাদ দাও, শুধু server.js-এ থাকলেই হবে

const mongoDBConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected success`.bgBlue.black);
  } catch (error) {
    console.log(`${error.message}`);
  }
};

export default mongoDBConnect;
