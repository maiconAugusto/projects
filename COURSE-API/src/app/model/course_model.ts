import mongoose, { Types } from 'mongoose';

interface Course {
  title: string;
  sub_title: string;
  description: string;
  url_image_id: string;
  url_image: string;
  active: boolean;
  category_id: any;
  level_id: any;
  user_id: any;
  requirements: string;
}

const course = new mongoose.Schema({
  title: { type: 'string', required: true },
  sub_title: { type: 'string', required: true },
  requirements: { type: 'string' },
  description: { type: 'string', required: true },
  url_image_id: { type: 'string', required: true },
  url_image: { type: 'string', required: true },
  active: { type: Boolean, required: true, default: false },
  price: { type: 'string', required: true },
  category_id: { 
    type: Types.ObjectId,
    ref: 'category',
    required: true,
  },
  level_id: { 
    type: Types.ObjectId,
    ref: 'level',
    required: true,
  },
  user_id: { 
    type: Types.ObjectId,
    ref: 'user',
    required: true,
  },
}, {
  timestamps: true,
});
export default mongoose.model<Course>('course', course);