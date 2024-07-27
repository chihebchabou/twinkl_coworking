import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Button, Card } from "flowbite-react";


const Course = ({ course }) => {
    const { courseName, studyField: { name }, price, slug } = course
    const { data } = useSelector(state => state.admin);

    return (
        <Card href='#' onClick={e => e.preventDefault()} className="max-w-md">
            <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                {courseName}
                <span className='text-xl block dark:text-gray-400'>{name}</span>
            </h5>

            <span className='text-xl font-bold text-brightRedLight'>TND {price}</span>

            <Link className='flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' to={`/courses/${slug}`}>
                Read more
                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </Link>

            {data && <Link className='flex justify-center items-center text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800' to={`/admin/courses/${slug}/edit`}>
                Editer
                <svg className="-mr-1 ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                </svg>
            </Link>}
        </Card>
    );

    // return (
    //     <div className='p-8 border border-gray-400 rounded-lg flex flex-col justify-between space-y-3'>
    //         <h5 className='text-blue-700 font-bold text-lg'>{name}</h5>
    //         <h4 className='font-bold text-2xl'>{courseName}</h4>
    //         <span className='text-xl font-bold text-darkBlue'>TND {price}</span>
    //         <div className='flex justify-between'>
    //             <Link to={`/courses/${slug}`} className="bg-sky-700 text-white px-3 py-1 self-start rounded-md">Savoir plus</Link>
    //             {data && (<Link to={`/admin/courses/${slug}/edit`} className="bg-orange-700 text-white px-3 py-1 self-start rounded-md">Edit</Link>)}
    //         </div>
    //     </div>
    // )
}

export default Course