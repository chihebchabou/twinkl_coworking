import { getCourse } from "@/utils/api";
import { useLoaderData } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import socialMedia from "@/assets/social-media.jpg"
import courses_1 from "@/assets/courses_1.png"

const CourseDetail = () => {
    const data = useLoaderData();
    console.dir(data)
    const {courseName,description,content=[], skills} = data
    return ( 
        <>
            <section className="bg-white min-h-[80vh] md:min-h-screen text-black flex">
                <div className="max-w-[1240px]  px-3 mx-auto grid lg:grid-cols-2">
                    <div className="h-[400px] self-center flex flex-col justify-center items-center md:items-start text-center md:text-left">
                        <h1 className='md:text-4xl sm:text-3xl text-2xl py-2'>{description}</h1>
                        <p className='uppercase text-plum font-bold'>Vous allez apprender à:</p>
                        <ul className="text-xl">
                            {content.map((element,i) => <li key={i} className="mt-2 flex md:justify-start items-center text-sm sm:text-base md:text-lg"><FaCheck size={30} className="hidden pr-2"/> {element}</li>)}
                        </ul>
                        <a href="/register" className="bg-black w-[150px] sm:w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-2 text-sm sm:text-base sm:py-3 text-deepSkyBlue text-center hover:bg-plum hover:text-black duration-300">Rejoins-nous</a>
                    </div>
                    <div className="hidden lg:block self-center">
                        <img src={socialMedia} className="w-[400px] mx-auto my-4" alt="social-media" />
                    </div>
                </div>
                
            </section>
            
             <section className="bg-white  flex flex-col items-center  text-black">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <img className='md:w-[400px] md:block hidden mx-auto my-4' src={courses_1} alt="/" />
                    <div className="h-[200px] md:h-[400px] flex flex-col justify-center items-center md:items-start text-center md:text-left">
                        <p className='uppercase text-plum font-bold'>Booste tes compétences en Tech</p>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl py-2'>Travaillez sur des projets professionnalisants</h1>
                        <p>Réalisez des projets concrets, issus de scénarios métiers, directement applicables en entreprise.</p>
                        <a href="/register" className="bg-black w-[150px] sm:w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-2 text-sm sm:text-base sm:py-3 text-deepSkyBlue text-center hover:bg-plum hover:text-black duration-300">Rejoins-nous</a>
                    </div>

                    
            </div>
            </section>
            
        </>
     );
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = ({params}) => getCourse(params.slug)

 
export default CourseDetail;