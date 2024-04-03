// Depenencies
import { Schema, model } from "mongoose";
import { slugify } from "../utils/helpers.mjs";
import Joi from "joi";

const courseSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    courseName: { type: String, required: true, trim: true },
    slug: { type: String, trim: true },
    description: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    online: { type: Boolean, default: false },
});

courseSchema.pre('save', async function (next) {
    if (!this.isModified('courseName')) {
        next();
    }
    this.slug = slugify(this.courseName)
});

export const validate = (data) => {
    const schema = Joi.object({
        courseName: Joi.string().required(),
        description: Joi.string().required(),
        duration: Joi.string().required(),
        category: Joi.string().required(),
        online: Joi.boolean().default(false),
    });
    return schema.validate(data, { abortEarly: false })
}


const Course = model('Course', courseSchema);

// Export 
export default Course;