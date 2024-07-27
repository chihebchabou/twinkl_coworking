import person1 from '@/assets/person1.jpg'
const Skills = () => {
    return ( 
        <div className='w-full bg-white py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='md:w-[300px] w-[200px] mx-auto my-4 rounded-xl' src={person1} alt="/" />
            <div className="flex flex-col justify-center text-center md:text-left">
                <p className='uppercase text-plum font-bold'>Booste tes compétences en Tech</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2'>Travaillez sur des projets professionnalisants</h1>
                <p>Réalisez des projets concrets, issus de scénarios métiers, directement applicables en entreprise.</p>
                <a href="#!" className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-deepSkyBlue text-center hover:bg-plum hover:text-black duration-300">Rejoins-nous</a>
            </div>
        </div>
    </div>
    );
}
 
export default Skills;