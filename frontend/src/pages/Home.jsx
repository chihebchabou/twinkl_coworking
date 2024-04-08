import hero from '../assets/hero.jpg'

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section id="hero">
                {/* Flex Container */}
                <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0">
                    {/* Left item */}
                    <div className="flex flex-col mb-32 mt-8 space-y-12 md:w-1/2">
                        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                            Apprends, Réalise tes projets, Réussis ta carrière
                        </h1>
                        <p className='max-w-md text-center text-darkGrayishBlue md:text-left md:max-w-sm'>Des programmes tech basés sur des projets, flexibles et conçus pour te donner les compétences indispensables pour faire évoluer ta carrière.</p>
                        <div className="flex justify-center md:justify-start">
                            <a href="#" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block ">Rejoins-nous</a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className=" w-2/3  md:w-1/2 md:flex justify-end items-center">
                        <img src={hero} alt="" className='md:h-[400px] rounded-2xl' />
                    </div>
                </div>
            </section>

            {/* Register Section */}
            <section id="register">
                {/* Flex container */}
                <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                    {/* Left item */}
                    <div className="flex flex-col items-center text-center space-y-12 md:text-left md:1/3">
                        <h2 className="max-w-md text-4xl font-bold ">Inscris-toi maintenant</h2>

                        <p className="max-w-sm text-3xl text-darkGrayishBlue md:text-left">
                            Ton chemin vers la réussite commence ici
                        </p>
                    </div>

                    {/* Register Form */}
                    <form className="flex flex-col space-y-8 md:px-8 md:w-2/3">
                        {/* Last Name */}
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="lastName">Nom</label>
                            <input type="text" name="lastName" id="lastName" placeholder='Entrez votre nom' className='p-3 outline-none border-b border-black focus:border-brightRed' />
                        </div>

                        {/* First Name */}
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="firstName">Prénom</label>
                            <input type="text" name="firstName" id="firstName" placeholder='Entrez votre nom' className='p-3 outline-none border-b border-black focus:border-brightRed' />
                        </div>

                        {/* Phone Number */}
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="phone">Numéro de téléphone</label>
                            <input type="tel" name="phone" id="phone" placeholder='Entrez votre numéro de téléphone ex: 99-999-999' className='p-3 outline-none border-b border-black focus:border-brightRed' />
                        </div>

                        {/* E-mail */}
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" placeholder='Entrez votre e-mail' className='p-3 outline-none border-b border-black focus:border-brightRed' />
                        </div>

                        {/* Domine */}
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="category">Choisis le domaine qui t'intéresse</label>


                            <select id="categories" name='category' className='p-3 bg-transparent outline-none border-b border-black focus:border-brightRed'>
                                <option selected disabled="on" value="" >Veuillez sélectionner</option>
                                <option value="Design">Design</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Data">Data</option>
                                <option value="Computer Science">Computer Science</option>
                            </select>
                        </div>

                        <div className="flex justify-end">
                            <button type="submit" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">S'inscrire</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Home