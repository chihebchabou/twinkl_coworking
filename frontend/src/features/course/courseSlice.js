import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseService from "./courseService";

const initialState = {
    data: null,
    status: "idle", // 'idle' 'pending' 'failed' 'succeeded'
    message: "",
    error: null
}

// Get all courses
export const getAllCourses = createAsyncThunk('course/getAll', async (_, thunkAPI) => {
    try {
        return await courseService.getAllCourses();
    } catch (error) {
        console.log(error);
        const message =
            (error.message && error.response.data && error.response.status && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue({ message, status: error.response.status });
    }
});

// Create new course
export const createCourse = createAsyncThunk('course/create', async (courseData, thunkAPI) => {
    try {
        return await courseService.createCourse(courseData);
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
    name: "course",
    initialState,
    reducers: {
        reset: (state) => {
            state.status = 'idle';
            state.message = ''
            state.error = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(getAllCourses.pending, state => {
            state.status = 'pending'
        }).addCase(getAllCourses.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        }).addCase(getAllCourses.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        }).addCase(createCourse.pending, state => {
            state.status = 'pending'
        }).addCase(createCourse.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.message = action.payload.message
            state.data.push(action.payload.course);
        }).addCase(createCourse.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
    }
})

export const { reset } = adminSlice.actions;
export default adminSlice.reducer