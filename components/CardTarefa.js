import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function CardTarefa(props) {
   return (
      <View style={styles.item}>
         <View style={styles.itemInside}>
            <View style={styles.square}/>
            <Text style={styles.itemText}>{props.text}</Text>
         </View>
      </View>
   )
}


//*Estilização
const styles = StyleSheet.create({
   item: {
      backgroundColor: '#5A5A5A',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      minWidth: 330,
      minHeight: 60,
   },

   itemInside: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
   },

   square: {
      width: 24,
      height: 24,
      backgroundColor: '#FF7777',
      borderRadius: 5,
      marginRight: 15,
   },

   itemText: {
      fontSize: 18,
      color: '#FFF',
   },
})

export default CardTarefa;

