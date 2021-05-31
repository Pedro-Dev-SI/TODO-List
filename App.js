import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';

//Importando o componente CardTarefa
import CardTarefa from './components/CardTarefa';


export default function App() {

  const [tarefa, setTarefa] = useState();

  const [tarefaArray, setTarefaArray] = useState([]);

  const adicionaTarefa = () => {
    Keyboard.dismiss();
    setTarefaArray([...tarefaArray, tarefa]);
    setTarefa(null);
  }

  const deletaTarefa = (index) => {
    let arrayAux = [...tarefaArray];
    arrayAux.splice(index, 1);
    setTarefaArray(arrayAux);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.sectionTasks}>
        <Text style={styles.title}>TODO List</Text>

        <View style={styles.items}>

          {/* Aqui é onde os cards de tarefas serão exibidos */}

          {
            tarefaArray.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => deletaTarefa(index)}>
                  <CardTarefa text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.containerTarefas}
      >
        <TextInput
          style={styles.input}
          placeholder={"Digite sua tarefa..."}
          value={tarefa}
          onChangeText={(text) => setTarefa(text)}
        />

        <TouchableOpacity onPress={() => adicionaTarefa(tarefa)}>
          <View style={styles.addTarefaBtn}>
            <Text style={styles.plusSign}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}


//*Estilização
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

  containerTarefas: {
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

  addTarefaBtn: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#5a5a5a",
    borderWidth: 1,
  }


});
