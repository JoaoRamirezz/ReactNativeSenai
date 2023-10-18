import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { utilsContext } from "./Context";
import { Cadastro } from "./Cadastrar";
import { Login } from "./Login";


import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  SectionList,
  Switch,
} from "react-native";
import { useState } from "react";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function App() {


  const array2 = [
    {
      title: "main header",
      data: ["thiago", "murilo"],
    },
  ];

  const Stack = createStackNavigator();

  function Users(props){
    return(
      <View style={styles.bgUsers}>
          <Text style={styles.titleUsers}>Usuarios</Text>
          <fieldset>
            <View>
              <Text>Nome: </Text>
              <Text>Idade: </Text>
              <Text>Sexo: </Text>
              <Text>Recebe Notificacao: </Text>
            </View>
          </fieldset>
      </View>
    )
  }



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Usuarios" component={Users} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>

    //   {array.map((item, index) => {
    //     return <Text key={index}>{item}</Text>;
    //   })}

    //   <SectionList
    //     sections={array2}
    //     keyExtractor={(item, index) => item + index}
    //     renderItem={({ item }) => <Text style={{ color: "red" }}>{item}</Text>}
    //     renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
    //   />

    //   <Switch
    //     trackColor={{ false: "#767577", true: "#810bff" }}
    //     value={notificacao}
    //     onValueChange={() => setNotificacao(!notificacao)}
    //   />

    //   <Text>Open up App.js to start your app!</Text>
    //   <StatusBar style="auto" />
    //   <TextInput
    //     multiline
    //     maxLength={40}
    //     numberOfLines={4}
    //     onChangetext={(text) => setSenha(text)}
    //   />
    //   <Text>{senha}</Text>

    //   <Button color={"black"} title="Cadastro">
    //     <TouchableOpacity></TouchableOpacity>
    //   </Button>

    //   <Image
    //     style={{
    //       height: "100px",
    //       width: "100px",
    //     }}
    //     source={require("./assets/icon.png")}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
