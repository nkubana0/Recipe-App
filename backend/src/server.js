import express from "express";
import {ENV} from "./config/env.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.get("/api/health", (req, res) => {
    res.status(200).json({success: true});
});

app.post("/api/favorites", async(req, res) => {

    try{
        const{userId, recipeId, title, imahe, cookTime, services} = req.body;
    } catch (error) {}
}) 

app.listen(PORT,() => {
    console.log("Server is running on port:", PORT);
}
);