import React from 'react'
import { useGetCourse } from '.';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { slug } = useParams();
    const { course } = useGetCourse(slug);
    return (
        <section className='px-4'>
            <div className="container mx-auto mt-10">
                <div className="flex flex-col space-y-10">
                    <div className='flex flex-col space-y-8 rounded-lg p-5'>
                        <h1 className='text-4xl font-bold text-center'>{course.courseName}</h1>
                        <p className='text-darkGrayishBlue'>{course.description}</p>

                    </div>

                    <div className='space-y-3 bg-black text-white py-5 rounded-lg md:py-8'>
                        <h2 className='text-2xl text-center'>
                            Ton programme "{course.courseName}"
                        </h2>
                        <div className='flex flex-wrap gap-2 justify-center content-between'>
                            {course.skills.map((skill, i) => <span key={i} className='bg-violet-600 p-2 text-white rounded-full'>{skill}</span>)}
                        </div>
                    </div>

                    <div className='flex flex-col items-center md:flex-row space-y-3 bg-[#dcdd3a] text-black py-5 rounded-lg md:py-8'>
                        <h2 className='flex-1 text-6xl text-center'>
                            {course.price} TND
                        </h2>
                        <div className='flex-1 flex flex-col gap-2 justify-center content-between'>
                            <h2 className='text-3xl md:text-4xl'>Retour sur investissement garanti</h2>

                            <div className="flex justify-center md:justify-start">
                                <a href="#" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block ">S'inscrit</a>
                            </div>
                        </div>
                    </div>

                    {/* <div className="bg-black overflow-hidden rounded-lg">
                        <div className="flex flex-wrap -m-8 lg:-m-14">
                            <div className="w-full md:w-5/12 p-8 lg:p-14">
                                <div className="h-full flex flex-col justify-center items-center overflow-hidden">
                                    <h2 className='text-6xl text-center text-white'>
                                        {course.price} TND
                                    </h2>
                                    <ul className='text-white'>
                                        <li>
                                            20 semaines
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-1 md:w-1/2 p-8 lg:p-14">
                                <div className="flex flex-col justify-center h-full">
                                    <div className="md:max-w-xl pb-16 md:py-16 px-4">
                                        <h2 className="font-heading mb-5 text-6xl text-white tracking-tighter">
                                            Retour sur investissement garanti
                                        </h2>
                                        <p className="mb-20 text-xl text-gray-300 tracking-tight">
                                            Transform your knowledge into a thriving business with the best
                                            online course platform for creators everywhere we found to be
                                            successful.
                                        </p>
                                        <div className="flex flex-wrap -m-1.5 mb-5">

                                            <div className="w-auto p-1.5">
                                                <a
                                                    className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                                                    href="#"
                                                >
                                                    S'inscrit
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="py-24 lg:py-32 bg-white overflow-hidden">
                        <div className="container px-4 mx-auto">
                            <div className="relative p-12 bg-black overflow-hidden rounded-2xl">
                                <img
                                    className="absolute top-0 right-0"
                                    src="basko-assets/images/cta/gradient.png"
                                    alt=""
                                />
                                <div className="relative">
                                    <h2 className="font-heading mb-2 text-6xl text-white tracking-tighter">
                                        Get early access to Basko.
                                    </h2>
                                    <h2 className="font-heading mb-8 text-6xl text-gray-400 tracking-tighter">
                                        Close your books faster and grow.
                                    </h2>
                                    <a
                                        className="inline-block mb-32 lg:mb-48 px-5 py-4 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                                        href="#"
                                    >
                                        Try 14 Days Free Trial
                                    </a>
                                    <ul className="flex flex-wrap -m-4">
                                        <li className="p-4">
                                            <a className="flex flex-wrap" href="#">
                                                <svg
                                                    className="mr-3"
                                                    width={26}
                                                    height={26}
                                                    viewBox="0 0 26 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.25 13L11.75 15.5L16.75 10.5M24.25 13C24.25 19.2132 19.2132 24.25 13 24.25C6.7868 24.25 1.75 19.2132 1.75 13C1.75 6.7868 6.7868 1.75 13 1.75C19.2132 1.75 24.25 6.7868 24.25 13Z"
                                                        stroke="white"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <span className="text-white tracking-tight">
                                                    Seamless Collaboration
                                                </span>
                                            </a>
                                        </li>
                                        <li className="p-4">
                                            <a className="flex flex-wrap" href="#">
                                                <svg
                                                    className="mr-3"
                                                    width={26}
                                                    height={26}
                                                    viewBox="0 0 26 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.25 13L11.75 15.5L16.75 10.5M24.25 13C24.25 19.2132 19.2132 24.25 13 24.25C6.7868 24.25 1.75 19.2132 1.75 13C1.75 6.7868 6.7868 1.75 13 1.75C19.2132 1.75 24.25 6.7868 24.25 13Z"
                                                        stroke="white"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <span className="text-white tracking-tight">
                                                    Customizable Workflows
                                                </span>
                                            </a>
                                        </li>
                                        <li className="p-4">
                                            <a className="flex flex-wrap" href="#">
                                                <svg
                                                    className="mr-3"
                                                    width={26}
                                                    height={26}
                                                    viewBox="0 0 26 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.25 13L11.75 15.5L16.75 10.5M24.25 13C24.25 19.2132 19.2132 24.25 13 24.25C6.7868 24.25 1.75 19.2132 1.75 13C1.75 6.7868 6.7868 1.75 13 1.75C19.2132 1.75 24.25 6.7868 24.25 13Z"
                                                        stroke="white"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <span className="text-white tracking-tight">
                                                    Comprehensive Reporting
                                                </span>
                                            </a>
                                        </li>
                                        <li className="p-4">
                                            <a className="flex flex-wrap" href="#">
                                                <svg
                                                    className="mr-3"
                                                    width={26}
                                                    height={26}
                                                    viewBox="0 0 26 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.25 13L11.75 15.5L16.75 10.5M24.25 13C24.25 19.2132 19.2132 24.25 13 24.25C6.7868 24.25 1.75 19.2132 1.75 13C1.75 6.7868 6.7868 1.75 13 1.75C19.2132 1.75 24.25 6.7868 24.25 13Z"
                                                        stroke="white"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <span className="text-white tracking-tight">
                                                    Intuitive Interface
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default CourseDetail