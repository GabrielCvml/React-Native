import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exercicio2 from './src/components/Exercicio2';
import Exercicio1 from './src/components/Exercicio1';
import Exercicio3 from './src/components/Exercicio3';
import Exercicio4 from './src/components/Exercicio4';

export default function App() {
  return (
    <View style={styles.container}>
      <Exercicio4></Exercicio4>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
