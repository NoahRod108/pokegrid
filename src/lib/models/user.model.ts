import { Schema, model, models } from "mongoose";

// Need to ask pokeapi creators about storing api data for game

const userSchema = new Schema({
  id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

const User = models.User || model("User", userSchema);

export default User;
