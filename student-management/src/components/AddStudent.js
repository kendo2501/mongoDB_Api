import React, { useState } from "react";
import Modal from "./Modal";

function AddStudent({ onClose, onAdd }) {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentId || !name) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    onAdd({ student_id: studentId, name });
    setStudentId("");
    setName("");
    onClose();
  };

  return (
    <Modal title="Thêm sinh viên" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mã sinh viên:</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div>
          <label>Tên sinh viên:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button type="submit" className="btn-save">Thêm</button>
        </div>
      </form>
    </Modal>
  );
}

export default AddStudent;
