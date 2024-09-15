import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "@/pages/RootLayout";
import Home from "./pages/home";
import Courses, { loader as coursesLoader } from "./pages/courses";
import CourseDetail, {
  loader as courseDetailLoader,
} from "./pages/courses/CourseDetail";
import CourseLayout from "./pages/courses/CourseLayout";
import CourseCreate, {
  action as createCourseAction,
} from "./pages/courses/CourseCreate";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/about";
import Admin from "./pages/admin";
import Login, { action as loginAction } from "./pages/admin/Login";
import ErrorAdminPage from "./pages/ErrorAdminPage";
import AdminLayout, {
  loader as profileLoader,
} from "./pages/admin/AdminLayout";
import Register, {
  loader as registerLoader,
  action as registerAction,
} from "./pages/register";
import CourseEdit, {
  action as editCourseAction,
} from "./pages/courses/CourseEdit";
import AlertState from "./context/alert/AlertState";
import AlertComponent from "./components/AlertComponent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses">
          <Route index element={<Courses />} loader={coursesLoader} />
          <Route
            path=":slug"
            element={<CourseDetail />}
            loader={courseDetailLoader}
          />
        </Route>
        <Route
          path="register"
          element={<Register />}
          loader={registerLoader}
          action={registerAction}
        />
      </Route>
      {/* Admin */}
      <Route path="/admin" errorElement={<ErrorAdminPage />}>
        <Route path="" element={<AdminLayout />} loader={profileLoader}>
          <Route index element={<Admin />} />
          <Route path="courses" element={<CourseLayout />}>
            <Route index element={<Courses />} loader={coursesLoader} />
            <Route
              path="create"
              element={<CourseCreate />}
              action={createCourseAction}
            />
            <Route
              path=":slug/edit"
              element={<CourseEdit />}
              loader={courseDetailLoader}
              action={editCourseAction}
            />
          </Route>
        </Route>
        <Route path="login" element={<Login />} action={loginAction} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <AlertState>
      <AlertComponent/>
      <RouterProvider router={router} />
    </AlertState>
  );
};

export default App;
