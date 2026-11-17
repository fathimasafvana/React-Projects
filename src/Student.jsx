
import { useState } from "react";

function Student() {
    const [student, setStudent] = useState({
        name: "fathima",
        age: 22,
        Course: "React"
    });

    function changeName() {
        setStudent(prev => ({
            ...prev,
            name: "safvana"
        }));
    }

    return (
        <div>
            <h2>Name: {student.name}</h2>
            <h2>Age: {student.age}</h2>
            <h2>Course: {student.Course}</h2>

            <button onClick={changeName}>
                Change Name
            </button>
        </div>
    );
}

export default Student;
