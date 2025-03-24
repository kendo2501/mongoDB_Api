import React, { useEffect, useState } from "react";
import api from "../services/api";
import StudentList from "../components/StudentList";
import DeleteStudent from "../components/DeleteStudent";
import AddStudent from "../components/AddStudent";

function Home() {
  const [students, setStudents] = useState([]);
  const [isDeleting, setIsDeleting] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const fetchStudents = () => {
    api.get("/all")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error("Lỗi API:", err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async () => {
    if (!isDeleting) return;
    try {
      await api.delete(`/delete/${isDeleting.student_id}`);
      alert("Xóa thành công!");
      fetchStudents();
      setIsDeleting(null);
    } catch (error) {
      console.error("Lỗi xóa:", error);
      alert("Lỗi khi xóa.");
    }
  };

  const handleAdd = async (newStudent) => {
    try {
      await api.post("/add", newStudent);
      alert("Thêm thành công!");
      fetchStudents();
    } catch (error) {
      console.error("Lỗi thêm:", error);
      alert("Lỗi khi thêm.");
    }
  };

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <button onClick={() => setIsAdding(true)} className="btn-add">Thêm sinh viên</button>
      <StudentList students={students} onDelete={setIsDeleting} />
      
      {isAdding && <AddStudent onClose={() => setIsAdding(false)} onAdd={handleAdd} />}
      {isDeleting && (
        <DeleteStudent
          student={isDeleting}
          onClose={() => setIsDeleting(null)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}

export default Home;
