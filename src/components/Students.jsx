import { Link, useSearchParams } from "react-router-dom";

function Students() {

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("name") || "";

    const students = [
        { id: 1, name: "Sailaja", branch: "CSE" },
        { id: 2, name: "Ravi", branch: "ECE" },
        { id: 3, name: "Priya", branch: "IT" }
    ];

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page">

            <h2>Student Details</h2>

            <input
                type="text"
                placeholder="Search student"
                value={search}
                onChange={(e) =>
                    setSearchParams(
                        e.target.value ? { name: e.target.value } : {}
                    )
                }
            />

            {filteredStudents.map((student) => (

                <div className="student" key={student.id}>

                    <h3>{student.name}</h3>

                    <p>Branch: {student.branch}</p>

                    <Link to={`/details/${student.id}`}>
                        View Details
                    </Link>

                </div>

            ))}

        </div>
    );
}

export default Students;