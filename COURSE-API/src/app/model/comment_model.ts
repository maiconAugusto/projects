import mongoose, { Types } from 'mongoose';

interface Comment {
  comment: string;
  active: boolean;
  user_id: string;
  lesson_id: string;
}

const comment = new mongoose.Schema({
  comment: { type: 'string', required: true },
  active: { type: Boolean, required: true, default: true },
  user_id: {
    type: Types.ObjectId,
    ref: 'user',
    required: true,
  },
  lesson_id: {
    type: Types.ObjectId,
    ref: 'lesson',
    required: true,
  },
},{
  timestamps: true,
});
export default mongoose.model<Comment>('comment', comment);