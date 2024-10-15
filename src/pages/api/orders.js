import Orders from "@/models/Orders";
import db from "@/utils/db";

export default async function handler(req, res) {
    await db.connect();

    if (req.method === "POST") {
        let { email } = req.body;

        try {
            let data = await Orders.findOne({ email });
            if (data) {
                res.status(200).json({ order_data: data });
            } else {
                res.status(404).json({ error: "No orders found for this email" });
            }
        } catch (error) {
            res.status(500).json({ error: "Server error: " + error.message });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }

    await db.disconnect();
}
