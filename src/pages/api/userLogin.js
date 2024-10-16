import Users from "@/models/Users";
import db from "@/utils/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res){
    let success = false;

    if(req.method === "POST"){

        await db.connect();
        
        try {
            const {email, password} = req.body;
            let user = await Users.findOne({email});

            if(!user){
                return res.status(400).json({success, error: "try logging in with different email"})
            }

            const pwdCompare = await bcrypt.compare(password, user.password);
            if(!pwdCompare){
                return  res.status(400).json({success, error: "your password is wrong"})
            }

            const data = {
                user: {
                    id: user._id,
                },
            };

            const authToken = jwt.sign(data, process.env.jwtSecret);
            success = true;

            res.json({ success, authToken });

        } catch (error) {
            res.send("Server error")
        }finally {
            await db.disconnect();
        }
    }else {
        res.status(405).json({ message: "Method Not Allowed" });
    }  
}