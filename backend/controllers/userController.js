import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import generateToken from '../utils/generateToken.js';

// Fungsi untuk login user
export const loginUser = async(req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" });
    }
    try {
        const user = await userModel.findOne({ email: email.trim().toLowerCase() });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }
        const token = createToken(user._id);
        res.status(200).json({ success: true, message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Fungsi untuk register user baru
export const registerUser = async(req, res) => {
    let { name, email, password } = req.body;

    // Validasi jika name, email, dan password ada di body request
    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "Name, email, and password are required" });
    }

    // Menghapus spasi di awal dan akhir, dan mengubah email menjadi huruf kecil
    email = email.trim().toLowerCase();
    password = password.trim();

    try {
        // Validasi format email
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        // Validasi panjang password
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
        }

        // Cek apakah user sudah ada berdasarkan email
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Hash password sebelum disimpan
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("Hashed password:", hashedPassword);

        // Buat user baru
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        // Simpan user baru ke database
        const user = await newUser.save();

        // Buat token dan kirim respons
        const token = createToken(user._id);
        return res.status(201).json({ success: true, message: "Registration successful", token });
    } catch (error) {
        console.error("Register Error: ", error.message);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};

// Fungsi untuk membuat JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

export default { loginUser, registerUser };