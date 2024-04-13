import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';

import Dashboard from './pages/admin'
import Login from './pages/admin/Login';
import Main from './pages';
import Home from './pages/Home';


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
          <Route index element={<Dashboard />} />
          <Route path='login' element={<Login />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App