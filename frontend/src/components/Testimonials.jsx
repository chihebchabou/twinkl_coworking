import { Carousel } from "flowbite-react";

const customTheme = {
    root: {
        base: "relative h-full w-full",
        leftControl: "hidden",
        rightControl: "hidden"
    },
    indicators: {
        active: {
            off: "bg-red-100 hover:bg-white",
            on: "bg-red-300"
        },
        base: "h-3 w-3 rounded-full",
        wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    scrollContainer: {
        base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
        snap: "snap-x"
    }
}

const Testimonials = () => {
  return (
    <section className=" bg-white p-16">
        <p className='uppercase text-plum font-bold text-center'>Nos Témoignages</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 text-center'>Ce que dit notre client</h1>
        <div className="h-80">
            <Carousel theme={customTheme}>
                <div className="flex h-full items-center justify-center border rounded-xl">
                Slide 1
                </div>

                <div className="flex h-full items-center justify-center border rounded-xl">
                Slide 2
                </div>
                
            </Carousel>
        </div>
    </section>
  )
}

export default Testimonials