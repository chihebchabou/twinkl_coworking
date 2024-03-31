import User, { validate } from "../models/User.mjs";
import ResponseError from "../utils/ResponseError.mjs";

const UserController = {};

UserController.register = async (req, res) => {
    // Get data from request body
    const { firstName, lastName, phone, email, address, socialMedia } = req.body;

    // Validate request data
    const { error, value } = validate({ firstName, lastName, phone, email, address, socialMedia });

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
    const user = await User.create(value);

    // Return successful response
    res.status(201).json({
        message: 'User Registered successfully',
        user
    })
}

export default UserController;