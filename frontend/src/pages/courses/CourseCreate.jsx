import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { createCourse, reset } from '../../features/course/courseSlice';
import { useNavigate } from 'react-router-dom';
import { useFetchCourses } from '.';
import CourseForm from './CourseForm';

const CourseCreate = () => {
    const [course, setCourse] = useState({
        courseName: "",
        duration: "",
        price: "",
        description: "",
        skills: [],
        studyField: ""
    });

    const [skill, setSkill] = useState('');

    const { courseName, duration, price, description, skills, studyField } = course
    const { courses, status, message, error } = useFetchCourses();

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onChange = e => {
        if (e.target.name === "skill") {
            setSkill(e.target.value)
        } else {
            setCourse({ ...course, [e.target.name]: e.target.value });
        }
    }


    const onAddSkill = () => {
        if (!skill) {
            toast.error("Vous devez entrer une competence")
        } else {
            setCourse({ ...course, skills: [...course.skills, skill] });
            setSkill('')
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log({ courseName, duration, price, description, skills, studyField });
        dispatch(createCourse({ courseName, duration, price, description, skills, studyField }))

    }

    useEffect(() => {
        if (status === 'succeeded' && message) {
            navigate('/admin/courses')
        }

        if (status === 'failed' && error) {
            toast.error(error.message)
            setCourse({
                courseName: "",
                duration: "",
                price: "",
                skill: "",
                description: "",
                skills: [],
                studyField: ""
            })
            dispatch(reset())
        }

    }, [status])

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='mb-6 w-full pb-4 text-2xl self-start border-black border-b'>Ajouter une nouvelle formation</h1>
            <CourseForm onSubmit={onSubmit} course={course} skill={skill} onChange={onChange} onAddSkill={onAddSkill} />
        </div>
    )
}

export default CourseCreate