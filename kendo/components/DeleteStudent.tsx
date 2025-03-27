import React from 'react';
import { View, Text, Button } from 'react-native';
import { deleteStudent } from '../services/api';

const DeleteStudent = ({ student_id, onSuccess }: { student_id: string, onSuccess: () => void }) => {
  const handleDelete = async () => {
    await deleteStudent(student_id);
    onSuccess();
  };

  return (
    <View>
      <Text>Bạn có chắc muốn xóa?</Text>
      <Button title="Xóa" onPress={handleDelete} />
    </View>
  );
};

export default DeleteStudent;
