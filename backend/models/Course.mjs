// Depenencies
import { Schema, model } from "mongoose";
import { slugify } from "../utils/helpers.mjs";
import Joi from "joi";
import { studyFieldSchema } from "./StudyField.mjs";

const courseSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    courseName: { type: String, required: true, trim: true },
    slug: { type: String, trim: true },
    description: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    studyField: { type: studyFieldSchema, required: true, trim: true },
    skills: { type: [String], required: true, trim: true },
    content: { type: [String], required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    online: { type: Boolean, default: false },
}, {
    timestamps: true
});

courseSchema.pre('save', async function (next) {
    if (!this.isModified('courseName')) {
        next();
    }
    this.slug = slugify(this.courseName)
});

export const validate = (data) => {
    const schema = Joi.object({
        courseName: Joi.string().required().messages({'string.empty': `"courseName" ne doit pas être vide`}),
        description: Joi.string().required().messages({'string.empty': `"description" ne doit pas être vide`}),
        duration: Joi.string().required(),
        studyField: Joi.string().required(),
        skills: Joi.array().items(Joi.string().required()).required(),
        content: Joi.array().items(Joi.string().required()).required(),
        price: Joi.number().required(),
        online: Joi.boolean().default(false),
    });
    return schema.validate(data, { abortEarly: false })
}


const Course = model('Course', courseSchema);

// Export 
export default Course;