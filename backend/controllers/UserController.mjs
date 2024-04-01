import User, { validate } from "../models/User.mjs";
import ResponseError from "../utils/ResponseError.mjs";
import { hash } from "../utils/helpers.mjs";

const UserController = {};

UserController.signup = async (req, res) => {
    // Get data from request body
    const { firstName, lastName, phone, email, address, password } = req.body;

    // Validate request data
    const { error, value } = validate({ firstName, lastName, phone, email, address, password });

    // Check for errors
    if (error) {
        console.log(error)
        throw new ResponseError(400, error.message);
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists)
        throw new ResponseError(400, "Déjà inscrit");

    // Add user to the database
    const user = await User.create({ ...value, password: hash(password) });

    // Return successful response
    res.status(201).json({
        message: 'User Registered successfully',
        user: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            email: user.email,
            address: user.address,
            socialMedia: user.socialMedia
        }
    })
};

UserController.signin = async (req, res) => { };

UserController.signout = async (req, res) => { };

export default UserController;