// Depenencies
import { Schema, model } from 'mongoose';
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import { socialNetworkSchema } from './SocialNetwork.mjs';
import { hash } from '../utils/helpers.mjs';
import ResponseError from '../utils/ResponseError.mjs';

const userSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    facebook: { type: String, required: true, trim: true },
    instagram: { type: String, required: true, trim: true },
    // socialNetwork: { type: [socialNetworkSchema], trim: true, default: [] },
    password: { type: String, required: true, min: 8, trim: true },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.login = function (res) {
  const token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  console.log(token);

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export const validate = (data, update = false) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    // phone: Joi.string().pattern(/^(\+\d{1,2}\s)?\(?\d{2}\)?[\s.-]\d{3}[\s.-]\d{3}$/).required(),
    phone: Joi.string().pattern(/^\d{8}$/).required(),
    email: Joi.string().email().required(),
    address: Joi.string().required(),
    facebook: Joi.string().uri().required(),
    instagram: Joi.string().uri().required(),
    password: !update ? Joi.string().min(8).required() : Joi.string().min(8),
  });
  return schema.validate(data, { abortEarly: false });
};

export const authenticate = async (email, password) => {
  // Lookup the user
  const user = await User.findOne({ email });

  // If user email and password are valid return the user, otherwise responde with error message
  if (user && user.password === hash(password)) return user;
  else throw new ResponseError(400, 'Invalid credentials');
};

const User = model('User', userSchema);

// Export
export default User;
