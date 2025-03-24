import React from "react";
import Modal from "./Modal";

function DeleteStudent({ student, onClose, onConfirm }) {
  return (
    <Modal title="Xác nhận xóa sinh viên" onClose={onClose}>
      <p>Bạn có chắc chắn muốn xóa sinh viên <strong>{student.name}</strong> không?</p>
      <div className="modal-actions">
        <button onClick={onConfirm} className="btn-danger">Xóa</button>
      </div>
    </Modal>
  );
}

export default DeleteStudent;
