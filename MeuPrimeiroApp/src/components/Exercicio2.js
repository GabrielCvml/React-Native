import { View, Text, Button} from 'react-native'
import React from 'react'
import { useState } from 'react';

const Exercicio2 = () => { 
    const [contador, setContador] = useState(0);

    function incrementar(){
        setContador(contador+1);
    }
    function decrementar(){
        setContador(contador-1);
    }

  return (
    <View>
        <Text>O contador esta em {contador}</Text>
        <Button title='Incrementar' onPress={incrementar}>Somar</Button>
        <Button title='Decrementar' onPress={decrementar}>Subtrair</Button>
    </View>
  )
}

export default Exercicio2