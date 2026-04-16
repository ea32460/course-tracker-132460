import { useState, useRef, useCallback } from "react";

export default function RegisterCourse({ onAddCourse }) {
    const [formData, setFormData] = useState({
        name: "",
        credits: "",
        grade: "",
        attending: false,
        difficulty: "Easy",
    });

    // useRef used to focus the course name input after submit
    const nameInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // useCallback used to prevent unnecessary re-creation of submit function on re-renders
    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            // validation: name not empty + grade between 5 and 10
            const gradeNum = Number(formData.grade);

            if (formData.name.trim() === "") {
                alert("Course name cannot be empty");
                return;
            }

            if (gradeNum < 5 || gradeNum > 10 || isNaN(gradeNum)) {
                alert("Grade must be a number between 5 and 10");
                return;
            }

            const newCourse = {
                id: Date.now(),
                name: formData.name,
                credits: Number(formData.credits),
                grade: gradeNum,
                attending: formData.attending,
                difficulty: formData.difficulty,
            };

            onAddCourse(newCourse);

            // reset form
            setFormData({
                name: "",
                credits: "",
                grade: "",
                attending: false,
                difficulty: "Easy",
            });

            // focus back to input after submit
            nameInputRef.current.focus();
        },
        [formData, onAddCourse]
    );

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register New Course</h2>

            <input
                ref={nameInputRef}
                type="text"
                name="name"
                placeholder="Course name"
                value={formData.name}
                onChange={handleChange}
            />

            <input
                type="number"
                name="credits"
                placeholder="Credits"
                value={formData.credits}
                onChange={handleChange}
            />

            <input
                type="number"
                name="grade"
                placeholder="Grade (5-10)"
                value={formData.grade}
                onChange={handleChange}
            />

            <label>
                <input
                    type="checkbox"
                    name="attending"
                    checked={formData.attending}
                    onChange={handleChange}
                />
                Attending regularly
            </label>

            <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
            >
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Hard">Hard</option>
            </select>

            <button type="submit">Register</button>
        </form>
    );
}