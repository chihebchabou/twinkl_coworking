import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "../features/admin/adminSlice";
import courseReducer from "../features/course/courseSlice";

export const store = configureStore({
    reducer: {
        admin: adminReducer,
        course: courseReducer
    }
})