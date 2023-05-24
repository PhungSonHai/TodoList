import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import styles from './style';

const ListWork = (props) => {
    const {task, numberTask, checkComplete} = props
    const [checkbox, setCheckbox] = useState(checkComplete)

    function handleCheckComplete() {
        setCheckbox(state => !state)
    }

    return (
        <View style={styles.divWork}>
            <TouchableOpacity onPress={props.onDeleteTask} style={styles.contentTask}>
                <View style={styles.wrapNumber}>
                    <Text>{numberTask < 10 ? `0${numberTask}` : numberTask}</Text>
                </View>
                <View style={styles.wrapTextWork}>
                    <Text numberOfLines={2} style={[styles.textWork, checkbox ? styles.workCompleted : '']}>{task}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCheckComplete} style={styles.divCheckbox}>
                <View>
                    <CheckBox 
                        value={checkbox}
                        onValueChange={handleCheckComplete}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ListWork;