import User, { authenticate, validate } from "../models/User.mjs";
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

UserController.signin = async (req, res) => {
    // Get data from request body
    const { email, password } = req.body;

    // Get the user
    const user = await authenticate(email, password);

    // Login user (generate access token)
    user.login(res);

    // Return successful response
    res.json({
        message: "User signed in successfully",
        user: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            email: user.email,
            address: user.address,
            socialMedia: user.socialMedia
        }
    });
};

UserController.signout = async (req, res) => { };

UserController.profile = async (req, res) => {
    res.json({
        message: "User signed in successfully",
        user: {
            _id: req.user._id,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            phone: req.user.phone,
            email: req.user.email,
            address: req.user.address,
            socialMedia: req.user.socialMedia,
        }
    })
}

export default UserController;