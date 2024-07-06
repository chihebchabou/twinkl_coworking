const About = () => {
  return (
    <div className='w-full bg-white py-[100px] px-4 min-h-screen'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
            
            <div className="hidden lg:flex justify-center items-center gap-3">
                <img className=' md:w-[250px] translate-y-5 my-4 rounded-md' src="https://cowork.websitelayout.net/img/content/about-03.jpg" alt="/" />
                <img className=' md:w-[250px] -translate-y-5 my-4 rounded-md' src="https://cowork.websitelayout.net/img/content/about-04.jpg" alt="/" />
            </div>
           
            <div className="flex flex-col justify-center text-center md:text-left  p-4">
                <p className='uppercase text-plum font-bold'>À propos de nous</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2'>Communauté, créativité, confort et plus</h1>
                <p className="mt-5 leading-normal text-justify">Twinkl est un espace cosy et chaleureux dédié aux étudiants, aux jeunes entrepreneurs, aux smalls business et à tous ceux qui souhaitent découvrir et acquérir de nouvelles compétences ou developper leurs potentiels.</p>
                <p className="mt-5 leading-normal text-justify">Notre vision est d’offrir des formations, des masters classes et des ateliers accélérés et 100% pratiques , riches et de qualités tout en étant accessibles à tout les budgets.</p>
                <p className="mt-5 leading-normal text-justify">Notre objectif est de vous aider à apprendre toutes les compétences nécessaires pour bien démarrer et gérer votre projet.</p>
                <a href="#!" className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-deepSkyBlue text-center hover:bg-plum hover:text-black duration-300">Rejoins-nous</a>
            </div>
        </div>
    </div>
  )
}

export default About