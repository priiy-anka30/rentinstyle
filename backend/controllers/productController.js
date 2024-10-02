import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, sizes, bestseller } = req.body; //subCategory

        // Ensure req.files is available
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ success: false, message: "No files were uploaded." });
        }

        const image = req.files ? Object.values(req.files).flat() : [];

        // Upload images to Cloudinary
        const imagesUrl = await Promise.all(image.map(async (item) => {
            try {
                const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            } catch (uploadError) {
                console.error("Upload error:", uploadError);
                throw new Error("Failed to upload image to Cloudinary.");
            }
        }));

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            // subCategory,
            sizes: JSON.parse(sizes),
            image: imagesUrl, // Ensure correct property name
            bestseller: bestseller === "true",
            date: Date.now()
        };

        console.log(productData);
        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "Product added successfully" });
    } catch (error) {
        console.error("Error in addProduct:", error);
        res.json({ success: false, message: error.message });
    }
};

const listProducts= async (req, res) => {
    try {
        const products=await productModel.find({});
        res.json({success:true, products})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

const removeProduct= async (req, res) => {
    try {
       await productModel.findByIdAndDelete(req.body.id);
       res.json({success:true, message: "Product removed successfully"}) 
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
    
}

const singleProduct= async (req, res) => {
    try {
        const {productId}=req.body;
        const product=await productModel.findById(productId);
        res.json({success:true, product})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

export {addProduct, listProducts, removeProduct, singleProduct}