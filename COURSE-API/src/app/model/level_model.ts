import mongoose from 'mongoose';

interface Level {
  title: string;
  active: boolean;
}

const level = new mongoose.Schema({
  title: { type: 'string', required: true },
  active: { type: Boolean, required: true, default: true },
},{
  timestamps: true,
});
export default mongoose.model<Level>('level', level);