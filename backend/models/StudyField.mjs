// Depenencies
import { Schema, model } from "mongoose";
import Joi from "joi";

export const studyFieldSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true, trim: true },
}, {
    timestamps: true
  });

export const validate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
    });
    return schema.validate(data, { abortEarly: false })
}

const StudyField = model('StudyField', studyFieldSchema);

// Export 
export default StudyField;