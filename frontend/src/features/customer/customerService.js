import axios from 'axios';

const API_URL = '/api/customers/';

// Container for customerService
const customerService = {};

// Register new customer service
customerService.registerCustomer = async (data) => {
    const response = await axios.post(API_URL + "register", data);
    return response.data
}

// Get all registered customers service
customerService.getAllCustomers = async () => {
    const response = await axios.get(API_URL);
    return response.data
}

// Export the module
export default customerService;