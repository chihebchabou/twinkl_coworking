/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CourseCard = (props) => {
    const {courseName, studyField, description, slug} = props
    return ( 
        <div className="border-2 border-gold p-6 rounded-xl bg-white">
          <img
            className="mx-auto rounded-full mb-6"
            src="https://gomycode.com/tn/wp-content/uploads/sites/26/2023/02/fullstack-js-bootcamp-1-scaled-480x304.jpg"
            alt=""
          />
          <h1 className="sm:text-xl font-semibold text-plum">{studyField.name}</h1>
          <h2 className="text-lg md:text-xl font-semibold">
            <Link to={`/courses/${slug}`} className="hover:underline">{courseName}</Link>
          </h2>
          <p>
            {description}
          </p>
        </div>
     );
}
 
export default CourseCard;