import { useState, useCallback } from "react";
import StudentCard from "./components/StudentCard";
import RegisterCourse from "./components/RegisterCourse";
import "./App.css";

function App() {

  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Client Side Programming",
      credits: 6,
      grade: 10,
      attending: true,
      difficulty: "Moderate"
    },
    {
      id: 2,
      name: "Operating Systems",
      credits: 6,
      grade: 9,
      attending: true,
      difficulty: "Hard"
    },
    {
      id: 3,
      name: "Databases",
      credits: 6,
      grade: 7,
      attending: false,
      difficulty: "Moderate"
    },
    {
      id: 4,
      name: "Applied Probability and Statistics",
      credits: 6,
      grade: 8,
      attending: true,
      difficulty: "Hard"
    },
    {
      id: 5,
      name: "Written Communication",
      credits: 3,
      grade: 10,
      attending: true,
      difficulty: "Easy"
    },
    {
      id: 6,
      name: "English for IT",
      credits: 3,
      grade: 9,
      attending: true,
      difficulty: "Easy"
    }
  ]);

  const addCourse = useCallback((course) => {
    setCourses(prev => [...prev, course]);
  }, []);

  return (
      <div className="container">

        <h1 className="title">Semester Course Tracker</h1>

        <div className="student-info">
          <h2>Emine</h2>
          <p>ID: 132460</p>
          <p>These are my enrolled courses for this semester:</p>
        </div>

        <div className="courses">
          {courses.map(course => (
              <StudentCard key={course.id} course={course} />
          ))}
        </div>

        <RegisterCourse addCourse={addCourse} />

      </div>
  );
}

export default App;

