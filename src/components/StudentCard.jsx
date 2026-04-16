function StudentCard({ course }) {
    return (
        <div className="card">

            <h3>{course.name}</h3>

            <p>Credits: {course.credits}</p>
            <p>Grade: {course.grade}</p>
            <p>Attending: {course.attending ? "Yes" : "No"}</p>
            <p>Difficulty: {course.difficulty}</p>


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
