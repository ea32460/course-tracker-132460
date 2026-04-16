import { useState, useRef } from "react";

function RegisterCourse({ addCourse }) {

    const [name, setName] = useState("");
    const [credits, setCredits] = useState(0);
    const [grade, setGrade] = useState(5);
    const [attending, setAttending] = useState(false);
    const [difficulty, setDifficulty] = useState("Easy");

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === "") {
            alert("Course name is required");
            return;
        }

        if (grade < 5 || grade > 10) {
            alert("Grade must be between 5 and 10");
            return;
        }

        const newCourse = {
            id: Date.now(),
            name,
            credits,
            grade,
            attending,
            difficulty
        };

        addCourse(newCourse);

        inputRef.current.focus();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>

            <h3>Register New Course</h3>

            <input
                ref={inputRef}
                type="text"
                placeholder="Course name"
                onChange={(e) => setName(e.target.value)}
            />



            <input
                type="number"
                placeholder="Credit hours"
                onChange={(e) => setCredits(Number(e.target.value))}
            />


            <input
                type="number"
                placeholder="Grade (5-10)"
                onChange={(e) => setGrade(Number(e.target.value))}
            />


            <label>
                <input
                    type="checkbox"
                    onChange={(e) => setAttending(e.target.checked)}
                />
                Attending regularly
            </label>


            <select onChange={(e) => setDifficulty(e.target.value)}>
                <option>Easy</option>
                <option>Moderate</option>
                <option>Hard</option>
            </select>

            <button type="submit">Register</button>

        </form>
    );
}

export default RegisterCourse;

