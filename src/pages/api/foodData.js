import PizzaData from "@/models/PizzaData";
import db from "@/utils/db";

export default async function handler(req, res) {
    try {
        await db.connect();

        if (req.method === "POST") {
            // Insert multiple pizzas from the request body
            for (let i = 0; i < req.body.length; i++) {
                let pizza = new PizzaData({
                    name: req.body[i].name,
                    category: req.body[i].category,
                    foodType: req.body[i].foodType,
                    price: req.body[i].price,
                    description: req.body[i].description,
                    img: req.body[i].img,
                });
                await pizza.save();
            }
            res.status(200).json({ message: "Data saved successfully" });
        }

        if (req.method === "GET") {
            // Fetch all pizza data from the database
            let data = await PizzaData.find();
            res.status(200).json({ data });
        }
    } catch (error) {
        console.error("Error in API handler:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    } finally {
        if (process.env.NODE_ENV === "production") {
            await db.disconnect();
        }
    }
}
