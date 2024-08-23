import FoodModel from "../models/foodModel.js";
import fs from "fs";
import foodModel from "../models/foodModel.js";


const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;


    const food = new FoodModel({
        name: req.body.name,
        description: req.body.description,
        image: image_filename,
        price: req.body.price,
        category: req.body.category,
    });

    try {
        await food.save();
        res.json({success: true, message: "Food added successfully"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success: true, data: foods});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);

        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) {
                console.log("failed to delete local image:" + err);
            } else {
                console.log('successfully deleted local image');
            }
        });
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Food deleted successfully"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

export {addFood, listFood, removeFood}
