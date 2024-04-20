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
        <section>
            {message}
            <div className={`field flex ${data ? 'justify-between px-5' : 'justify-center'} text-center bg-black py-3 text-white font-medium`}>
                <div className="space-x-4">
                    <a href="#" >Bootcamp</a>
                    <a href="#" >Marketing</a>
                    <a href="#" >Data</a>
                    <a href="#" >Design</a>
                </div>
                {data && <div>
                    <Link to="/admin/courses/create">Add new course</Link>
                </div>}
            </div>
            <div className="container mx-auto mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Card */}
                {status === "pending" ? (<div style={{ fontSize: 50 }}>Loading...</div>) : courses && courses.map(course => <Course key={course._id} course={course} />)}
            </div>
        </section>
    )
}

export default Courses