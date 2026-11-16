import { useParams, Link } from "react-router-dom";

function Details() {

    const { id } = useParams();

    const students = [
        { id: 1, name: "Sailaja", branch: "CSE" },
        { id: 2, name: "Ravi", branch: "ECE" },
        { id: 3, name: "Priya", branch: "IT" }
    ];

    const student = students.find(
        (item) => item.id === Number(id)
    );

    return (
        <div className="page">

            <h2>Student Details Page</h2>

            {student ? (
                <>
                    <p>ID: {student.id}</p>
                    <p>Name: {student.name}</p>
                    <p>Branch: {student.branch}</p>
                </>
            ) : (
                <p>Student not found!</p>
            )}

            <Link to="/students">Back to Students</Link>

        </div>
    );
}

export default Details;