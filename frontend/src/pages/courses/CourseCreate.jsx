import { createCourse } from "@/utils/api";
import CourseForm from "./CourseForm";
import { useActionData } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { redirect } from "react-router-dom";

const CourseCreate = () => {
  const actionData = useActionData();
  // const [data, setData] = useState(actionData || { message: "" });
  // useEffect(() => {
  //   actionData && setData(actionData);
  // }, [actionData]);

  const [data, setData] = useState({
    courseName: "",
    duration: "",
    price: "",
    skills: "",
    content: "",
    studyField: { name: "" },
    description: ""
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-6 w-full border-b border-gray-600 pb-4 text-center text-2xl dark:text-white">
        Ajouter une nouvelle formation
      </h1>
      <CourseForm data={data} setData={setData} actionData={actionData} />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = {
    ...Object.fromEntries(formData),
    skills: formData
      .get("skills")
      .split(",")
      .map((el) => el.trim()),
    content: formData
    .get("content")
    .split(",")
    .map((el) => el.trim()),
  };

  try {
    await createCourse(data);
  } catch (error) {
    console.log(error);
    if (error.status === 400) {
      return error;
    }
  }

  return redirect("/admin/courses");
};

export default CourseCreate;
