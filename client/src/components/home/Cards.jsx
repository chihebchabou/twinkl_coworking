import Single from '../../assets/single.png';
import Double from '../../assets/double.png';
import Triple from '../../assets/triple.png';

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            {/* Card */}
            <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8 mt-8'>Send up to 2GB</p>
                </div>
                <button className="bg-deepSkyBlue w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-center hover:bg-plum hover:text-black duration-300">Start Trial</button>
            </div>
            {/* Card */}
            <div className="w-full bg-gray-100 border shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8 mt-8'>Send up to 2GB</p>
                </div>
                <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-deepSkyBlue text-center hover:bg-plum hover:text-black duration-300">Start Trial</button>
            </div>
            {/* Card */}
            <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8 mt-8'>Send up to 2GB</p>
                </div>
                <button className="bg-deepSkyBlue w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-center hover:bg-plum hover:text-black duration-300">Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards