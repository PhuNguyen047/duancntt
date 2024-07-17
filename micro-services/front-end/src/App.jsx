import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Index from './Pages/Index/Index';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Contact from './Pages/Contact/Contact';
import Mainpage from './Pages/Mainpage/Mainpage';
import ChangePassword from './Pages/ChangePassword/ChangePassword';
import ViewProfile from './Pages/ViewProfile/ViewProfile';
import Teachers from './Pages/Teachers/Teachers';
import Courses from './Pages/Courses/Courses';
import Course_detail from './Pages/Courses/Course_detail';
import Student from './Pages/Student/Student';
import Exams from './Pages/Exams/Exams';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:className" element={<Course_detail />} />
          <Route path="/students" element={<Student />} />
          <Route path="/exams" element={<Exams />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
