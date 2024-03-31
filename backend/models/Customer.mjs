// Depenencies
import { Schema, model } from "mongoose";
import Joi from "joi";

const customerSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    course: { type: String, required: true, trim: true },
});

export const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        phone: Joi.string().pattern(/^(\+\d{1,2}\s)?\(?\d{2}\)?[\s.-]\d{3}[\s.-]\d{3}$/).required(),
        email: Joi.string().email().required(),
        course: Joi.string().required(),
    });
    return schema.validate(data, { abortEarly: false })
}

const Customer = model('Customer', customerSchema);

// Export 
export default Customer;