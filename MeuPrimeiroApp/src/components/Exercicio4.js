import { View, Text } from 'react-native'
import React from 'react'

const Exercicio4 = () => {

    const array = ['GabrielC','Henrique','Isthefani','Jardel']

  return (
    <View>
        {array.map((item, index) => (
            <Text key={index}>{item}</Text>
        ))}

        
      <Text>{array.map(array => <Text> {array} </Text>)}</Text>
    </View>
  )
}

export default Exercicio4