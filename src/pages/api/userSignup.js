import Users from "@/models/Users";
import db from "@/utils/db";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    let success = false;

    if (req.method === "POST") {

        await db.connect();

        try {
            const { name, email, password, location } = req.body;

            let findUser = await Users.findOne({ email });
            if (!findUser) {

                const salt = await bcryptjs.genSalt(10);
                const hashedPassword = await bcryptjs.hash(password, salt);

                // Create new user
                const user = await Users.create({
                    name,
                    email,
                    password: hashedPassword,
                    location,
                });

                // Prepare data for JWT
                const data = {
                    user: {
                        id: user._id,
                    },
                };

                // Generate JWT token
                const authToken = jwt.sign(data, process.env.jwtSecret);
                success = true;

                // Send success response
                res.json({ success, authToken });

            } else {
                return res.status(400).json({success, error: "account with this email Already exists"})
            }

        } catch (error) {
            res.status(500).json({ error: error.message });
        } finally {
            await db.disconnect();
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
