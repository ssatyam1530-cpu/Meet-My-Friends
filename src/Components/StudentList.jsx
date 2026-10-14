import StudentCard from "./StudentCards";

function StudentList({ students }) {
  return (
    <section className="section classes" id="students">
      <div className="container">
        <h2 className="section_title">Students</h2>
        <p className="section_subtitle">
          Meet the students of Cycle 3 B.Tech A.
        </p>

        <div className="classes-grid">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentList;