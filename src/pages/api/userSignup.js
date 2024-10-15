import Users from "@/models/Users";
import db from "@/utils/db";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const jwtSecret = "laiba012"; // This should be in an environment variable

export default async function handler(req, res) {
    let success = false;

    if (req.method === "POST") {

        await db.connect();

        try {
            const { name, email, password, location } = req.body;

            let findUser = await Users.findOne({ email });
            if (!findUser) {

                // Generate salt and hash password
                const salt = await bcryptjs.genSalt(10);
                const hashedPassword = await bcryptjs.hash(password, salt);

                // Create new user in the database
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
                const authToken = jwt.sign(data, jwtSecret);
                success = true;

                // Send success response
                res.json({ success, authToken });

            } else {
                return res.status(400).json({success, error: "account with this email Already exists"})
            }

        } catch (error) {
            // Send error response
            res.status(500).json({ error: error.message });
        } finally {
            // Always disconnect from the database after processing the request
            await db.disconnect();
        }
    } else {
        // Handle non-POST requests
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
