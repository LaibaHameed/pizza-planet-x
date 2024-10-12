// import PizzaData from "@/models/PizzaData";
// import db from "@/utils/db";

// export default async function handler(req, res) {
//     try {
//         await db.connect();


//         if (req.method === "POST") {
//             // Fetch all pizza data from the database
//             let data = await PizzaData.findById(req.body.item)
//             res.status(200).json({ data });
//         }
//     } catch (error) {
//         console.error("Error in API handler:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     } finally {
//         if (process.env.NODE_ENV === "production") {
//             await db.disconnect();
//         }
//     }
// }
