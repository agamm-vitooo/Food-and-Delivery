import foodModel from '../models/foodModel.js';
import fs from 'fs';

// Add food item
const addFood = async(req, res) => {
    let image_filename = req.file ? req.file.filename : null; // Retrieve file name from multer

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename, // Save image file name
    });

    try {
        await food.save();
        res.status(201).json({ success: true, message: 'Food added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error adding food item' });
    }
};

// Get all food items
const listFood = async(req, res) => {
    try {
        const foods = await foodModel.find({});
        res.status(200).json({ success: true, data: foods });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error fetching food list' });
    }
};

// Update food item
const updateFood = async(req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.status(404).json({ success: false, message: 'Food item not found' });
        }

        // If a new image is uploaded, replace the old one
        if (req.file) {
            if (food.image) {
                // Remove old image
                fs.unlink(`uploads/${food.image}`, (err) => {
                    if (err) console.error('Error deleting file:', err);
                });
            }
            food.image = req.file.filename;
        }

        // Update other fields
        food.name = req.body.name || food.name;
        food.description = req.body.description || food.description;
        food.price = req.body.price || food.price;

        await food.save();
        res.status(200).json({ success: true, message: 'Food updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error updating food item' });
    }
};

// Remove food item
const removeFood = async(req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (food) {
            // Delete the image file if it exists
            if (food.image) {
                fs.unlink(`uploads/${food.image}`, (err) => {
                    if (err) console.error('Error deleting file:', err);
                });
            }
            await foodModel.findByIdAndDelete(req.body.id);
            res.status(200).json({ success: true, message: 'Food removed successfully' });
        } else {
            res.status(404).json({ success: false, message: 'Food not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error removing food item' });
    }
};

export { addFood, listFood, updateFood, removeFood };