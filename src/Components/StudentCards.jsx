function StudentCards({ student }) {
  return (
    <div className="student-card">
      <h3>
        {student.name} {student.emoji}
      </h3>
      <p>
        <strong>City:</strong> {student.city}
      </p>
      <p>
        <strong>Fun Fact:</strong> {student.funFact}
      </p>
      <p>
        <strong>Skills:</strong> {student.skills.join(", ")}
      </p>
    </div>
  );
}

export default StudentCards