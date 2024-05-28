import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from './pages/courses/Courses';
import CourseDetail from './pages/courses/CourseDetail';

import Admin from './pages/admin'
import Login from './pages/admin/Login';
import Main from './pages';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import CustomerList from './pages/customers/CustomerList';
import CourseCreate from './pages/courses/CourseCreate';
import CourseEdit from './pages/courses/CourseEdit';
import Dashboard from './pages/admin/Dashboard';


const App = () => {
  return (
    <Router>
      <Routes>

        {/* Main */}
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='courses'>
            <Route index element={<Courses />} />
            <Route path=':slug' element={<CourseDetail />} />
          </Route>
        </Route>

        {/* Admin */}
        <Route path='admin' >
          <Route element={<PrivateRoute />}>
            <Route path='' element={<Admin />} >
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='customers' element={<CustomerList />} />
              <Route path='courses'>
                <Route index element={<Courses />} />
                <Route path='create' element={<CourseCreate />} />
                <Route path=':slug/edit' element={<CourseEdit />} />
              </Route>
            </Route>
          </Route>
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App