import React from 'react'
import { Link } from "react-router-dom";


const Course = ({ course }) => {
    const { courseName, studyField: { name }, price } = course
    return (
        <div className='p-8 border border-gray-400 rounded-lg flex flex-col space-y-3'>
            <h5 className='text-blue-700 font-bold text-lg'>{name}</h5>
            <h4 className='font-bold text-2xl'>{courseName}</h4>
            <span className='text-xl font-bold text-darkBlue'>TND {price}</span>
            <Link to="/courses/detail" className="bg-sky-700 text-white px-3 py-1 self-start rounded-md">Savoir plus</Link>
        </div>
    )
}

export default Course