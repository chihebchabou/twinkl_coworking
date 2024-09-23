import { login } from "@/utils/api";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";

const Login = () => {
  const data = useActionData();
  const navigation = useNavigation();
  console.log(navigation.state);
  console.log("data:", data);
 
  return (
    <Flowbite>
      <main className="flex flex-col h-screen w-full justify-center items-center px-4 bg-[#e7e8e9] dark:bg-[#111827] dark:text-gray-400">
        <Form
          className="border border-gray-600 dark:bg-[#0b0f18] rounded-md w-[300px] sm:w-[500px] lg:w-[400px]"
          method="post"
          action="/admin/login"
        >
          <h1 className="text-center p-5 bg-sky-700 text-white">
            Administration
          </h1>
          <div className="p-5 space-y-3">
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="p-2 outline-none rounded-md border border-black focus:border-sky-500 dark:bg-gray-700"
              />
              <small className="text-red-500">{data && data.message}</small>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="p-2 outline-none rounded-md border border-black focus:border-sky-500 dark:bg-gray-700"
              />
              <small className="text-red-500">{data && data.message}</small>
            </div>
            <div className="flex justify-end">
              <button className="bg-sky-900 hover:bg-sky-500 block text-white px-4 py-2 rounded-md">
                {navigation.state === "submitting" ? "Wait..." : "Login"}{" "}
              </button>
            </div>
          </div>
        </Form>
      </main>
      <DarkThemeToggle className="fixed bottom-5 right-5" />
    </Flowbite>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // await login(data);

  try {
    await login(data);
  } catch (error) {
    if (error.status === 400) {
      return error;
    }
  }
  return redirect("/admin");
};

export default Login;
