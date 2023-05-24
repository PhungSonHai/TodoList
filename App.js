import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Alert } from 'react-native';
import ListWork from './components/ListWork';
import Form from './components/Form';
import styles from './style';
import { useState } from 'react';

export default function App() {
  const [listTask, setListTask] = useState([])
  function handleAddTask(task) {
    setListTask((state) => [...state, task])
  }

  function handleDeleteTask(id) {
    Alert.alert('Warning', 'Do you want to delete this task?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK', 
        onPress: () => {
          let tempList = [...listTask]
          tempList.splice(tempList.findIndex(item => item.id == id), 1)
          setListTask(tempList)
        }
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>Todo List</Text>
          <Text style={styles.textCount}>{listTask.length} Task</Text>
        </View>
        <ScrollView style={styles.wrapListWork}>
          {
            listTask.map((item, index) => (
              <ListWork key={item.id} task={item.textTask} onDeleteTask={() => handleDeleteTask(item.id)} numberTask={index+1} checkComplete={item.check} />
            ))
          }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask}/>
    </View>
  );
}