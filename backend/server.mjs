// Dependencies
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.mjs';
import courseRouter from './routes/courseRoute.mjs';
import connectDB from './config/db.mjs';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middleware/errorMiddleware.mjs';
import customerRouter from './routes/customerRoute.mjs';
import socialNetworkRouter from './routes/socialNetworkRoute.mjs';
import studyFieldRouter from './routes/studyFieldRoute.mjs';
import path from 'node:path'

// Run dotenv config
dotenv.config();

// Connect to Database
connectDB();

// Init app
const app = express();

// Define the port
const port = process.env.PORT || 5000;

// Middlewares use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Resources use
app.use('/api/users', userRouter);
app.use('/api/customers', customerRouter);
app.use('/api/courses', courseRouter);
app.use('/api/social-networks', socialNetworkRouter);
app.use('/api/study-fields', studyFieldRouter);


if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));
}

// Error Middlewares use
app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

// Listen to the port
app.listen(port, () => console.log(`Server is running on port ${port}`))