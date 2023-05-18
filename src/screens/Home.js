import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Alert, ScrollView, Dimensions, TouchableOpacity, Image, Text, TextInput, Button } from 'react-native';

import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';
import Filiais from '../components/Filiais';
import AppLoading from '../components/AppLoading';
// import DeviceInfo from 'react-native-device-info';
// import { getUniqueId, getManufacturer } from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";
import { useKeepAwake } from 'expo-keep-awake';



import * as Device from 'expo-device';

export default function Home(props) {

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

    console.log('======== PAGINA - HOME =============')

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);
    const [filiais, setFiliais] = useState([]);

    const onChangeScreen = (screen) => {
        navigation.navigate(screen);
    };
    const isFocused = useIsFocused();


    useEffect(() => {

        AsyncStorage.removeItem('dataAnswer');
        AsyncStorage.removeItem('currentIndex');
        AsyncStorage.removeItem('currentType');
        AsyncStorage.removeItem('codCliente');
        AsyncStorage.removeItem('dataQuestions');
        AsyncStorage.removeItem('dataRespondente');
        AsyncStorage.removeItem('codPontoContato');

        setLoading(true)

    }, [isFocused]);


    useEffect(() => {

        const checkAutentication = async () => {

            // console.log('running auth')

            try {

                await AsyncStorage.getItem('auth', (error, result) => {

                    if (result) {
                        // console.log(result);

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


    if (!loading) {

        return (

            <AppLoading />

        );

    } else {

        if (orientation == "PORTRAIT") {

            return (

                <ScrollView onRefresh={undefined}  refreshing={false} style={{ backgroundColor: ColorsApp.BACK }}>
                    <SafeAreaView style={{ flexGrow: 1,  backgroundColor: ColorsApp.BACK }}>


                        <View style={deviceType != 1 ? Styles.HomeContentTablet : Styles.HomeContent}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flex: 1, marginTop: 20 }}>
                                    <Image source={require('./../../assets/logo.png')} resizeMode={'contain'} style={Styles.AuthLogo} />
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>

                                    <Text style={deviceType != 1 ? Styles.HomeTitleTablet : Styles.HomeTitle}>olá <Text style={{ color: ColorsApp.PRIMARY }}>Bem-vindo</Text>,</Text>
                                </View>

                            </View>
                            <View style={{ marginBottom: 50 }}>
                                <View>
                                    <Text style={deviceType != 1 ? Styles.HomeSubtitleTablet : Styles.HomeSubtitle}>MINHAS FILIAIS</Text>
                                </View>

                                <Filiais />
                            </View>
                        </View>
                    </SafeAreaView>
                </ScrollView>

            );

        } else {

            return (

                <ScrollView onRefresh={undefined}  refreshing={false} style={{ backgroundColor: ColorsApp.BACK }}>
                    <SafeAreaView style={{ flexGrow: 1,  backgroundColor: ColorsApp.BACK }}>


                        <View style={deviceType != 1 ? Styles.HomeContentTablet : Styles.HomeContent}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flex: 1, marginTop: 20 }}>
                                    <Image source={require('./../../assets/logo.png')} resizeMode={'contain'} style={Styles.AuthLogo} />
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>

                                    <Text style={deviceType != 1 ? Styles.HomeTitleTablet : Styles.HomeTitle}>olá <Text style={{ color: ColorsApp.PRIMARY }}>Bem-vindo</Text>,</Text>
                                </View>

                            </View>
                            <View style={{ marginBottom: 50 }}>
                                <View>
                                    <Text style={deviceType != 1 ? Styles.HomeSubtitleTablet : Styles.HomeSubtitle}>MINHAS FILIAIS</Text>
                                </View>

                                <Filiais />
                            </View>
                        </View>
                    </SafeAreaView>
                </ScrollView>

            );
        }
    }
}
