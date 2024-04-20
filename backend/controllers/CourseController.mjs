// Dependencies

import Course, { validate } from "../models/Course.mjs";
import StudyField from "../models/StudyField.mjs";
import User from "../models/User.mjs";
import ResponseError from "../utils/ResponseError.mjs";

// Container for Course Controller
const CourseController = {};

// @route GET /api/courses
CourseController.index = async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
};

// @route POST /api/courses
CourseController.store = async (req, res) => {
    // Get data from request body
    const { courseName, description, duration, studyField, skills, price } = req.body;

    // Validate request data
    const { error, value } = validate({ courseName, description, duration, studyField, skills, price });

    // Check for errors
    if (error) {
        console.log(error)
        throw new ResponseError(400, error.message);
    }

    // Check if course exists
    const courseExists = await Course.findOne({ courseName });
    if (courseExists)
        throw new ResponseError(400, `${courseName} déjà existe`);

    // Check if studyField exists
    let newStudyField;
    const studyFieldExists = await StudyField.findOne({ name: studyField }).select('-user');
    if (!studyFieldExists) {
        newStudyField = new StudyField({ user: req.user._id, name: studyField });
        newStudyField = (await newStudyField.save())._doc;
        delete newStudyField.user
    } else {
        newStudyField = studyFieldExists
    }

    // Add course to the database
    const course = await Course.create({ user: req.user._id, ...value, studyField: newStudyField });

    // Return successful response
    res.status(201).json({
        message: 'Course added successfully',
        course: course._doc
    });
};

// @route GET /api/courses/:id
CourseController.show = async (req, res) => {
    // Get id from request params
    const { id } = req.params;

    // Lookup the course
    const course = await Course.findById(id);

    // Check if the course exists or not
    if (!course)
        throw new ResponseError(404, 'Course not found')

    // Return response
    res.json(course)
};

// @route PUT /api/courses/:id
CourseController.update = async (req, res) => {
    // Get id from request params
    const { id } = req.params;

    // Get user id
    const userId = req.user.id;

    // Get data from request body
    const { courseName, description, duration, studyField, skills, price } = req.body;

    // Validate request data
    const { error, value } = validate({ courseName, description, duration, studyField, skills, price });

    // Check for errors
    if (error) {
        console.log(error)
        throw new ResponseError(400, error.message);
    }

    // Check if user exists
    const user = await User.findById(userId);
    if (!user)
        throw new ResponseError(404, 'User not found');

    const updatedCourse = await Course.findOneAndUpdate({ _id: id, user: userId }, value, { new: true });

    if (!updatedCourse)
        throw new ResponseError(404, 'Course not found');

    // Make sure that slug field is updated
    await updatedCourse.save();

    res.json({ message: 'Course updated successfully', course: updatedCourse._doc })
};

// @route DELETE /api/courses/:id
CourseController.destroy = async (req, res) => {
    // Get id from request params
    const { id } = req.params;

    // Get user id
    const userId = req.user.id;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user)
        throw new ResponseError(404, 'User not found');

    const deletedCourse = await Course.findOneAndDelete({ _id: id, user: userId });

    if (!deletedCourse)
        throw new ResponseError(404, 'Course not found');

    res.json({ message: 'Course deleted successfully', course: deletedCourse._doc })
};

// Export the module
export default CourseController;