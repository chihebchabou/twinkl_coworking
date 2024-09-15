import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorAdminPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Flowbite>
      <div className="bg-[#e7e8e9] dark:bg-[#111827] min-h-screen flex flex-col items-center justify-center">
        <p className="text-black dark:text-white text-2xl block mb-5">
          {error.status} | {error.message || error.statusText}
        </p>
        <p>{error.status === 401 && <Link className="bg-sky-900 hover:bg-sky-500 block text-white px-4 py-2 rounded-md" to="/admin/login">Login</Link>}</p>
      </div>
      <DarkThemeToggle className="fixed bottom-5 right-5" />
    </Flowbite>
  );
};

export default ErrorAdminPage;
