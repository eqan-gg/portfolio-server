import express from 'express';
import mongoose from 'mongoose'; 
import cors from 'cors';
import contactRoutes  from './ContactRoute.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());


app.use("/", contactRoutes );

mongoose.connect(process.env.MONGO_URL, {
    
});

app.listen(3000);
