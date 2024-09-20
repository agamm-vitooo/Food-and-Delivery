import mongoose from 'mongoose';

export const connectDB = async() => {
    await mongoose
        .connect('mongodb+srv://FnD:Agamvito7-@cluster0.eofxh.mongodb.net/fnd')
        .then(() => console.log('DB Connected'));
};