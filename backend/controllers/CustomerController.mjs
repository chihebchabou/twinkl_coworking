// Dependencies
import Customer, { validate } from "../models/Customer.mjs";
import ResponseError from "../utils/ResponseError.mjs";

// Container for Course Controller
const CustomerController = {}

CustomerController.index = async (req, res) => {
    const customers = await Customer.find();
    res.json(customers)
}

CustomerController.register = async (req, res) => {
    // Get data from request body
    const { firstName, lastName, phone, email, course, status } = req.body;

    // Validate request data
    const { error, value } = validate({ firstName, lastName, phone, email, course, status });

    // Check for errors
    if (error) {
        console.log(error)
        throw new ResponseError(400, error.message);
    }

    // Check if customer exists
    const customerExists = await Customer.findOne({ email });
    if (customerExists)
        throw new ResponseError(400, "Déjà inscrit");

    // Add customer to the database
    const customer = await Customer.create(value);

    // Return successful response
    res.status(201).json({
        message: 'Customer Registered successfully',
        customer,
        status: 201
    });
}

// Export the module
export default CustomerController;

