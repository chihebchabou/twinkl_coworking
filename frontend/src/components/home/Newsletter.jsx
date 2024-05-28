const Newsletter = () => {
  return (
    <div className="w-full p-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2 my-4">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde.</p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input className="p-3 flex w-full rounded-md text-black" type="email" name="" id="" placeholder="Enter Email" />
                    <button className="bg-deepSkyBlue w-[200px] rounded-md font-medium ml-4 my-6 mx-auto px-6 py-3 text-black hover:bg-plum">Notify Me</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="text-plum">Debitis, modi?</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter