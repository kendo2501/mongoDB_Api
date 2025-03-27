import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { updateStudent } from '../services/api';
import { Student } from '../types/Student';

const EditStudent = ({ student, onSuccess }: { student: Student; onSuccess: () => void }) => {
  const [name, setName] = useState(student.name);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!name.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên sinh viên');
      return;
    }

    setLoading(true);
    try {
      await updateStudent(student.student_id, name);
      Alert.alert('Thành công', 'Cập nhật tên sinh viên thành công');
      onSuccess(); // Gọi lại danh sách sau khi cập nhật
    } catch (error) {
      console.error('Lỗi khi cập nhật sinh viên:', error);
      Alert.alert('Lỗi', 'Không thể cập nhật sinh viên');
    }
    setLoading(false);
  };

  return (
    <View>
      <TextInput 
        value={name} 
        onChangeText={setName} 
        placeholder="Tên sinh viên" 
      />
      <Button 
        title={loading ? "Đang cập nhật..." : "Cập nhật"} 
        onPress={handleUpdate} 
        disabled={loading} 
      />
    </View>
  );
};

export default EditStudent;
