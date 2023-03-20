import { enableScreens } from 'react-native-screens';
enableScreens();

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



  const [isLogged, setIsLogged] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // const isFocused = useIsFocused();




  useEffect(() => {

    const getItemFromStorage = async () => {

      // console.log('running auth')

      try {

        await AsyncStorage.getItem('auth', (error, result) => {

          if (result) {
            console.log(result);

            var data = JSON.parse(result)

            if (data.token) {

              console.log('logado app.js')
              // console.log(data.token)

              setLoaded(true)

            } else {
              console.log('nao logado app.js')

              setLoaded(true)
              // return false;


            }

          } else {

            // return false;
            setLoaded(true)
            console.log('false 1 app.js')
            // setLoaded(true)

          }

        });

      } catch (error) {

        // return false;
        console.log('false 2 app.js')
        setLoaded(true)

        // setLoaded(true)


      }
    }

    getItemFromStorage()



  }, []);






  // if (!loaded) {


  //   return (
  //     <Loading />

  //   );

  // }


  // if (loaded) {
    return (

      <NavigationContainer >
        {isLogged ? <DrawerNavigation /> : <DrawerNavigation />}
      </NavigationContainer>

    );
  }
// }








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
