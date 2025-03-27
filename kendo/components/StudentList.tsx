import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { Student } from '../types/Student';

interface StudentListProps {
  students: Student[]; // ✅ Now receiving students from props
  onEdit: (student: Student) => void;
  onDelete: (student_id: string) => void;
}

const StudentList: React.FC<StudentListProps> = ({ students, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.student_id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.text}>ID: {item.student_id}</Text>
            <Text style={styles.text}>Tên: {item.name}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Sửa" onPress={() => onEdit(item)} />
              <Button title="Xóa" onPress={() => onDelete(item.student_id)} color="red" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default StudentList;
