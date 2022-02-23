import mongoose from 'mongoose';

interface Category {
  name: string;
  active: boolean;
}

const category = new mongoose.Schema({
  name: { type: 'string', required: true },
  active: { type: Boolean, required: true, default: true },
}, {
  timestamps: true,
});
export default mongoose.model<Category>('category', category);