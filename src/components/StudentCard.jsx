function StudentCard({ course }) {
    return (
        <div className="card">
            <h3>{course.name}</h3>

            <p><strong>Credits:</strong> {course.credits}</p>
            <p><strong>Grade:</strong> {course.grade}</p>
            <p><strong>Attending:</strong> {course.attending ? "Yes" : "No"}</p>
            <p><strong>Difficulty:</strong> {course.difficulty}</p>

            {course.grade < 50 && course.attending === false && (
                <span className="badge risk">At risk</span>
            )}

            {course.grade >= 85 && (
                <span className="badge success">Eligible for distinction</span>
            )}
        </div>
    );
}

export default StudentCard;