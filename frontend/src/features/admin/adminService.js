import axios from 'axios';

const API_URL = '/api/users/'

// Container for adminService
const adminService = {};

// Login user service
adminService.login = async (userData) => {
    const response = await axios.post(API_URL + 'signin', userData);
    return response.data
}


export default adminService