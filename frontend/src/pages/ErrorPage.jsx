import Navbar from "@/components/Navbar";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <>
      <Navbar />
      <main className="text-gray-400 text-2xl min-h-screen flex items-center justify-center">
        <p>{error.status} | {error.message || error.statusText}</p>
      </main>
    </>
  );
};

export default ErrorPage;
