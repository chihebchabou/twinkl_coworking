import { customerRegister, getAllCourses } from "@/utils/api";
import { useEffect } from "react";
import { useState } from "react";
import { Form, useActionData, useLoaderData } from "react-router-dom";

const Register = () => {
  const data = useLoaderData();
  const submittedData = useActionData();

  const [form, setForm] = useState({firstName:"", lastName: "", phone:"", email: "", course:""});
  const {firstName, lastName, phone, email, course} = form;

  const onChange = e => setForm({...form, [e.target.name]: e.target.value});

  useEffect(()=>{
    if (submittedData && submittedData.status===201) {
      setForm({firstName:"", lastName: "", phone:"", email: "", course:""})
    }
  }, [submittedData])


  return (
    <div className="pt-[90px] px-10 md:px-0 w-full min-h-screen flex flex-col justify-center items-center  text-black bg-white">
      <p className="uppercase md:text-4xl sm:text-3xl text-2xl text-plum font-bold my-5">
        Faire des réservations
      </p>

      <Form action="/register" method="post" className="w-2/3 lg:w-2/5 mx-auto">
        {submittedData && (
          <div
            className={`text-center ${
              [200, 201, 300, 301].indexOf(submittedData.status) === -1
                ? "text-red-500 bg-red-100"
                : "text-green-500 bg-green-100"
            } w-full rounded-md p-3 mb-4`}
          >
            {submittedData.message.split(".").map((m, i) => (
              <div key={i}>{m}</div>
            ))}
          </div>
        )}
        <div className="mb-5">
          <label htmlFor="firstName" className="block mb-3">
            Prénom
          </label>
          <input
            className={`p-3 flex w-full ${
              submittedData &&
              [200, 201, 300, 301].indexOf(submittedData.status) === -1 &&
              "border-red-500 bg-red-100"
            } rounded-md text-black`}
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={onChange}
            placeholder="Enter first name"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="lastName" className="block mb-3">
            Nom
          </label>
          <input
            className={`p-3 flex w-full ${
              submittedData &&
              [200, 201, 300, 301].indexOf(submittedData.status) === -1 &&
              "border-red-500 bg-red-100"
            } rounded-md text-black`}
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={onChange}
            placeholder="Enter last name"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="block mb-3">
            Numéro de téléphone
          </label>
          <input
            className={`p-3 flex w-full ${
              submittedData &&
              [200, 201, 300, 301].indexOf(submittedData.status) === -1 &&
              "border-red-500 bg-red-100"
            } rounded-md text-black`}
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={onChange}
            placeholder="Enter phone number"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-3">
            Email
          </label>
          <input
            className={`p-3 flex w-full ${
              submittedData &&
              [200, 201, 300, 301].indexOf(submittedData.status) === -1 &&
              "border-red-500 bg-red-100"
            } rounded-md text-black`}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
            placeholder="Enter email"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="course" className="block mb-3">
            Choisis la formation qui t&apos;intéresse
          </label>
          <select
            className={`p-3 flex w-full ${
              submittedData &&
              [200, 201, 300, 301].indexOf(submittedData.status) === -1 &&
              "border-red-500 bg-red-100"
            } rounded-md text-black`}
            name="course"
            id="course"
            value={course}
            onChange={onChange}
          >
            <option value="">Veuillez sélectionner</option>
            {data &&
              data.map((course) => (
                <option key={course._id} value={course.courseName}>
                  {course.courseName}
                </option>
              ))}
          </select>
        </div>
        <button className="bg-deepSkyBlue w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black hover:bg-plum duration-300">
          Soumettre
        </button>
      </Form>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader = () => getAllCourses();

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    course: formData.get("course"),
  };
  try {
    return await customerRegister(data);
  } catch (error) {
    if (error.status === 400) {
      return error;
    }
  }
};

export default Register;
