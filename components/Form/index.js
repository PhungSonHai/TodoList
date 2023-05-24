import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native'
import styles from './style'

export default function Form(props) {
    const [task, setTask] = useState({
        textTask: '',
        check: false
    });
    function handleAddTask() {
        if(!task.textTask) 
        {
            Alert.alert('Warning', 'Please enter your task before add task!', 
            [
                {
                    text: 'OK',
                },
            ]);
        }
        else
        {
            props.onAddTask(task)
            setTask({
                textTask: '',
                check: false
            })
            Keyboard.dismiss()
        }
    }

    function handleSetTask(text) {
        let temp = {...task}
        temp.textTask = text
        setTask(temp)
    }

    return (
        <View style={styles.wrapAddTask}>
            <View>
                <TextInput style={styles.inputAddTask} onChangeText={(text) => handleSetTask(text)} value={task.textTask} placeholder='Enter your task...'/>
            </View>
            <TouchableOpacity onPress={handleAddTask} style={styles.buttonAdd}>
                <Text style={styles.textAdd}>+</Text>
            </TouchableOpacity>
        </View>
    )
}