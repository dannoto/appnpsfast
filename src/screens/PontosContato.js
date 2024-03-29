import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Alert, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';

import AppLoading from '../components/AppLoading';


import Pontos from '../components/Pontos';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useIsFocused } from "@react-navigation/native";

import { useKeepAwake } from 'expo-keep-awake';
import { DeviceType } from 'expo-device';


import * as Device from 'expo-device';


export default function PontosContato(props) {


    useKeepAwake();

    const [orientation, setOrientation] = useState("PORTRAIT");
    const [deviceType, setDeviceType] = useState("")

    // DeviceType
    Device.getDeviceTypeAsync().then((v) => {
        setDeviceType(v)
    })
    // DeviceType

    // Orientation
    useEffect(() => {

        Dimensions.addEventListener('change', ({ window: { width, height } }) => {

            if (width < height) {
                setOrientation("PORTRAIT")
            } else {
                setOrientation("LANDSCAPE")
            }

            console.log(orientation)
        })

    }, [orientation]);
    // Orientation

    console.log('======== PAGINA -PONTOS DE CONTATO =============')

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);
    const [filiais, setFiliais] = useState([]);

    const onChangeScreen = (screen) => {
        navigation.navigate(screen);
    };


    useEffect(() => {

        const checkAutentication = async () => {

            // console.log('running auth')

            try {

                await AsyncStorage.getItem('auth', (error, result) => {

                    if (result) {
                        console.log(result);

                        var data = JSON.parse(result)

                        if (data.token) {

                            console.log('sucessfull check autentiocatoin')


                        } else {
                            console.log('no data.token  check autentiocatoin')
                            onChangeScreen('login')


                        }

                    } else {

                        console.log('result false check autentiocatoin')
                        onChangeScreen('login')
                    }

                });

            } catch (error) {

                console.log('catch erroe check autentiocatoin')
                onChangeScreen('login')

            }
        }

        checkAutentication()



    }, []);


    useEffect(() => {

        AsyncStorage.removeItem('dataAnswer');
        AsyncStorage.removeItem('currentIndex');
        AsyncStorage.removeItem('currentType');
        AsyncStorage.removeItem('codCliente');
        AsyncStorage.removeItem('dataQuestions');
        AsyncStorage.removeItem('dataRespondente');
        AsyncStorage.removeItem('codPontoContato');


        setLoading(true)

    }, []);



    if (!loading) {

        return (

            <AppLoading />

        );

    } else {


        if (orientation == "PORTRAIT") {
            return (


                <ScrollView style={{ backgroundColor: ColorsApp.BACK }}>
                    <SafeAreaView style={{ flex: 1, backgroundColor: ColorsApp.BACK }}>


                        <View style={deviceType != 1 ? Styles.HomeContentTablet : Styles.HomeContent}>

                            <View style={{ marginBottom: 50, marginTop: 80 }}>
                                <View>
                                    <Text style={deviceType != 1 ? Styles.HomeSubtitleTablet : Styles.HomeSubtitle}>PONTOS DE CONTATO</Text>
                                </View>

                                <Pontos />
                            </View>
                        </View>
                    </SafeAreaView>
                </ScrollView>


            );
        } else {
            return (


                <ScrollView style={{ backgroundColor: ColorsApp.BACK }}>
                    <SafeAreaView style={{ flex: 1, backgroundColor: ColorsApp.BACK }}>


                        <View style={deviceType != 1 ? Styles.HomeContentTablet : Styles.HomeContent}>

                            <View style={{ marginBottom: 50, marginTop: 80 }}>
                                <View>
                                    <Text style={deviceType != 1 ? Styles.HomeSubtitleTablet : Styles.HomeSubtitle}>PONTOS DE CONTATO</Text>
                                </View>

                                <Pontos />
                            </View>
                        </View>
                    </SafeAreaView>
                </ScrollView>


            );
        }
    }
}
