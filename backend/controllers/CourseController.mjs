// Dependencies

// Container for Course Controller
const CourseController = {};

// @route GET /api/courses
CourseController.index = async (req, res) => {
    res.json({ courses: [] })
};

// @route POST /api/courses
CourseController.store = async (req, res) => {
    res.json({ message: 'Course added successfully' })
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