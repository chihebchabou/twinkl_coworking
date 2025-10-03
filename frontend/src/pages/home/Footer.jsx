import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid items-center lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-deepSkyBlue uppercase">
          <img src={logo} alt="" className="w-24 sm:w-32 md:w-40 lg:w-52" />
        </h1>
        {/* <p className="py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolor sit culpa corrupti nobis eius.</p>
            <div className="flex justify-between md:w-[75%] my-6">
                <FaFacebookSquare size={30} />
                <FaInstagram size={30}  />
                <FaTwitterSquare size={30}  />
                <FaGithubSquare size={30}  />
                <FaDribbbleSquare size={30}  />
            </div> */}
      </div>
      {/* <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div> */}
      <div className="lg:col-span-2 flex flex-col mt-6">
        {/* <div> */}
          <p className="pb-4">
          <strong>Adresse :</strong> Rue Fadhel Ben Achour, Ariana 1004
          </p>
          <p className="pb-4">
          <strong>Téléphone :</strong> 20 222 226
          </p>
          <div className="flex md:w-[75%] my-6 space-x-5">
            <a href="https://www.facebook.com/Twinklspace/" target='_blank'><FaFacebookSquare size={30} className='hover:text-yellowGreen' /></a>
            <a href="https://www.instagram.com/twinkl_coworking/" target='_blank'><FaInstagram size={30} className='hover:text-yellowGreen' /></a>
            {/* <FaTwitterSquare size={30} /> */}
            {/* <FaGithubSquare size={30} /> */}
            {/* <FaDribbbleSquare size={30} /> */}
          </div>
         <div>
           <p className="text-sm">
            © {currentYear} TWINKL. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Designed & Built with ❤️ By Chiheb Chabou
          </p>
         </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
