// # Mongoose User schema

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
   password: String, // hashed in real apps
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);