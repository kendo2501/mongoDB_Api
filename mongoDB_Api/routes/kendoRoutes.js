const express = require('express');
const kendoModel = require('../models/kendoModel');
const router = express.Router();

// API: Lấy toàn bộ dữ liệu trong collection
router.get('/all', async (req, res) => {
  try {
    const data = await kendoModel.find();
    res.json(data);
  } catch (err) {
    console.error('❌ Lỗi server:', err);
    res.status(500).json({ error: 'Lỗi server' });
  }
});

// API: Tìm kiếm theo `student_id`
router.get('/search', async (req, res) => {
  try {
    const { student_id } = req.query;
    if (!student_id) {
      return res.status(400).json({ error: 'Thiếu tham số student_id' });
    }

    const result = await kendoModel.findOne({ student_id });
    if (!result) {
      return res.status(404).json({ error: 'Không tìm thấy kết quả' });
    }

    res.json(result);
  } catch (err) {
    console.error('❌ Lỗi server:', err);
    res.status(500).json({ error: 'Lỗi server' });
  }
});

// API: Thêm mới dữ liệu (chỉ có `student_id` và `name`)
router.post('/add', async (req, res) => {
  try {
    const { student_id, name } = req.body;
    if (!student_id || !name) {
      return res.status(400).json({ error: 'Thiếu dữ liệu đầu vào' });
    }

    const newEntry = new kendoModel({ student_id, name });
    await newEntry.save();

    res.status(201).json({ message: 'Thêm thành công', data: newEntry });
  } catch (err) {
    console.error('❌ Lỗi server:', err);
    res.status(500).json({ error: 'Lỗi server' });
  }
});

// API: Cập nhật `name` theo `student_id`
router.put('/update', async (req, res) => {
  try {
    const { student_id, name } = req.body;
    if (!student_id || !name) {
      return res.status(400).json({ error: 'Thiếu tham số student_id hoặc name' });
    }

    const updatedData = await kendoModel.findOneAndUpdate(
      { student_id },
      { name },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ error: 'Không tìm thấy student_id' });
    }

    res.json({ message: 'Cập nhật thành công', data: updatedData });
  } catch (err) {
    console.error('❌ Lỗi server:', err);
    res.status(500).json({ error: 'Lỗi server' });
  }
});

// API: Xóa dữ liệu theo `student_id`
router.delete('/delete', async (req, res) => {
  try {
    const { student_id } = req.body;
    if (!student_id) {
      return res.status(400).json({ error: 'Thiếu tham số student_id' });
    }

    const deletedData = await kendoModel.findOneAndDelete({ student_id });

    if (!deletedData) {
      return res.status(404).json({ error: 'Không tìm thấy student_id' });
    }

    res.json({ message: 'Xóa thành công', data: deletedData });
  } catch (err) {
    console.error('❌ Lỗi server:', err);
    res.status(500).json({ error: 'Lỗi server' });
  }
});

module.exports = router;
