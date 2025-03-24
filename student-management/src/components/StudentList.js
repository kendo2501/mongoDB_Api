import React from "react";

function StudentList({ students, onEdit, onDelete }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Mã sinh viên</th>
          <th>Tên sinh viên</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.student_id}>
            <td>{student.student_id}</td>
            <td>{student.name}</td>
            <td>
              <button onClick={() => onEdit(student)}>Sửa</button>
              <button onClick={() => onDelete(student)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
