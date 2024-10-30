// Depenencies
import { Schema, model } from "mongoose";
import Joi from "joi";

const customerSchema = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  course: { type: String, required: true, trim: true },
  // studyField: { type: String, required: true, trim: true },
  status: { type: String, enum: ["pending", "active"], default: "pending", trim: true },
}, {
  timestamps: true
});

export const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().messages({'string.empty': '"Prénom"  n\'est pas autorisé à être vide'}),
    lastName: Joi.string().required().messages({'string.empty': '"Nom"  n\'est pas autorisé à être vide'}),
    phone: Joi.string().length(8).required().messages({'string.empty': '"Numéro de téléphone"  n\'est pas autorisé à être vide', "string.length": '"Numéro de téléphone" doit être de 8 caractères de long'}),
    email: Joi.string().email().required().messages({'string.empty': '"Email"  n\'est pas autorisé à être vide', 'string.email': '"Email" doit être un email valide'}),
    course: Joi.string().required().messages({'string.empty': '"Formation"  n\'est pas autorisé à être vide'}),
    // studyField: Joi.string().required(),
    status: Joi.string().default("pending"),
  });
  return schema.validate(data, { abortEarly: false });
};

const Customer = model("Customer", customerSchema);

// Export
export default Customer;
