// Depenencies
import { Schema, model } from "mongoose";
import Joi from "joi";

export const studyFieldSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    studyField: { type: String, required: true, trim: true },
});

export const validate = (data) => {
    const schema = Joi.object({
        studyField: Joi.string().required(),
    });
    return schema.validate(data, { abortEarly: false })
}

const StudyField = model('StudyField', studyFieldSchema);

// Export 
export default StudyField;