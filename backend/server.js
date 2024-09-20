import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/auth.js';
import userRouter from './routes/userRoute.js';
import nodemailer from 'nodemailer';
import 'dotenv/config';
import cartRouter from './routes/cartRoute.js';

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/images', express.static('uploads')); // Serve static files

// Connect to the database
connectDB();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password from Google
    },
});

// Endpoint to handle email submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'timesquare313131@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error occurred while sending email:", error);
            return res.status(500).json({ error: 'Failed to send email', details: error });
        }
        res.status(200).json({ success: 'Email sent successfully' });
    });
});

// Routes
app.use('/api/food', foodRouter);
app.use('/api/user', userRouter);
app.use("/api/cart", cartRouter);

app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});