import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import StudentList from '../components/StudentList';
import AddStudent from '../components/AddStudent';
import EditStudent from '../components/EditStudent';
import DeleteStudent from '../components/DeleteStudent';
import { Student } from '../types/Student';
import { fetchStudents } from '../services/api';

const StudentScreen = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  // Load danh sách sinh viên
  const loadStudents = async () => {
    try {
      const data = await fetchStudents();
      setStudents(data);
    } catch (error) {
      console.error('Lỗi khi tải danh sách sinh viên:', error);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <View>
      {/* Form sửa sinh viên */}
      {selectedStudent && (
        <View style={styles.middle}>
          <EditStudent 
            student={selectedStudent} 
            onSuccess={() => { 
              setSelectedStudent(null); 
              loadStudents(); 
            }} 
          />
        </View>
      )}

      {/* Xác nhận xóa sinh viên */}
      {isDeleting !== null && (
        <DeleteStudent 
          student_id={isDeleting} 
          onSuccess={() => { 
            setIsDeleting(null); 
            loadStudents(); 
          }} 
        />
      )}

      {/* Danh sách sinh viên */}
      <StudentList 
        students={students} 
        onEdit={setSelectedStudent} 
        onDelete={setIsDeleting} 
      />

      {/* Nút thêm sinh viên */}
      <View style={styles.middle}>
        <Button title="Thêm sinh viên" onPress={() => setIsAdding(!isAdding)} />
        {isAdding && (
          <AddStudent 
            onSuccess={() => { 
              setIsAdding(false); 
              loadStudents(); 
            }} 
          />
        )}
      </View>
    </View>    
  );
};

const styles = StyleSheet.create({
  middle: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default StudentScreen;
