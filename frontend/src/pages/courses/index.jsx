import { getAllCourses } from "@/utils/api";
import { useLoaderData, defer, Await } from "react-router-dom";
import CourseCard from "./CourseCard";
import { Suspense } from "react";

const Courses = () => {
  const { courses } = useLoaderData()
  
    return ( 
      <section className="bg-white min-h-screen flex flex-col items-center justify-center  text-black">
        <Suspense fallback={<p className="text-3xl font-bold">Loading...</p>}>
          <Await resolve={courses} errorElement={<p>Error loading data</p>}>
            {loadedData => 
              <div className="max-w-[1240px] grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[90px] px-3">

                {loadedData.map(element => <CourseCard key={element._id} {...element} />)}
                
              </div>
            }
          </Await>
        </Suspense>
      </section>
     );
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => defer({courses: getAllCourses()})

 
export default Courses;