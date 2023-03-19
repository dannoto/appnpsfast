import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Alert, ScrollView, Dimensions, TouchableOpacity, Image, Text, TextInput, Button } from 'react-native';

import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';
import Filiais from '../components/Filiais';
import AppLoading from '../components/AppLoading';


import AsyncStorage from '@react-native-async-storage/async-storage';

import { useIsFocused } from "@react-navigation/native";


import { useKeepAwake } from 'expo-keep-awake';

export default function Home(props) {

    useKeepAwake();

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


    if (!loading) {

        return (

            <AppLoading />

        );

    } else {

        return (

            <ScrollView style={{ backgroundColor: ColorsApp.BACK }}>
                <SafeAreaView style={{ flex: 1, backgroundColor: ColorsApp.BACK }}>


                    <View style={screenWidth >= 768 ? Styles.HomeContentTablet : Styles.HomeContent}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flex: 1, marginTop:20 }}>
                                <Image source={require('./../../assets/logo.png')} resizeMode={'contain'} style={Styles.AuthLogo} />
                            </View>
                            <View style={{ flex: 1,  justifyContent: 'center', alignItems: 'flex-start' }}>

                                <Text style={screenWidth >= 768 ? Styles.HomeTitleTablet : Styles.HomeTitle}>olá <Text style={{ color: ColorsApp.PRIMARY }}>Bem-vindo</Text>,</Text>
                            </View>

                        </View>
                        <View style={{ marginBottom: 50 }}>
                            <View>
                                <Text style={screenWidth >= 768 ? Styles.HomeSubtitleTablet : Styles.HomeSubtitle}>MINHAS FILIAIS</Text>
                            </View>

                            <Filiais />
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>




        );
    }
}
