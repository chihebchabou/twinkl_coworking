import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "../features/admin/adminSlice";
import courseReducer from "../features/course/courseSlice";
import customerReducer from "../features/customer/customerSlice";

export const store = configureStore({
    reducer: {
        admin: adminReducer,
        course: courseReducer,
        customer: customerReducer
    }
})