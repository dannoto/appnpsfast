import { enableScreens } from 'react-native-screens';
enableScreens();

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerNavigation from './src/navigation/DrawerNavigation';
import GuestNavigation from './src/navigation/GuestNavigation';

import Loading from './src/components/AppLoading';
import ColorsApp from './src/config/ColorsApp';
// import { useIsFocused } from "@react-navigation/native";

import Login from '../screens/Login';
import Recuperacao from '../screens/Recuperacao';

import Home from '../screens/Home';
import PontosContato from '../screens/PontosContato';
import RunPesquisa from '../screens/RunPesquisa';


import RadioBottom from '../screens/Questoes/RadioBottom';
import CheckBox from '../screens/Questoes/CheckBox';
import CaixaDeTexto from '../screens/Questoes/CaixaDeTexto';
import Emoji from '../screens/Questoes/Emoji';
import Label from '../screens/Questoes/Label';

// Questions
import Um from '../screens/Questoes/Um';
import Dois from '../screens/Questoes/Dois';
import Tres from '../screens/Questoes/Tres';
import Quatro from '../screens/Questoes/Quatro';
import Onze from '../screens/Questoes/Onze';
import Treze from '../screens/Questoes/Treze';
import Dezesseis from '../screens/Questoes/Dezesseis';


// Questions


import StepContact from '../screens/StepContact';
import StepObrigado from '../screens/StepObrigado';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {



  const [isLogged, setIsLogged] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // const isFocused = useIsFocused();




  useEffect(() => {

    const checkAuthStatus = async () => {
      try {
        const authData = await AsyncStorage.getItem('auth');
        const token = JSON.parse(authData).token;
        return token ? true : false;
      } catch (e) {
        // console.log("catch")
        // console.log(e);
        return false;
      }
    };

    checkAuthStatus().then((status) => { console.log("qual statuso " + status); setIsLogged(status) });




  }, []);



  const GuestNavigation = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

  const DrawerNavigation = () => {
    return (
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="home" component={Home} />
      </Drawer.Navigator>
    );
  }






  return (

    // <NavigationContainer >
    //   {isLogged ? <DrawerNavigation /> : <GuestNavigation />}
    // </NavigationContainer>

    <NavigationContainer>
      {isLogged ? (
        <DrawerNavigation />
      ) : (
        <GuestNavigation />
      )}
    </NavigationContainer>

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
