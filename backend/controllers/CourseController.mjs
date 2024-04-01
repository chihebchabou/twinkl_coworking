// Dependencies

import Course, { validate } from "../models/Course.mjs";
import ResponseError from "../utils/ResponseError.mjs";

// Container for Course Controller
const CourseController = {};

// @route GET /api/courses
CourseController.index = async (req, res) => {
    res.json({ courses: [] })
};

// @route POST /api/courses
CourseController.store = async (req, res) => {
    // Get data from request body
    const { courseName, description, duration, category } = req.body;

    // Validate request data
    const { error, value } = validate({ courseName, description, duration, category });

    // Check for errors
    if (error) {
        console.log(error)
        throw new ResponseError(400, error.message);
    }

    // Check if course exists
    const courseExists = await Course.findOne({ courseName });
    if (courseExists)
        throw new ResponseError(400, "Déjà inscrit");

    // Add course to the database
    const course = await Course.create(value);

    // Return successful response
    res.status(201).json({
        message: 'Course added successfully',
        course
    });
};

// @route GET /api/courses/:id
CourseController.show = async (req, res) => {
    const { id } = req.params;
    res.json({ course: id })
};

// @route PUT /api/courses/:id
CourseController.update = async (req, res) => {
    const { id } = req.params;
    res.json({ message: 'Course updated successfully', course: id })
};

// @route DELETE /api/courses/:id
CourseController.destroy = async (req, res) => {
    const { id } = req.params;
    res.json({ message: 'Course deleted successfully', course: id })
};

// Export the module
export default CourseController;