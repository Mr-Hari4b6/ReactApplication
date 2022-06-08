import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './Hello';
export default function App() {
  return (
    <View style={styles.container}>
      <h3>Welcome To Globotroating AwesomeProject!</h3>
      <StatusBar style="auto" />
      <HelloWorld></HelloWorld>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    color:'orange',
    fontSize:'35px',
    fontWeight:'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
