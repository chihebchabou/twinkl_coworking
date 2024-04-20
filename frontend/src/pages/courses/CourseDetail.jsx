import React from 'react'

const CourseDetail = () => {
    return (
        <section className='px-4'>
            <div className="container mx-auto mt-10">
                <div className="flex flex-col space-y-20">
                    <div className='flex flex-col space-y-8 rounded-lg p-5'>
                        <h1 className='text-4xl font-bold text-center'>Maîtrise Les Fondamentaux du Social Media Marketing</h1>
                        <p className='text-darkGrayishBlue'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam omnis iure voluptate facere incidunt atque magnam iste quia quaerat. Eos harum neque nam ea quam cumque ex eaque amet enim odit dicta corrupti cupiditate odio pariatur deserunt tempora obcaecati soluta, quaerat iusto? Suscipit dolorum voluptatum magnam quidem facere illo.</p>
                        <div className="flex justify-center md:justify-start">
                            <a href="#" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block ">S'inscrit</a>
                        </div>
                    </div>

                    <div className='space-y-3 bg-black text-white py-5 rounded-lg md:py-8'>
                        <h2 className='text-2xl text-center'>
                            Ton programme "Les Fondamentaux du Social Media Marketing"
                        </h2>
                        <div className='flex flex-wrap gap-2 justify-center content-between'>
                            <span className='bg-violet-600 p-2 text-white rounded-full'>Stratégie de contenu</span>
                            <span className='bg-violet-600 p-2 text-white rounded-full'>Analyse</span>
                            <span className='bg-violet-600 p-2 text-white rounded-full'>Campagne marketing</span>
                            <span className='bg-violet-600 p-2 text-white rounded-full'>Plateformes de réseaux sociaux</span>
                            <span className='bg-violet-600 p-2 text-white rounded-full'>Engagement de public</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CourseDetail