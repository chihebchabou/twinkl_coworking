import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import Course from "./Course";
import { useEffect } from "react";
import { useFetchCourses } from ".";
import { toast } from "react-toastify";

const Courses = () => {
    const { courses, status, message, error } = useFetchCourses();

    const { data } = useSelector(state => state.admin);

    return (
        <section></section>
    )
}

export default Courses