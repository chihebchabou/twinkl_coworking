// Dependencies
import Customer from "../models/Customer.mjs";

// Container for Course Controller
const CustomerController = {}

CustomerController.register = async (req, res) => {
    // Get data from request body
    const { firstName, lastName, phone, email, course } = req.body;

    // Validate request data
    const { error, value } = validate({ firstName, lastName, phone, email, course });

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
        customer
    })
}

// Export the module
export default CustomerController;

