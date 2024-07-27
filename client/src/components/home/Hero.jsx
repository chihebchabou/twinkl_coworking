import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className="max-w-[800px] px-10 md:px-0 w-full min-h-screen mx-auto text-center flex flex-col justify-center text-white">
        <p className="sm:text-lg text-sm text-deepSkyBlue uppercase font-bold p-2">Espace de co-travail pour votre succès</p>
        <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold md:pb-6">Apprends, Réalise tes projets, <br /> Réussis ta carrière</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-2xl text-xl font-bold py-4">Centre de</p>
          <ReactTyped className="md:text-5xl sm:text-2xl text-xl text-gold font-bold md:pl-4 pl-2" strings={['COWORKING', 'CLUBS', 'FORMATION']} typeSpeed={120} backSpeed={140} loop />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Des compétences d&apos;aujourd’hui qui ont de l&apos;avenir</p>
        <a href="#!" className="bg-deepSkyBlue w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-plum duration-300">Rejoins-nous</a>
    </div>
  )
}

export default Hero