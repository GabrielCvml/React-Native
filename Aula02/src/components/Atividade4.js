import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Atividade4 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.laterais, { backgroundColor: "red" }]}></View>
      <View style={[styles.meio, { backgroundColor: "green" }]}></View>
      <View style={[styles.laterais, { backgroundColor: "blue" }]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    laterais: {
      height: 50,
      width: '100%',
    },
    meio: {
      height: 50,
      flex: 1,
    }
})

export default Atividade4