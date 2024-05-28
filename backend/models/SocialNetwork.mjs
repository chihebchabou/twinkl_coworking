// Depenencies
import { Schema, model } from "mongoose";
import Joi from "joi";

export const socialNetworkSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    socialNetwork: { type: String, required: true, trim: true },
    socialNetworkURI: { type: String, required: true, trim: true },
}, {
    timestamps: true
  });

export const validate = (data) => {
    const schema = Joi.object({
        socialNetwork: Joi.string().required(),
        socialNetworkURI: Joi.string().uri().required(),
    });
    return schema.validate(data, { abortEarly: false })
}

const SocialNetwork = model('SocialNetwork', socialNetworkSchema);

// Export 
export default SocialNetwork;