import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCourses, getCourse, reset } from "../../features/course/courseSlice";
import { toast } from "react-toastify";

export const useFetchCourses = () => {
    const dispatch = useDispatch()
    const { courses, status, message, error } = useSelector(state => state.course);
    useEffect(() => {

        console.log("Courses mounted")


        dispatch(getAllCourses());


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
};

export const useGetCourse = (slug) => {
    const [course, setCourse] = useState({
        courseName: "",
        duration: "",
        price: "",
        description: "",
        skills: [],
        studyField: { name: "" }
    });
    const dispatch = useDispatch();
    const { courses, currentCourse, status, message, error } = useSelector(state => state.course);
    useEffect(() => {
        console.log("CourseEdit mounted")

        if (!courses) {
            dispatch(getAllCourses());
        }

        if (!currentCourse) {
            dispatch(getCourse(slug));
        }


        if (status === 'succeeded' && message) {
            toast.success(message)
        }

        if (currentCourse) {
            setCourse(currentCourse)
        }
        const dispatchReset = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000))
            dispatch(reset())
        }
        return () => dispatchReset()

    }, [currentCourse])

    useEffect(() => {
        if (status === 'failed' && error) {
            toast.error(error.message)
            dispatch(reset())
        }
    }, [status])

    return { course, setCourse, status, message, error }
}