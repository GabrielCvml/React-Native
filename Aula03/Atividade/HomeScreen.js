import { View, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Ir para os Detalhes" onPress={() => navigation.navigate('Details', {itemId: 30, otherParam: 'Olá',})}/>
    </View>
  )
};

export default HomeScreen;