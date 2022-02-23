import mongoose, { Types } from 'mongoose';

interface Lesson {
  title: string;
  active: boolean;
}

const lesson = new mongoose.Schema({
  title: { type: 'string', required: true },
  active: { type: Boolean, required: true, default: true },
  url_id: { type: 'string' },
  url_video: { type: 'string'},
  current: { type: Boolean, default: false },
  course_id: {
    type: Types.ObjectId,
    ref: 'course',
    required: true,
  },
  session_name: { type: 'string' },
  session_id: {
    type: Types.ObjectId,
    ref: 'session_course',
    required: true,
  }
},{
  timestamps: true,
});
export default mongoose.model<Lesson>('lesson', lesson);