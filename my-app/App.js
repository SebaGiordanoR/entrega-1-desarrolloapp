import { StyleSheet, Text, View } from 'react-native';

const App = () => {

  return (
  <View style = {styles.container}>
  <Text style = {styles.text}>Hola Coder!</Text>
  </View>
  )
}

export default App

const styles = StyleSheet.create({
container:{
  backgroundColor: "#0238",
  flex:1,
},
text:{
  color: "white",
}
})