import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Course from "./Course";
import { useEffect } from "react";
import { useFetchCourses } from ".";
import { toast } from "react-toastify";

const Courses = () => {
  // const { courses, status, message, error } = useFetchCourses();

  // const { data } = useSelector(state => state.admin);

  return (
    <section className="bg-white min-h-screen flex flex-col items-center  text-black">
      <div className="max-w-[1240px] grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[90px] px-3">
        {/* <div className="p-6 rounded-xl bg-black">
          <img
            className="mx-auto rounded-full mb-6"
            src="https://gomycode.com/tn/wp-content/uploads/sites/26/2023/02/fullstack-js-bootcamp-1-scaled-480x304.jpg"
            alt=""
          />
          <h1 className="sm:text-xl font-semibold text-plum">Bootcamps</h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-deepSkyBlue">Bootcamp Data Scientist</h2>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            quam!
          </p>
        </div> */}

        <div className="border-2 border-gold p-6 rounded-xl bg-white">
          <img
            className="mx-auto rounded-full mb-6"
            src="https://gomycode.com/tn/wp-content/uploads/sites/26/2023/02/fullstack-js-bootcamp-1-scaled-480x304.jpg"
            alt=""
          />
          <h1 className="sm:text-xl font-semibold text-plum">Marketing</h1>
          <h2 className="text-lg md:text-xl font-semibold">
            <Link to="/courses/course-detail" className="hover:underline">Social Media Marketing Essentials</Link>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            quam!
          </p>
        </div>
        {/* <div className="p-6 rounded-xl bg-black">
          <img
            className="mx-auto rounded-full mb-6"
            src="https://gomycode.com/tn/wp-content/uploads/sites/26/2023/02/fullstack-js-bootcamp-1-scaled-480x304.jpg"
            alt=""
          />
          <h1 className="sm:text-xl font-semibold text-plum">Bootcamps</h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-deepSkyBlue">Bootcamp Data Scientist</h2>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            quam!
          </p>
        </div> */}

        <div className="border-2 border-gold p-6 rounded-xl bg-white">
          <img
            className="mx-auto rounded-full mb-6"
            src="https://gomycode.com/tn/wp-content/uploads/sites/26/2023/02/fullstack-js-bootcamp-1-scaled-480x304.jpg"
            alt=""
          />
          <h1 className="sm:text-xl font-semibold text-plum">Bootcamps</h1>
          <h2 className="text-xl sm:text-2xl font-semibold">Bootcamp Data Scientist</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            quam!
          </p>
        </div>
        <div className="border-2 border-gold p-6 rounded-xl bg-white">
          <img
            className="mx-auto rounded-full mb-6"
            src="https://gomycode.com/tn/wp-content/uploads/sites/26/2023/02/fullstack-js-bootcamp-1-scaled-480x304.jpg"
            alt=""
          />
          <h1 className="sm:text-xl font-semibold text-plum">Bootcamps</h1>
          <h2 className="text-xl sm:text-2xl font-semibold">Bootcamp Data Scientist</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            quam!
          </p>
        </div>  
        <div className="border-2 border-gold p-6 rounded-xl bg-white">
          <img
            className="mx-auto rounded-full mb-6"
            src="https://gomycode.com/tn/wp-content/uploads/sites/26/2023/02/fullstack-js-bootcamp-1-scaled-480x304.jpg"
            alt=""
          />
          <h1 className="sm:text-xl font-semibold text-plum">Bootcamps</h1>
          <h2 className="text-xl sm:text-2xl font-semibold">Bootcamp Data Scientist</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            quam!
          </p>
        </div>   
      </div>
    </section>
  );
};

export default Courses;
