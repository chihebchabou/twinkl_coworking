// Dependencies


import SocialNetwork, { validate } from "../models/SocialNetwork.mjs";
import User from "../models/User.mjs";
import ResponseError from "../utils/ResponseError.mjs";

// Container for Course Controller
const SocialNetworkController = {};

// @route GET /api/social-networks
SocialNetworkController.index = async (req, res) => {
    const socialNetworks = await SocialNetwork.find();
    res.json(socialNetworks)
};

// @route POST /api/social-networks
SocialNetworkController.store = async (req, res) => {
    // Get data from request body
    const { socialNetwork, socialNetworkURI } = req.body;

    // Validate request data
    const { error, value } = validate({ socialNetwork, socialNetworkURI });

    // Check for errors
    if (error) {
        console.log(error)
        throw new ResponseError(400, error.message);
    }

    // Check if socialNetwork exists
    const socialNetworkExists = await SocialNetwork.findOne({ socialNetwork });
    if (socialNetworkExists)
        throw new ResponseError(400, `${socialNetwork} déjà existe`);

    // Add socialNetwork to the database
    const socialNetworkData = await SocialNetwork.create({ user: req.user._id, ...value });

    // Return successful response
    res.status(201).json({
        message: 'SocialNetwork added successfully',
        socialNetwork: socialNetworkData._doc
    });
};

// @route GET /api/social-networks/:id
SocialNetworkController.show = async (req, res) => {
    // Get id from request params
    const { id } = req.params;

    // Lookup social network
    const socialNetwork = await SocialNetwork.findById(id);

    // If not found, respond with error message
    if (!socialNetwork)
        throw new ResponseError(404, 'not found')

    // Respond
    res.json(socialNetwork);
};

// @route PUT /api/social-networks/:id
SocialNetworkController.update = async (req, res) => {
    // Get id from request params
    const { id } = req.params;

    // Get user id
    const userId = req.user.id;

    // Get data from request body
    const { socialNetwork, socialNetworkURI } = req.body;

    // Validate request data
    const { error, value } = validate({ socialNetwork, socialNetworkURI });

    // Check for errors
    if (error) {
        console.log(error)
        throw new ResponseError(400, error.message);
    }

    // Check if user exists
    const user = await User.findById(userId);
    if (!user)
        throw new ResponseError(404, 'User not found')

    const updatedSocialNetwork = await SocialNetwork.findOneAndUpdate({ _id: id, user: userId }, value, { new: true });

    if (!updatedSocialNetwork)
        throw new ResponseError(404, 'SocialNetwork not found');

    res.json({ message: 'SocialNetwork updated successfully', socialNetwork: updatedSocialNetwork._doc })
};

// @route DELETE /api/social-networks/:id
SocialNetworkController.destroy = async (req, res) => {
    // Get id from request params
    const { id } = req.params;

    // Get user id
    const userId = req.user.id;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user)
        throw new ResponseError(404, 'User not found')

    const deletedSocialNetwork = await SocialNetwork.findOneAndDelete({ _id: id, user: userId });

    if (!deletedSocialNetwork)
        throw new ResponseError(404, 'SocialNetwork not found');

    res.json({ message: 'Course deleted successfully', socialNetwork: deletedSocialNetwork._doc })
};

// Export the module
export default SocialNetworkController;