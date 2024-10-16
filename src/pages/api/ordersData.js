import Orders from "@/models/Orders";
import db from "@/utils/db";

export default async function handler(req, res) {

    await db.connect();

    if (req.method === "POST") {
        let { order_date, order_data, email } = req.body;

        // Insert order_date at the beginning of order_data
        let data = [...order_data]; // Spread to avoid mutating original array
        data.splice(0, 0, { order_date });

        try {
            // Check if there's an existing order for the email
            let existingOrder = await Orders.findOne({ email });

            if (existingOrder) {
                // Update existing order by pushing new data
                await Orders.findOneAndUpdate(
                    { email },
                    { $push: { order_data: data } }
                );
                res.json({ success: true });
            } else {
                // Create a new order for this email
                await Orders.create({
                    email,
                    order_data: [data],
                });
                res.json({ success: true });
            }
        } catch (error) {
            res.status(500).json({ error: "Server error", message: error.message });
        } finally {
            await db.disconnect();
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
        await db.disconnect();
    }
}
