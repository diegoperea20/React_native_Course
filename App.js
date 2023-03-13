import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
/* import { Cosa } from "./task"; */
import Task from "./task";
import Input1 from "./input1";
import Input2 from "./input2";
import Sum from './suma';

let numero = 50 * 10;
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Hello world {numero} </Text>
      <Image source={require("./assets/Haewon.jpg")} style={styles.imagen} />
      {/* <Image source={{uri:'https://picsum.photos/200/200'}} style={styles.imagen}/>*/}
      <Button title="Click Me" color="green" onPress={() => alert("Clicked")} />
      <TouchableOpacity
        onPress={() => alert("Clicked personalizado")}
        style={styles.boton_personalizado}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Click Me</Text>
      </TouchableOpacity>
      
      <Task />
      {/* <Input1 />
      <Input2 /> */}
      <Sum />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  imagen: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  boton_personalizado: {
    width: 200,
    height: 50,
    padding: 7,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
