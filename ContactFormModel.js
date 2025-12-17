import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL)

const contactSchema = new mongoose.Schema(
    {
        name : String,
        email : String,
        message : String
    }
)


// module.exports = mongoose.model("ContactForm",contactSchema);

export default mongoose.model("ContactForm",contactSchema);