import { Schema, model, Document } from "mongoose";

interface User extends Document {
  _id: string,
  name?: String,
  email?: String,
  phone?: String,
  cpf?: String,
  description: String,
  password?: String,
  active: Boolean,
  photo: String,
}

const UserModel = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, required: true },
  cpf: { type: String, unique: true, required: true },
  description: { type: String },
  password: { type: String, required: true },
  photo_url_id: String,
  photo_url: String,
  instructor: Boolean,
  studant: Boolean,
  active: Boolean,
}, {
  timestamps: true,
});
export default model<User>('user', UserModel);