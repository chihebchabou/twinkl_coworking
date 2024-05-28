import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerService from "./customerService";

const initialState = {
    customers: null,
    status: "idle", // 'idle' 'pending' 'failed' 'succeeded'
    message: "",
    error: null
};

// Register new customer
export const registerCustomer = createAsyncThunk('customers/register', async (data, thunkAPI) => {
    try {
        return await customerService.registerCustomer(data);
    } catch (error) {
        console.log(error);
        const message =
            (error.message && error.response.data && error.response.status && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue({ message, status: error.response.status });
    }
});

// Get all registered customers
export const getAllCustomers = createAsyncThunk('customers/getAll', async (_, thunkAPI) => {
    try {
        return await customerService.getAllCustomers();
    } catch (error) {
        console.log(error);
        const message =
            (error.message && error.response.data && error.response.status && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue({ message, status: error.response.status });
    }
});

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        reset: (state) => {
            state.status = 'idle';
            state.message = ''
            state.error = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(registerCustomer.pending, state => {
            state.status = "pending"
        }).addCase(registerCustomer.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.message = action.payload.message;
        }).addCase(registerCustomer.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        }).addCase(getAllCustomers.pending, state => {
            state.status = "pending"
        }).addCase(getAllCustomers.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.customers = action.payload;
        }).addCase(getAllCustomers.rejected, (state, action) => {
            state.status = "failed";
            state.customers = null;
            state.error = action.payload;
        })
    }
});

export const { reset } = customerSlice.actions;
export default customerSlice.reducer;