import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        foodType: { type: String, required: true },
        price: { type: Object, required: true },
        description: { type: String, required: true },
        img: { type: String, required: true },
    },
    {
        collection: 'pizzaData',
        timestamps: true, // Combine both options into one object
    }
);

const PizzaData = mongoose.models.PizzaData || mongoose.model("PizzaData", dataSchema);

export default PizzaData;
