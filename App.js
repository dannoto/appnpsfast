import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import GuestNavigation from './src/navigation/GuestNavigation';

import Loading from './src/components/AppLoading';
import ColorsApp from './src/config/ColorsApp';
// import { useIsFocused } from "@react-navigation/native";

export default function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // const isFocused = useIsFocused();


  useEffect(() => {

    const getItemFromStorage = async () => {

      // console.log('running auth')

      try {

        await AsyncStorage.getItem('auth', (error, result) => {

          if (result) {
            // console.log(result);

            var data = JSON.parse(result)

            if (data.token) {

              // console.log('logado app.js')
              // console.log(data.token)
              setIsLogged(true)

            } else {
              // console.log('nao logado')
              setIsLogged(false)
              return false;


            }

          } else {

            return false;
            setIsLogged(false)

          }

        });

      } catch (error) {

        return false;
        setIsLogged(false)


      }
    }

    getItemFromStorage()



  }, []);






  if (loaded) {
    return (
      <Loading />

    );


  } else {
    return (

      <NavigationContainer >
        {isLogged ? <DrawerNavigation /> : <GuestNavigation />}
      </NavigationContainer>

    );
  }
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
