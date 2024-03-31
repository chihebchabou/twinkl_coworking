// Depenencies
import { Schema, model } from "mongoose";
import Joi from "joi";

const userSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    socialMedia: { type: [String], required: true, trim: true },
});

export const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        phone: Joi.string().pattern(/^(\+\d{1,2}\s)?\(?\d{2}\)?[\s.-]\d{3}[\s.-]\d{3}$/).required(),
        email: Joi.string().email().required(),
        address: Joi.string().required(),
        socialMedia: Joi.array().items(Joi.string().uri()),
    });
    return schema.validate(data, { abortEarly: false })
}

const User = model('User', userSchema);

// Export 
export default User;