const mongoose = require('mongoose');

// Định nghĩa Schema cho collection 'kendo'
const kendoSchema = new mongoose.Schema(
  {
    student_id: { type: String, required: true }, 
    name: { type: String, required: true }
  },
  { collection: process.env.COLLECTION_NAME || 'kendo' } 
);

// Xuất model để sử dụng trong routes
module.exports = mongoose.model('kendo', kendoSchema);
