import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


const Course = ({ course }) => {
    const { courseName, studyField: { name }, price, slug } = course
    const { data } = useSelector(state => state.admin);

    return (
        <div className='p-8 border border-gray-400 rounded-lg flex flex-col justify-between space-y-3'>
            <h5 className='text-blue-700 font-bold text-lg'>{name}</h5>
            <h4 className='font-bold text-2xl'>{courseName}</h4>
            <span className='text-xl font-bold text-darkBlue'>TND {price}</span>
            <div className='flex justify-between'>
                <Link to="/courses/detail" className="bg-sky-700 text-white px-3 py-1 self-start rounded-md">Savoir plus</Link>
                {data && (<Link to={`/admin/courses/${slug}/edit`} className="bg-orange-700 text-white px-3 py-1 self-start rounded-md">Edit</Link>)}
            </div>
        </div>
    )
}

export default Course