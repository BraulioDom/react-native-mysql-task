import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'

import Layout from "../components/Layout";
import { saveTask, getTask, updateTask } from "../api";

const TaskFormScreen = ({ navigation, route }) => {

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const [editing, setEditing] = useState(false)

    const handleChange = (name, value) => setTask({ ...task, [name]: value })

    const handleSubmit = async () => {
        try {
            if(!editing){
                await saveTask(task)
            } else{
                await updateTask(route.params.id, task)
            }
            navigation.navigate('HomeScreen')
        } catch(error) {
            console.log(error);
        }
    }

    const loadTask = async () => {
        const res = await getTask(route.params.id)
        setTask({title: res.title, description: res.description})
    }

    useEffect(() => {
        if(route.params && route.params.id){
            navigation.setOptions({headerTitle: 'Updating a task'})
            setEditing(true)
            loadTask()
        }
    }, [])

    return (
        <Layout>
            <TextInput
                placeholder='Write a title'
                placeholderTextColor='#546574'
                style={styles.input}
                onChangeText={(text) => handleChange('title', text)}
                value={task.title || ''}
            />
            <TextInput
                placeholder='Write a description'
                placeholderTextColor='#546574'
                style={styles.input}
                onChangeText={(text) => handleChange('description', text)}
                value={task.description || ''}
            />
            <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Save Task</Text>
            </TouchableOpacity>
        </Layout>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#10ac84',
        height: 35,
        color: '#ffffff',
        padding: 4,
        textAlign: 'center',
        borderRadius: 5
    },
    buttonSave: {
        padding: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: '#10ac84',
        width: '90%'
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center'
    }
})

export default TaskFormScreen
