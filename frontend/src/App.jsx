import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "@/pages/RootLayout";
import Home from "./pages/home";
import Courses, {loader as coursesLoader} from "./pages/courses";
import CourseDetail, {loader as courseDetailLoader} from "./pages/courses/CourseDetail";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/about";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout/>} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />}  />
    <Route path="courses">
      <Route index element={<Courses />} loader={coursesLoader}  />
      <Route path=':slug' element={<CourseDetail />} loader={courseDetailLoader} />
    </Route>
  </Route>
))

const App = () => {
  return <RouterProvider router={router} /> ;
}
 
export default App;