import { getCourse } from "@/utils/api";
import { useLoaderData } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import socialMedia from "@/assets/social-media.jpg"

const CourseDetail = () => {
    const data = useLoaderData();
    console.log(data)
    const {courseName,description,content=[], skills} = data
    return ( 
        <>
            <section className="bg-white min-h-screen text-black flex">
                <div className="max-w-[1240px]  px-3 mx-auto grid lg:grid-cols-3">
                    <div className="self-center col-span-2 flex flex-col ">
                        <h1 className="text-2xl md:text-3xl lg:text-left text-plum mb-2">{description}</h1>
                        <h2 className="text-xl text-deepSkyBlue mb-3">Vous allez apprender à:</h2>
                        <ul className="text-xl">
                            {content.map((element,i) => <li key={i} className="mt-2 flex md:justify-start items-center text-sm sm:text-base md:text-lg"><FaCheck size={30} className="hidden pr-2"/> {element}</li>)}
                        </ul>
                        <a href="#!" className="bg-black w-[150px] sm:w-[200px] rounded-md text-sm sm:text-base sm:font-medium my-6 py-2 sm:py-3 text-deepSkyBlue text-center hover:bg-plum hover:text-black duration-300">Rejoins-nous</a>
                    </div>
                    <div className="hidden lg:block self-center">
                        <img src={socialMedia} alt="social-media" />
                    </div>
                </div>
                
            </section>
            <section  className="w-full p-16 text-white px-4">
                <h1 className="md:text-3xl sm:text-2xl text-xl text-center font-bold py-2">Ton programme &quot;{courseName}&quot;</h1>
                <div className='flex flex-wrap justify-center items-center'>
                    {skills.map((skill,i) => <span key={i} className='bg-plum p-3 m-1 rounded-full'>{skill}</span>)}
                    
                </div>
            </section>
             <section className="bg-white min-h-screen flex flex-col items-center  text-black">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 mt-20">
                
                    <div className="h-[400px] flex flex-col justify-center items-center md:items-start text-center md:text-left">
                        <p className='uppercase text-plum font-bold'>Booste tes compétences en Tech</p>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl py-2'>Travaillez sur des projets professionnalisants</h1>
                        <p>Réalisez des projets concrets, issus de scénarios métiers, directement applicables en entreprise.</p>
                        <a href="#!" className="bg-black w-[150px] sm:w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-2 text-sm sm:text-base sm:py-3 text-deepSkyBlue text-center hover:bg-plum hover:text-black duration-300">Rejoins-nous</a>
                    </div>

                    <img className='md:w-[400px] md:block hidden w-[200px] mx-auto my-4 rounded-xl' src="https://gomycode.com/tn/wp-content/uploads/sites/26/2024/03/DSC02741.png" alt="/" />
            </div>
            </section>
            
        </>
     );
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = ({params}) => getCourse(params.slug)

 
export default CourseDetail;