require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); 
const kendoRoutes = require('./routes/kendoRoutes'); 

const app = express(); 
const PORT = process.env.PORT || 2501; 

// Kết nối database
connectDB();

// Middleware
app.use(express.json()); 
app.use(cors()); 

// Routes
app.use('/api/kendo', kendoRoutes); 

// Khởi động server
app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại: http://localhost:${PORT}`);
});
