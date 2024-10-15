import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        location: { type: String, required: true },
        date: {type: Date, default: Date.now},
        isAdmin: { type: Boolean, default: false },
    },
    { collection: 'Users' },
    {
        timestamps: true
    }
);

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

export default Users;