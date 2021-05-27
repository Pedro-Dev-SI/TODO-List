import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Tasks from './components/Tasks';


export default function App() {

  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsDeleted = [...taskItems];
    itemsDeleted.splice(index, 1);
    setTaskItems(itemsDeleted);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.sectionTasks}>
        <Text style={styles.title}>TODO List</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Tasks text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTask}
      >
        <TextInput
          style={styles.input}
          placeholder={"Digite sua tarefa..."}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask(task)}>
          <View style={styles.addTask}>
            <Text style={styles.plusSign}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC'
  },

  sectionTasks: {
    flexDirection: 'column',
    alignItems: 'center',

  },

  title: {
    paddingTop: 55,
    paddingBottom: 40,
    backgroundColor: '#5A5A5A',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 45,
    color: '#FFFFFF',
  },

  items: {
    marginTop: 40,
  },

  writeTask: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 258,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    borderColor: '#5A5A5A',
    borderWidth: 1,
  },

  addTask: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#5a5a5a",
    borderWidth: 1,
  }


});
