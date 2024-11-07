import { Carousel } from 'flowbite-react';

const Spaces = () => {
  return (
    // <section className="w-full bg-white py-[100px] px-4">
    //   <div className="flex flex-col justify-center text-center md:text-left  p-4">
    //     <p className="uppercase text-plum font-bold">Nos espaces</p>
    //     <h1 className="md:text-4xl sm:text-3xl text-2xl py-2">
    //       Tous nos espaces sont climatisés, équipés de vidéo projecteur et de
    //       wifi.
    //     </h1>
    //     <div id="yellow-room">
    //       <p className="mt-5 leading-normal md:text-justify text-gold text-2xl">
    //         Yellow room
    //       </p>
    //       <p className="mt-5 leading-normal md:text-justify">
    //         6 / 12 personnes
    //       </p>
    //       <p className="mt-5 leading-normal md:text-justify">
    //         20 dt/h forfait journée 150 dt
    //       </p>
    //     </div>

    //     <div id="purple-room">
    //       <p className="mt-5 leading-normal md:text-justify text-plum text-2xl">
    //         Purple room
    //       </p>
    //       <p className="mt-5 leading-normal md:text-justify">
    //         6 / 20 personnes
    //       </p>
    //       <p className="mt-5 leading-normal md:text-justify">
    //         20 dt/h forfait journée 150 dt
    //       </p>
    //     </div>

    //     <div id="coworking-space">
    //       <p className="mt-5 leading-normal md:text-justify text-deepSkyBlue text-2xl">
    //         Coworking space
    //       </p>
    //       <p className="mt-5 leading-normal md:text-justify">
    //         20 / 40 personnes
    //       </p>
    //       <p className="mt-5 leading-normal md:text-justify">
    //         30 dt/h forfait journée 200 dt
    //       </p>
    //     </div>
    //     <a
    //       href="/register"
    //       className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-deepSkyBlue text-center hover:bg-plum hover:text-black duration-300"
    //     >
    //       Rejoins-nous
    //     </a>
    //   </div>
    // </section>
    <>
      <div className="w-full py-[7rem] px-4 bg-white">
      </div>
      <div className="w-full py-[7rem] px-4 bg-white">
        <p className="uppercase font-bold text-center text-xl mb-[1rem]">
          Nos tarifs
        </p>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          {/* Card */}
          <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-center py-8 text-gold">
              Yellow Room
            </h2>
            <p className="text-center text-4xl font-bold">20 dt/h</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">6 / 12 personnes</p>
              <p className="py-2 border-b mx-8 mt-8">forfait journée:</p>
              <p className="py-2 border-b mx-8 mt-8 text-2xl">150 dt</p>
            </div>
          </div>
          {/* Card */}
          <div className="w-full bg-gray-100 border shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-center py-8 text-deepSkyBlue">
              Coworking Space
            </h2>
            <p className="text-center text-4xl font-bold">30 dt/h</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">20 / 40 personnes</p>
              <p className="py-2 border-b mx-8 mt-8">forfait journée:</p>
              <p className="py-2 border-b mx-8 mt-8 text-2xl">300 dt/h</p>
            </div>
          </div>
          {/* Card */}
          <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-center py-8 text-plum">
              Purple Room
            </h2>
            <p className="text-center text-4xl font-bold">20 dt/h</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">12 / 20 personnes</p>
              <p className="py-2 border-b mx-8 mt-8">forfait journée</p>
              <p className="py-2 border-b mx-8 mt-8 text-2xl">150 dt</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spaces;
