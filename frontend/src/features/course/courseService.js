import axios from 'axios';

const API_URL = '/api/courses/'

// Container for adminService
const courseService = {};

// Get all courses service
courseService.getAllCourses = async () => {
    const response = await axios.get(API_URL);
    return response.data
}

// Get single course service
courseService.getCourse = async (slug) => {
    const response = await axios.get(API_URL + slug);
    return response.data;
}

// Create new course service
courseService.createCourse = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data
}

// Update course service

// Delete course service

export default courseService;