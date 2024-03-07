import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Atividade3 = () => {
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
      flexDirection: 'row',
    },
    laterais: {
      height: 50,
      width: 50,
    },
    meio: {
      height: 50,
      flex: 1,
    }
})
export default Atividade3