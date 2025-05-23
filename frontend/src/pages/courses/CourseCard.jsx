/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  const { courseName, studyField, description, slug, admin, image } = props;
  return (
    <div className="flex flex-col justify-between border-2 border-gold p-6 rounded-xl bg-white">
      <div className="mb-4">
        <img
          className="mx-auto rounded-full mb-6 w-full h-[200px] sm:h-[150px] object-cover"
          src={image}
          alt=""
        />
        <h1 className="sm:text-xl font-semibold text-plum">
          {studyField.name}
        </h1>
        <h2 className="text-lg md:text-xl font-semibold">
          <Link to={`/courses/${slug}`} className="hover:underline">
            {courseName}
          </Link>
        </h2>
        <p>{description}</p>
      </div>
      <div>
        {admin && (
          <Link
            className="flex justify-center items-center text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
            to={`/admin/courses/${slug}/edit`}
          >
            Editer
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
