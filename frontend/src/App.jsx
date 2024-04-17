import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';

import Dashboard from './pages/admin'
import Login from './pages/admin/Login';
import Main from './pages';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  return (
    <Router>
      <Routes>

        {/* Main */}
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='courses'>
            <Route index element={<Courses />} />
            <Route path='detail' element={<CourseDetail />} />
          </Route>
        </Route>

        {/* Admin */}
        <Route path='admin' >
          <Route element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path='login' element={<Login />} />
        </Route>

      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App