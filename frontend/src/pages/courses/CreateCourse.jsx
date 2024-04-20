import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { createCourse, reset } from '../../features/course/courseSlice';
import { useNavigate } from 'react-router-dom';
import { useFetchCourses } from '.';

const CreateCourse = () => {
    const [course, setCourse] = useState({
        courseName: "",
        duration: "",
        price: "",
        skill: "",
        description: "",
        skills: [],
        studyField: ""
    });

    const { courseName, duration, price, skill, description, skills, studyField } = course
    const { data: courses, status, message, error } = useFetchCourses();

    const dispatch = useDispatch();
    const navigate = useNavigate()


    const onChange = e => {
        setCourse({ ...course, [e.target.name]: e.target.value });
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
            <form onSubmit={onSubmit} className="flex flex-col space-y-3 md:px-8 w-2/3">

                <div className='flex flex-col space-y-2'>
                    <label htmlFor="courseName">Formation</label>
                    <input type="text" name="courseName" id="courseName" value={courseName} onChange={onChange} placeholder='Entrez le nom de la formation' className='p-3 outline-none border border-black focus:border-brightRed' />
                </div>


                <div className='flex flex-col space-y-2'>
                    <label htmlFor="duration">Durée</label>
                    <input type="text" name="duration" id="duration" value={duration} onChange={onChange} placeholder='Entrez la durée de la formation' className='p-3 outline-none border border-black focus:border-brightRed' />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label htmlFor="price">Prix</label>
                    <input type="text" name="price" id="price" value={price} onChange={onChange} placeholder='Entrez le prix de la formation' className='p-3 outline-none border border-black focus:border-brightRed' />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label htmlFor="skills">Compétences</label>
                    <div className='flex'>
                        <input type="text" name="skill" id="skill" value={skill} onChange={onChange} placeholder='Entrez une competence de la formation' className='flex-1 p-3 outline-none border border-black focus:border-brightRed' />

                        <button type='button' className='self-end p-3 border border-s-0 border-black bg-black text-white' onClick={onAddSkill}>ajouter </button>
                    </div>
                    {skills.map((skill, i) => (<span className='text-sm' key={i}>- {skill}</span>))}
                </div>

                <div className='flex flex-col space-y-2'>
                    <label htmlFor="studyField">Domaine</label>
                    <input list='studyFields' type="text" name="studyField" id="studyField" value={studyField} onChange={onChange} placeholder='Entrez le prix de la formation' className='p-3 outline-none border border-black focus:border-brightRed' />

                    <datalist id='studyFields'>
                        <option value="Computer Science"></option>
                        <option value="Design"></option>
                    </datalist>
                </div>

                <div className='flex flex-col space-y-2'>
                    <label htmlFor="description">Desciption</label>
                    <textarea name="description" id="description" value={description} onChange={onChange} className='p-3 outline-none border border-black focus:border-brightRed'></textarea>
                </div>


                <div className="flex justify-end">
                    <button type="submit" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">S'inscrire</button>
                </div>
            </form>
        </div>
    )
}

export default CreateCourse