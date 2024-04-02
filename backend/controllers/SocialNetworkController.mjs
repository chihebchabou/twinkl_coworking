// Dependencies


import SocialNetwork, { validate } from "../models/SocialNetwork.mjs";
import ResponseError from "../utils/ResponseError.mjs";

// Container for Course Controller
const SocialNetworksController = {};

// @route GET /api/social-networks
SocialNetworksController.index = async (req, res) => {
};

// @route POST /api/social-networks
SocialNetworksController.store = async (req, res) => {
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
        throw new ResponseError(400, "Déjà inscrit");

    // Add socialNetwork to the database
    const socialNetworkData = await SocialNetwork.create({ user: req.user._id, ...value });

    // Return successful response
    res.status(201).json({
        message: 'SocialNetwork added successfully',
        socialNetworkData
    });
};

// @route GET /api/social-networks/:id
SocialNetworksController.show = async (req, res) => {
    const { id } = req.params;
    res.json({ course: id })
};

// @route PUT /api/social-networks/:id
SocialNetworksController.update = async (req, res) => {
    const { id } = req.params;
    res.json({ message: 'Course updated successfully', course: id })
};

// @route DELETE /api/social-networks/:id
SocialNetworksController.destroy = async (req, res) => {
    const { id } = req.params;
    res.json({ message: 'Course deleted successfully', course: id })
};

// Export the module
export default SocialNetworksController;