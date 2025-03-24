import React, { useState } from "react";
import api from "../services/api";

function EditStudent({ student, onClose, onStudentUpdated }) {
  const [name, setName] = useState(student.name);

  const handleUpdate = async () => {
    if (!name.trim()) {
      alert("Tên sinh viên không được để trống!");
      return;
    }
    try {
      await api.put(`/update/${student.student_id}`, { name });
      alert("Cập nhật sinh viên thành công!");
      onStudentUpdated();
      onClose();
    } catch (error) {
      console.error("Lỗi cập nhật sinh viên:", error);
      alert("Lỗi khi cập nhật sinh viên.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Cập nhật Sinh Viên</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleUpdate}>Cập nhật</button>
        <button onClick={onClose}>Hủy</button>
      </div>
    </div>
  );
}

export default EditStudent;
