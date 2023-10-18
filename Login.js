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

export function Login(props) {
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