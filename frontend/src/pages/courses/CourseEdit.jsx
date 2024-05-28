import React, { useState } from 'react'
import CourseForm from './CourseForm'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCourse } from '.';
import { useDispatch } from 'react-redux';
import { updateCourse } from '../../features/course/courseSlice';

const CourseEdit = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { course, setCourse, status, message, error } = useGetCourse(slug);

    const [skill, setSkill] = useState('');


    const { courseName, duration, price, description, skills, studyField } = course;

    const onChange = e => {
        if (e.target.name === "skill") {
            setSkill(e.target.value)
        } else if (e.target.name === "studyField") {
            setCourse({ ...course, studyField: { ...course.studyField, name: e.target.value } });

        } else {
            setCourse({ ...course, [e.target.name]: e.target.value });
        }
    }

    const onAddSkill = () => {
        if (!skill) {
            toast.error("Vous devez entrer une competence")
        } else {
            setCourse({ ...course, skills: [...course.skills, skill] });
            setSkill('');
        }
    }

    const onRemoveSkill = (skill) => {
        console.log(course.skills)
        console.log(skill)
        setCourse(prev => ({ ...prev, skills: prev.skills.filter(element => element !== skill) }))
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log({ courseName, duration, price, description, skills, studyField: studyField.name });
        dispatch(updateCourse({ slug, courseData: { courseName, duration, price, description, skills, studyField: studyField.name } }))
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='mb-6 w-full pb-4 text-2xl text-center border-gray-600 border-b dark:text-white'>Editer une formation</h1>

            <CourseForm onSubmit={onSubmit} course={course} skill={skill} onChange={onChange} onAddSkill={onAddSkill} onRemoveSkill={onRemoveSkill} />
        </div>
    )
}

export default CourseEdit