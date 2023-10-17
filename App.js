import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarsenha, setConfirmarSenha] = useState("");
  const [notificacao, setNotificacao] = useState(false);
  const array = [
  ];


  const array2 = [
    {
      title: "main header",
      data: ["thiago", "murilo"],
    },
  ];

  const Stack = createStackNavigator();

  const styles = StyleSheet.create({
    input: {
      height: 40,
      marginLeft: 40,
      marginRight: 40,
      marginTop: 10,
      padding: 10,
      backgroundColor: "white",
      borderRadius: 5,
    },

    bg: {
      backgroundColor: "lightgray",
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
    },

    bgUsers: {
      backgroundColor: "lightgray",
      height: "100%"
    },

    inputs1: {
      flexDirection: "row",
      alignItems: 'center'
    },

    textView: {
      marginLeft: 40,
      marginTop:20
    },

    switch: {
      marginLeft: 12,
    },

    button: {
      padding: 10,
      margin: 12,
      backgroundColor: "white",
    },
    button1: {
      padding: 10,
      margin: 12,
    },

    textbutton: {
      textAlign: "center",
    },

    buttonLogin: {
      display: "flex",
      justifyContent: "flex-end",
    },

    title: {
      marginTop: '10%',
      marginBottom: '10%',
      fontSize: 100,
      textAlign: "center",
    },

    titleUsers: {
      fontSize: 70
    }

  });

  function cadastrar(){

    array.push({
      nome,
      idade,
      sexo,
      email,
      senha,
      notificacao
    })

    console.log(array)
    navigation.navigate()
  }

  function Cadastro(props) {
    return (
      <View style={styles.bg}>
        <Image
          style={{
            alignSelf: "center",
            height: "200px",
            width: "200px",
          }}
          source={require("./assets/user.jpg")}
        />

        <Text style={styles.textView}>Nome</Text>
        <TextInput
          style={styles.input}
          multiline
          maxLength={20}
          numberOfLines={2}
          width={10}
          onChangetext={(text) => setNome(text)}
        />

        <View style={styles.inputs1}>
          <View>
            <Text style={styles.textView}>Idade:</Text>
            <TextInput
              style={styles.input}
              multiline
              maxLength={20}
              numberOfLines={2}
              width={10}
              onChangetext={(text) => setIdade(text)}
            />
          </View>

          <View>
            <Text style={styles.textView}>Sexo:</Text>
            <TextInput
              style={styles.input}
              multiline
              maxLength={20}
              numberOfLines={2}
              width={10}
              onChangetext={(text) => setSexo(text)}
            />
          </View>
        </View>

        <View>
          <Text style={styles.textView}>Email:</Text>
          <TextInput
            style={styles.input}
            multiline
            maxLength={20}
            numberOfLines={2}
            width={10}
            onChangetext={(text) => setEmail(text)}
          />
        </View>

        <View>
          <Text style={styles.textView}>Senha:</Text>
          <TextInput
            style={styles.input}
            multiline
            maxLength={20}
            numberOfLines={2}
            width={10}
            onChangetext={(text) => setSenha(text)}
          />
        </View>

        <View>
          <Text style={styles.textView}>Confirmar Senha:</Text>
          <TextInput
            style={styles.input}
            multiline
            maxLength={20}
            numberOfLines={2}
            width={10}
            onChangetext={(text) => setConfirmarSenha(text)}
          />
        </View>

        <Text style={styles.textView}>Deseja receber notificações?</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#810bff" }}
          value={notificacao}
          onValueChange={() => setNotificacao(!notificacao)}
        />

        <View style={styles.buttonLogin}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => cadastrar()}
          >
            <Text style={styles.textbutton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => props.navigation.navigate("Login")}
          >
            <Text style={styles.textbutton}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function Login(props) {
    return (
      <View style={styles.bg}>
        <View>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.textView}>Email:</Text>
          <TextInput
            style={styles.input}
            multiline
            maxLength={20}
            numberOfLines={2}
            width={10}
            onChangetext={(text) => setSenha(text)}
          />
          <Text style={styles.textView}>Senha:</Text>
          <TextInput
            style={styles.input}
            multiline
            maxLength={20}
            numberOfLines={2}
            width={10}
            onChangetext={(text) => setSenha(text)}
          />
        </View>

        <View style={styles.buttonLogin}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate("Usuarios")}
          >
            <Text style={styles.textbutton}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button1}
            onPress={() => props.navigation.navigate("Cadastro")}
          >
            <Text style={styles.textbutton}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

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
