import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { utilsContext } from "./Context";
import { Cadastro } from "./Cadastrar";
import { Login } from "./Login";
import { Users } from "./Users";
import {
  StyleSheet,
} from "react-native";
import { useState } from "react";

export default function App() {
  const Stack = createStackNavigator();
  const [data,setData] = useState([])

  return (
    <utilsContext.Provider value = {{data, setData}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Users" component={Users} />
        </Stack.Navigator>
      </NavigationContainer>
    </utilsContext.Provider>
  );
}
