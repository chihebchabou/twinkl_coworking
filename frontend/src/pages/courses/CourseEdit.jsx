import React, { useState } from 'react'
import CourseForm from './CourseForm'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useGetCourse } from '.';

const CourseEdit = () => {
    const { slug } = useParams();
    const { course, setCourse, status, message, error } = useGetCourse(slug);

    const [skill, setSkill] = useState('');


    const { courseName, duration, price, description, skills, studyField } = course

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
            setCourse({ ...course, skill: "", skills: [...course.skills, skill] });
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log({ courseName, duration, price, description, skills, studyField });
        // dispatch(createCourse({ courseName, duration, price, description, skills, studyField }))

    }


    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='mb-6 w-full pb-4 text-2xl self-start border-black border-b'>Editer une formation</h1>
            <CourseForm onSubmit={onSubmit} course={course} onChange={onChange} onAddSkill={onAddSkill} />
        </div>
    )
}

export default CourseEdit