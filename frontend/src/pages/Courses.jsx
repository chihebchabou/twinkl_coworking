import { Link } from "react-router-dom";
const Courses = () => {
    return (
        <section>
            <div className='field flex justify-center space-x-4 text-center bg-black py-3 text-white font-medium'>
                <a href="#" >Bootcamp</a>
                <a href="#" >Marketing</a>
                <a href="#" >Data</a>
                <a href="#" >Design</a>
            </div>
            <div className="container mx-auto mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Card */}
                <div className='p-8 border border-gray-400 rounded-lg flex flex-col space-y-3'>
                    <h5 className='text-blue-700 font-bold text-lg'>Marketing</h5>
                    <h4 className='font-bold text-2xl'>Les Fondamentaux du Social Media Marketing</h4>
                    <span className='text-xl font-bold text-darkBlue'>TND 850</span>
                    <Link to="/courses/detail" className="bg-sky-700 text-white px-3 py-1 self-start rounded-md">Savoir plus</Link>
                </div>

                <div className='p-8 border border-gray-400 rounded-lg flex flex-col space-y-3'>
                    <h5 className='text-blue-700 font-bold text-lg'>Marketing</h5>
                    <h4 className='font-bold text-2xl'>Les Fondamentaux du Social Media Marketing</h4>
                    <span className='text-xl font-bold text-darkBlue'>TND 850</span>
                    <Link to="/courses/detail" className="bg-sky-700 text-white px-3 py-1 self-start rounded-md">Savoir plus</Link>
                </div>

                <div className='p-8 border border-gray-400 rounded-lg flex flex-col space-y-3'>
                    <h5 className='text-blue-700 font-bold text-lg'>Marketing</h5>
                    <h4 className='font-bold text-2xl'>Les Fondamentaux du Social Media Marketing</h4>
                    <span className='text-xl font-bold text-darkBlue'>TND 850</span>
                    <Link to="/courses/detail" className="bg-sky-700 text-white px-3 py-1 self-start rounded-md">Savoir plus</Link>
                </div>

                <div className='p-8 border border-gray-400 rounded-lg flex flex-col space-y-3'>
                    <h5 className='text-blue-700 font-bold text-lg'>Marketing</h5>
                    <h4 className='font-bold text-2xl'>Les Fondamentaux du Social Media Marketing</h4>
                    <span className='text-xl font-bold text-darkBlue'>TND 850</span>
                    <Link to="/courses/detail" className="bg-sky-700 text-white px-3 py-1 self-start rounded-md">Savoir plus</Link>
                </div>

                <div className='p-8 border border-gray-400 rounded-lg flex flex-col space-y-3'>
                    <h5 className='text-blue-700 font-bold text-lg'>Marketing</h5>
                    <h4 className='font-bold text-2xl'>Les Fondamentaux du Social Media Marketing</h4>
                    <span className='text-xl font-bold text-darkBlue'>TND 850</span>
                    <Link to="/courses/detail" className="bg-sky-700 text-white px-3 py-1 self-start rounded-md">Savoir plus</Link>
                </div>
                <div className='p-8 border border-gray-400 rounded-lg flex flex-col space-y-3'>
                    <h5 className='text-blue-700 font-bold text-lg'>Marketing</h5>
                    <h4 className='font-bold text-2xl'>Les Fondamentaux du Social Media Marketing</h4>
                    <span className='text-xl font-bold text-darkBlue'>TND 850</span>
                    <Link to="/courses/detail" className="bg-sky-700 text-white px-3 py-1 self-start rounded-md">Savoir plus</Link>
                </div>
            </div>
        </section>
    )
}

export default Courses