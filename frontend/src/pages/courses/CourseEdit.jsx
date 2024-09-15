import { useLoaderData } from "react-router-dom";
import CourseForm from "./CourseForm";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateCourse } from "@/utils/api";
import { redirect } from "react-router-dom";
import { useActionData } from "react-router-dom";

const CourseEdit = () => {
  const actionData = useActionData();
  const [data, setData] = useState(useLoaderData());
  const { slug } = useParams();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-6 w-full border-b border-gray-600 pb-4 text-center text-2xl dark:text-white">
        Editer une formation
      </h1>
      <CourseForm data={data} edit={true} setData={setData} actionData={actionData} slug={slug} />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request, params }) => {
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
    await updateCourse(data, params.slug);
  } catch (error) {
    console.log(error);
    if (error.status === 400) {
      return error;
    }
  }

  return redirect("/admin/courses");
};

export default CourseEdit;
