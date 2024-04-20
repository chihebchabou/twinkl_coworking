import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCourses, reset } from "../../features/course/courseSlice";
import { toast } from "react-toastify";

export const useFetchCourses = () => {
    const dispatch = useDispatch()
    const { data: courses, status, message, error } = useSelector(state => state.course);
    useEffect(() => {

        if (!courses) {
            dispatch(getAllCourses());
        }

        if (message) {
            toast.success(message)
        }


        const dispatchReset = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000))
            dispatch(reset())
        }
        return () => dispatchReset()
    }, [])

    return { courses, status, message, error }
}