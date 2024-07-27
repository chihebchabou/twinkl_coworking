import { Carousel } from "flowbite-react";

const customTheme = {
  root: {
    base: "relative h-full w-full",
    leftControl: "hidden",
    rightControl: "hidden",
  },
  indicators: {
    active: {
      off: "bg-red-100 hover:bg-white",
      on: "bg-red-300",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
    snap: "snap-x",
  },
};

const Testimonials = () => {
  return (
    <section className=" bg-white p-16">
      <p className="uppercase text-plum font-bold text-center">
        Nos Témoignages
      </p>
      <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 text-center">
        Ce que dit notre client
      </h1>
      <div className="h-80">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3">
              <img src="https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-16 h-16 object-cover -mt-14 rounded-full" alt="" />
              <h5 className="text-lg font-bold">Anisha Lee</h5>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, numquam. Laborum porro quos fuga, nemo doloribus iste tempore laboriosam! Consequatur!
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3">
              <img src="https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-16 h-16 object-cover -mt-14 rounded-full" alt="" />
              <h5 className="text-lg font-bold">Anisha Lee</h5>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, numquam. Laborum porro quos fuga, nemo doloribus iste tempore laboriosam! Consequatur!
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3">
              <img src="https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-16 h-16 object-cover -mt-14 rounded-full" alt="" />
              <h5 className="text-lg font-bold">Anisha Lee</h5>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, numquam. Laborum porro quos fuga, nemo doloribus iste tempore laboriosam! Consequatur!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
