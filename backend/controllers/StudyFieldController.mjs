// Dependencies


import StudyField, { validate } from "../models/StudyField.mjs";
import User from "../models/User.mjs";
import ResponseError from "../utils/ResponseError.mjs";

// Container for Course Controller
const StudyFieldController = {};

// @route GET /api/study-field
StudyFieldController.index = async (req, res) => {
    const studyFields = await StudyField.find();
    res.json(studyFields)
};

// @route DELETE /api/study-field/:id
StudyFieldController.destroy = async (req, res) => {
    // Get id from request params
    const { id } = req.params;

    // Get user id
    const userId = req.user.id;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user)
        throw new ResponseError(404, 'User not found')

    const deletedStudyField = await StudyField.findOneAndDelete({ _id: id, user: userId });

    if (!deletedStudyField)
        throw new ResponseError(404, 'StudyField not found');

    res.json({ message: 'Course deleted successfully', StudyField: deletedStudyField._doc })
};

// Export the module
export default StudyFieldController;