import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "./adminService";

const initialState = {
    data: null,
    status: "idle", // 'idle' 'pending' 'failed' 'succeeded'
    error: ""
}

// Login user
export const login = createAsyncThunk('admin/login', async (userData, thunkAPI) => {
    try {
        return await adminService.login(userData);
    } catch (error) {
        console.log(error);
        const message =
            (error.message && error.response.data && error.response.status && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue({ message, status: error.response.status });
    }
});

// Profile user
export const profile = createAsyncThunk('admin/profile', async (userData, thunkAPI) => {
    try {
        return await adminService.profile();
    } catch (error) {
        console.log(error);
        const message =
            (error.message && error.response.data && error.response.status && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue({ message, status: error.response.status });
    }
});

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        reset: (state) => {
            state.status = 'idle';
            state.error = "";
        }
    },
    extraReducers: builder => {
        builder.addCase(login.pending, state => {
            state.status = 'pending'
        }).addCase(login.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        }).addCase(login.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        }).addCase(profile.pending, state => {
            state.status = 'pending'
        }).addCase(profile.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        }).addCase(profile.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
    }
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer