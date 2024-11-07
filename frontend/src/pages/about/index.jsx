import VideoComponent from '@/components/VideoComponent';
import { useState } from 'react';
import about01 from '@/assets/about-01.jpg';
import about02 from '@/assets/about-02.jpg';

const About = () => {
  const [showVideo, setShowVideo] = useState({ src: '', isOpen: false });
  return (
    <>
      <section className="w-full bg-white py-[100px] px-4 min-h-screen">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
          <div className="hidden lg:flex justify-center items-center gap-3">
            <img
              className=" md:w-[250px] translate-y-5 my-4 rounded-md"
              src={about01}
              alt="/"
            />
            <img
              className=" md:w-[250px] -translate-y-5 my-4 rounded-md"
              src={about02}
              alt="/"
            />
          </div>

          <div className="flex flex-col justify-center text-center md:text-left  p-4">
            <p className="uppercase text-plum font-bold">À propos de nous</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl py-2">
              Communauté, créativité, confort et plus
            </h1>
            <p className="mt-5 leading-normal md:text-justify">
              Twinkl est un espace cosy et chaleureux dédié aux étudiants, aux
              jeunes entrepreneurs, aux smalls business et à tous ceux qui
              souhaitent découvrir et acquérir de nouvelles compétences ou
              developper leurs potentiels.
            </p>
            <p className="mt-5 leading-normal md:text-justify">
              Notre vision est d’offrir des formations, des masters classes et
              des ateliers accélérés et 100% pratiques , riches et de qualités
              tout en étant accessibles à tout les budgets.
            </p>
            <p className="mt-5 leading-normal md:text-justify">
              Notre objectif est de vous aider à apprendre toutes les
              compétences nécessaires pour bien démarrer et gérer votre projet.
            </p>
            <a
              href="/register"
              className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-deepSkyBlue text-center hover:bg-plum hover:text-black duration-300"
            >
              Rejoins-nous
            </a>
          </div>
        </div>
      </section>
      <section className="w-full border-t py-10 bg-white px-4">
        <h1 className="text-center md:text-4xl sm:text-3xl text-2xl mb-8">
          Témoignage
        </h1>
        <div className="grid max-w-[1240px] mx-auto md:grid-cols-2">
          <figure className="mb-7 md:w-2/3 md:mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl font-medium text-center text-gray-900">
                Merci infiniment Mr. @mohamed_bessi_brahim pour votre témoignage
                inspirant lors de notre dernière session de formation Marketing
                Digital . Votre présence enrichit notre centre de manière
                significative. Vous êtes toujours le bienvenu ici.
              </p>
            </blockquote>

            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900">
                  Mr Mohamed Bessi Brahim
                </div>
                <div
                  onClick={() =>
                    setShowVideo({
                      src: 'media/@mohamed_bessi_brahim.mp4',
                      isOpen: true,
                    })
                  }
                  className="pl-3 text-sm font-light text-gray-500 cursor-pointer hover:text-deepSkyBlue"
                >
                  voir la video
                </div>
              </div>
            </figcaption>
          </figure>

          <figure className="mb-7 md:w-2/3 md:mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl font-medium text-center text-gray-900">
                Un immense merci à @salma__ber pour son témoignage et sa
                participation! 🙏 Ta capacité à apprendre rapidement et ta
                motivation à te développer sont une véritable source
                d’inspiration. 🌟📸 Bienvenue dans la communauté des Twinklers!
                Nous avons hâte de te voir progresser.
              </p>
            </blockquote>

            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900">
                  Mme Salma Beriri
                </div>
                <div
                  onClick={() =>
                    setShowVideo({
                      src: 'media/@salma__ber.mp4',
                      isOpen: true,
                    })
                  }
                  className="pl-3 text-sm font-light text-gray-500 cursor-pointer hover:text-deepSkyBlue"
                >
                  voir la video
                </div>
              </div>
            </figcaption>
          </figure>

          <figure className="mb-7 md:w-2/3 md:mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl font-medium text-center text-gray-900">
                Un grand merci à @ahlem.bensaad.54 pour son précieux témoignage
                et pour avoir partagé son expérience durant note atelier
                #PhonePhotography 📱 avec @rihem.b.s ! Nous sommes ravis de
                savoir que sa participation a été bénéfique pour elle et même
                ses enfants. ✨
              </p>
            </blockquote>

            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900">
                  Mme Ahlem Ben Saad
                </div>
                <div
                  onClick={() =>
                    setShowVideo({
                      src: 'media/@ahlem.bensaad.5.mp4',
                      isOpen: true,
                    })
                  }
                  className="pl-3 text-sm font-light text-gray-500 cursor-pointer hover:text-deepSkyBlue"
                >
                  voir la video
                </div>
              </div>
            </figcaption>
          </figure>

          <figure className="mb-7 md:w-2/3 md:mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl font-medium text-center text-gray-900">
                ✨ Un grand merci à Fatma pour son partage d’expériance et à
                @nadia_magh pour sa patience, son guidage passionné, et ses
                astuces professionnelles. 🕯️ Ta générosité et ton savoir-faire
                nous ont illuminés!
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              {/* <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              /> */}
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900">
                  Mme Fatma Khelif
                </div>
                <div
                  onClick={() =>
                    setShowVideo({ src: 'media/fatma.mp4', isOpen: true })
                  }
                  className="pl-3 text-sm font-light text-gray-500 cursor-pointer hover:text-deepSkyBlue"
                >
                  voir la video
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <VideoComponent showVideo={showVideo} setShowVideo={setShowVideo} />
    </>
  );
};

export default About;
