import { useAlert } from "@/context/alert/alertContext";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Admin = () => {
  const data = useOutletContext();
  console.log(data.user);
  const {setAlert} = useAlert();

  useEffect(() => {
    setAlert(data.message, "success")
  }, [])
  return (
    <>
      <span className="text-black dark:text-white block mb-5">
        Welcome {data.user.firstName}{" "}
      </span>
    </>
  );
};

export default Admin;
