// Dependencies
import jwt from 'jsonwebtoken';
import User from '../models/User.mjs';
import ResponseError from '../utils/ResponseError.mjs';

export const auth = async (req, res, next) => {
    const token = req.cookies.jwt;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.userId);
        next();
    } catch (error) {
        console.log(error)
        throw new ResponseError(401, 'Accés refusé');
    }
};