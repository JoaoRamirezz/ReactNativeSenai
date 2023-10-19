import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import { useContext, useState } from "react";
import { Login } from "./Login";
import { utilsContext } from "./Context";

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
    height: "100%",
  },

  inputs1: {
    flexDirection: "row",
    alignItems: "center",
  },

  textView: {
    marginLeft: 40,
    marginTop: 20,
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
    marginTop: "10%",
    marginBottom: "10%",
    fontSize: 100,
    textAlign: "center",
  },

  titleUsers: {
    fontSize: 70,
  },
});

export function Cadastro(props) {

  
  const { data, setData } = useContext(utilsContext)
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarsenha, setConfirmarSenha] = useState("");
  const [notificacao, setNotificacao] = useState(false);
  
  function cadastrar() {
    setData([...data,{nome,idade,sexo,email,senha,notificacao}])
    props.navigation.navigate("Login")
  }

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
        onChangeText={(text) => setNome(text)}
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
            onChangeText={(text) => setIdade(text)}
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
            onChangeText={(text) => setSexo(text)}
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
          onChangeText={(text) => setEmail(text)}
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
          onChangeText={(text) => setSenha(text)}
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
          onChangeText={(text) => setConfirmarSenha(text)}
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
        <TouchableOpacity style={styles.button} onPress={() => cadastrar()}>
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
