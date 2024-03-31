// Depenencies
import { Schema, model } from "mongoose";

const courseSchema = new Schema({
    courseName: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    online: { type: Boolean, default: false },
})

const Course = model('Course', courseSchema);

// Export 
export default Course;