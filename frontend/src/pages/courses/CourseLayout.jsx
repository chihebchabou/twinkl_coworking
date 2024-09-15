import { Navbar } from "flowbite-react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const CourseLayout = () => {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as={Link} to="create">
            Create Course
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="mt-3">
        <Outlet />
      </div>
    </>
  );
};

export default CourseLayout;
