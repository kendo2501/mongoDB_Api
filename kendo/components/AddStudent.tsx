import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { addStudent } from '../services/api';

const AddStudent = ({ onSuccess }: { onSuccess: () => void }) => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');

  const handleAdd = async () => {
    if (!studentId || !name) return;
    await addStudent(studentId, name);
    setStudentId('');
    setName('');
    onSuccess();
  };

  return (
    <View>
      <TextInput 
        placeholder="ID sinh viên" 
        value={studentId} 
        onChangeText={setStudentId} 
        keyboardType="numeric"
      />
      <TextInput 
        placeholder="Tên sinh viên" 
        value={name} 
        onChangeText={setName} 
      />
      <Button title="Thêm mới" onPress={handleAdd} />
    </View>
  );
};

export default AddStudent;
