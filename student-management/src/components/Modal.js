import React from "react";

function Modal({ title, children, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{title}</h3>
        {children}
        <div className="modal-actions">
          <button onClick={onClose} className="btn-cancel">Đóng</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
