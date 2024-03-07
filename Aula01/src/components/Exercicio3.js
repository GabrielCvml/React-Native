import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react';

const Exercicio3 = () => {
    const [text, setText] = useState("")
  return (
    <View>
      <TextInput style={styles.input} placeholder='Digite algo aqui...' label="Nome" value={text} onChangeText={text => setText(text)}/>
      <Text>Olá! {text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Exercicio3