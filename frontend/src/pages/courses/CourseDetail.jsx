import React from 'react'
import { useGetCourse } from '.';
import { useParams } from 'react-router-dom';
import Testimonials from '../../components/Testimonials';

const CourseDetail = () => {
    const { slug } = useParams();
    // const { course } = useGetCourse(slug);
    return (
        <>
            <section className="bg-white min-h-screen flex flex-col items-center  text-black">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 mt-20">
                
                    <div className="h-[400px] flex flex-col justify-center items-center md:items-start text-center md:text-left">
                        <p className='uppercase text-plum font-bold'>Booste tes compétences en Tech</p>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl py-2'>Travaillez sur des projets professionnalisants</h1>
                        <p>Réalisez des projets concrets, issus de scénarios métiers, directement applicables en entreprise.</p>
                        <a href="#!" className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-deepSkyBlue text-center hover:bg-plum hover:text-black duration-300">Rejoins-nous</a>
                    </div>

                    <img className='md:w-[400px] md:block hidden w-[200px] mx-auto my-4 rounded-xl' src="https://gomycode.com/tn/wp-content/uploads/sites/26/2024/03/DSC02741.png" alt="/" />
            </div>
            </section>
            <section  className="w-full p-16 text-white px-4">
                <h1 className="md:text-3xl sm:text-2xl text-xl text-center font-bold py-2">Ton programme</h1>
                <div className='flex flex-wrap justify-center items-center'>
                    <span className='bg-plum p-3 m-1 rounded-full'>Analyse</span>
                    <span className='bg-plum p-3 m-1 rounded-full'>Analyse</span>
                    <span className='bg-plum p-3 m-1 rounded-full'>Analyse</span>
                    <span className='bg-plum p-3 m-1 rounded-full'>Analyse</span>
                    <span className='bg-plum p-3 m-1 rounded-full'>Analyse</span>
                    <span className='bg-plum p-3 m-1 rounded-full'>Analyse</span>
                    
                </div>
            </section>

            <section>
                <Testimonials/>
            </section>
        </>
    )
}

export default CourseDetail