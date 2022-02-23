import mongoose, { Types } from 'mongoose';

interface SessionCourse {
  title: string;
  active: boolean;
  course_id: string;
}

const session_course = new mongoose.Schema({
  title: { type: 'string', required: true },
  active: { type: Boolean, required: true, default: true },
  course_id: {
    type: Types.ObjectId,
    ref: 'course',
    required: true,
  }
},{
  timestamps: true,
});
export default mongoose.model<SessionCourse>('session_course', session_course);